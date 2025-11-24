// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./interface/IERC20.sol";

contract FateFi {
    address public owner;
    address tokenAddress;

    enum Category {
        Trending,
        Crypto,
        Sports,
        Politics,
        Culture
    }

    enum Option {
        Yes,
        No
    }

    struct Stake {
        address staker;
        Option option;
        uint256 amount;
    }

    struct Bet {
        string name;
        string description;
        Category category;
        uint256 noOfBets;
        uint256 betDeadline;
        Stake[] stakes;
        bool isActive;
    }

    mapping(string => Bet) public betting;
    Bet[] bettings;

    constructor(address _tokenAddress) {
        owner = msg.sender;
        tokenAddress = _tokenAddress;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call these function");
        _;
    }

    function createBet(
        string memory _name,
        string memory _description,
        uint256 _betDeadline,
        Category _category
    ) external onlyOwner {
        require(_betDeadline != 0, "bet deadline cannot be zero");

        Bet storage bet = betting[_name];

        bet.name = _name;
        bet.description = _description;
        bet.category = _category;
        bet.noOfBets = 0;
        bet.betDeadline = _betDeadline;
        bet.isActive = true;

        bettings.push(bet);
        betting[_name] = bet;
    }

    function stakeInBet(
        string memory _nameOfBet,
        uint256 _amount,
        Option _option
    ) external {
        Bet storage bet = betting[_nameOfBet];
        uint256 tokenBalance = IERC20(tokenAddress).balanceOf(msg.sender);

        require(bet.isActive == true, "Bet is not active");
        require(tokenBalance >= _amount, "Insufficient token balance");

        IERC20(tokenAddress).transferFrom(msg.sender, address(this), _amount);

        Stake memory stake = Stake({
            staker: msg.sender,
            option: _option,
            amount: _amount
        });

        bet.stakes.push(stake);
    }

    function distributeStake(
        string memory _nameOfBet,
        Option winningOption
    ) external onlyOwner {
        Bet storage bet = betting[_nameOfBet];
        require(bet.isActive == true, "Bet is not active");
        require(
            bet.betDeadline != 0 && block.timestamp >= bet.betDeadline,
            "Bet not yet ended"
        );
        require(tokenAddress != address(0), "Token address not set");

        uint256 totalWinning = 0;
        uint256 totalLosing = 0;
        uint256 len = bet.stakes.length;

        // calculate totals
        for (uint256 i = 0; i < len; i++) {
            if (bet.stakes[i].option == winningOption) {
                totalWinning += bet.stakes[i].amount;
            } else {
                totalLosing += bet.stakes[i].amount;
            }
        }

        // mark inactive to prevent reentrancy effects from token transfers
        bet.isActive = false;
        bet.noOfBets = len;

        // if no winners, refund everyone
        if (totalWinning == 0) {
            for (uint256 i = 0; i < len; i++) {
                uint256 amt = bet.stakes[i].amount;
                if (amt > 0) {
                    require(
                        IERC20(tokenAddress).transfer(
                            bet.stakes[i].staker,
                            amt
                        ),
                        "Refund failed"
                    );
                }
            }
        } else {
            // distribute pool proportionally to winners
            for (uint256 i = 0; i < len; i++) {
                if (bet.stakes[i].option == winningOption) {
                    uint256 stAmt = bet.stakes[i].amount;
                    // winner gets their stake plus their share of losing pool
                    uint256 reward = stAmt +
                        (stAmt * totalLosing) /
                        totalWinning;
                    require(
                        IERC20(tokenAddress).transfer(
                            bet.stakes[i].staker,
                            reward
                        ),
                        "Payout failed"
                    );
                }
            }
        }

        // clear stakes to free storage
        delete bet.stakes;

        // transfer any dust left due to integer division to owner
        uint256 remaining = IERC20(tokenAddress).balanceOf(address(this));
        if (remaining > 0) {
            require(
                IERC20(tokenAddress).transfer(owner, remaining),
                "Transfer remaining failed"
            );
        }
    }

    // getter functions
    function getBet(string memory _name) external view returns (Bet memory) {
        Bet memory bet = betting[_name];
        return bet;
    }

    function getBets() external view returns (Bet[] memory) {
        Bet[] memory bets = bettings;
        return bets;
    }
}
