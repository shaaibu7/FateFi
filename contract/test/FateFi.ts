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
    const token = await erc20Token.connect(account1).deploy();

    return { token };
  }

  async function deployFateFi() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const { token } = await loadFixture(deployToken)

    const FateFiContract = await hre.ethers.getContractFactory("FateFi");

    const FateFi = await FateFiContract.connect(owner).deploy();


    return { FateFi, owner, otherAccount, token };
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


  describe("Test for contract deployment", function () {
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


})
