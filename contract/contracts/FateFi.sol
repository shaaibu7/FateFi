// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "./interface/IERC20.sol";

contract FateFi {
    address owner;
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

    mapping(string => Bet) betting;
    Bet[] bettings;

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call these function");
        _;
    }

    function createBet(string memory _name, string  memory _description, uint256 _betDeadline, Category _category) onlyOwner external {
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


    function stakeInBet(string memory _nameOfBet, uint256 _amount, Option _option) external {
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


    function 
   
}
