import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";


describe("FateFi Contract", function () {
  async function deployToken() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, account1] = await hre.ethers.getSigners();

    const erc20Token = await hre.ethers.getContractFactory("FateFiToken");
    const token = await erc20Token.connect(owner).deploy();

    return { token };
  }

  async function deployFateFi() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount, account3 ] = await hre.ethers.getSigners();

    const { token } = await loadFixture(deployToken)

    const FateFiContract = await hre.ethers.getContractFactory("FateFi");

    const FateFi = await FateFiContract.connect(owner).deploy(token);


    return { FateFi, owner, otherAccount, account3, token };
  }

  describe("Test for contract deployment", function () {
    it("Should pass if owner is correct", async function () {
      const { FateFi, owner, otherAccount } = await loadFixture(deployFateFi);

      expect(await FateFi.owner()).to.equal(owner);
    });

    it("Should fail if owner is incorrect", async function () {
      const { FateFi, owner, otherAccount } = await loadFixture(deployFateFi);


      expect(await FateFi.owner()).to.not.eq(otherAccount);
    });


  });


  describe("Test for creating bet", function () {
    it("Should pass bet is successfully created", async function () {
      const { FateFi, owner, otherAccount } = await loadFixture(deployFateFi);


      let nameOfBet = "Will LiverPool win dortmund";
      let betDescription = "Market for bet is football";
      let betTime = Date.now();

      await FateFi.createBet(nameOfBet, betDescription, BigInt(betTime), 2);

      let nameOfBet1 = "Will the stocks market appreciate today";
      let betDescription1 = "Market for bet is Trending";
      let betTime1 = Date.now();

      await FateFi.createBet(nameOfBet1, betDescription1, BigInt(betTime1), 0);

      let bet = await FateFi.getBet(nameOfBet);
      let bets = await FateFi.getBets();

      console.log("The bet is: ", bet);

      expect(await bet.name).to.equal(nameOfBet);
      expect(await bet.isActive).to.equal(true);
      expect(await bets.length).to.equal(2);
    })
  });

    describe("Test for staking in bet", function () {
    it("Should pass if stake is successful", async function () {
      const { FateFi, owner, otherAccount, account3, token } = await loadFixture(deployFateFi);
  


      let nameOfBet = "Will LiverPool win dortmund";
      let betDescription = "Market for bet is football";
      let betTime = Date.now();

      await FateFi.createBet(nameOfBet, betDescription, BigInt(betTime), 2);

      let nameOfBet1 = "Will the stocks market appreciate today";
      let betDescription1 = "Market for bet is Trending";
      let betTime1 = Date.now();

      await FateFi.createBet(nameOfBet1, betDescription1, BigInt(betTime1), 0);

      // Mint token to accounts
      await token.connect(owner).mint(50)
      await token.transfer(otherAccount, 20);
      await token.transfer(account3, 20);

      let ownerBalance = await token.balanceOf(owner);
      let otherBalance = await token.balanceOf(otherAccount);
      let account3Balance = await token.balanceOf(account3);
      
      console.log(ownerBalance, otherBalance, account3Balance);

      // Staking in a bet

      let amount = 7;
      let option = 1;

      await token.connect(otherAccount).approve(FateFi, 8);
      await token.connect(account3).approve(FateFi, 8);

      let allowance = await token.allowance(otherAccount, FateFi);
       

      console.log("This is the allowance",allowance)
      await FateFi.connect(otherAccount).stakeInBet(nameOfBet, BigInt(amount), option);
      await FateFi.connect(account3).stakeInBet(nameOfBet, BigInt(amount), 0);


      let bet = await FateFi.getBet(nameOfBet);

      console.log("This is the bet..", bet);


      expect(await bet.stakes[0][0]).to.equal(otherAccount);
      expect(await bet.stakes[0][1]).to.equal(1);
      expect(await bet.stakes[0][2]).to.equal(7);
      
    })
  });


})
