import chai from "chai";
import { solidity } from "ethereum-waffle";
import { Ship } from "../utils";
import {
  TokenA,
  TokenA__factory,
  TokenB,
  TokenB__factory,
  Staker,
  Staker__factory,
} from "../types";
import { deployments, ethers, network } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

chai.use(solidity);
const { expect } = chai;

let ship: Ship;
let tokenA: TokenA;
let tokenB: TokenB;
let stake: Staker;
let owner: SignerWithAddress;
let alice: SignerWithAddress;

const setup = deployments.createFixture(async (hre) => {
  const ship = await Ship.init(hre);
  const { connect, accounts, users } = ship;
  await deployments.fixture(["init"]);

  const tokenA = await connect(TokenA__factory);
  const tokenB = await connect(TokenB__factory);
  const staker = await connect(Staker__factory);

  return {
    ship,
    tokenA,
    tokenB,
    staker,
    accounts,
  };
});

describe("Staking contract test", () => {
  before(async () => {
    const cache = await setup();
    ship = cache.ship;
    tokenA = cache.tokenA;
    tokenB = cache.tokenB;
    stake = cache.staker;
    owner = cache.accounts.deployer;
    alice = cache.accounts.alice;

    await stake.setStakingToken(tokenA.address);
    await stake.setRewardToken(tokenB.address);
    await stake.setRate(100); // 1% per week
  });

  it("Staker should have tokenB for reward", async () => {
    const amount = await tokenB.balanceOf(stake.address);
    console.log(amount);
  });

  it("Owner should have tokenA and send it to alice to stake", async () => {
    const amount = await tokenA.balanceOf(owner.address);
    console.log(amount);

    await tokenA.connect(owner).transfer(alice.address, 1000);
    expect(await tokenA.balanceOf(alice.address)).to.eq(1000);
  });

  it("Alice stakes tokenA", async () => {
    await tokenA.connect(alice).approve(stake.address, 1000);
    await stake.connect(alice).stake(1000);
    expect(await tokenA.balanceOf(alice.address)).to.eq(0);
    expect(await tokenA.balanceOf(stake.address)).to.eq(1000);
  });

  // it("Times goes a week", async () => {
  //   // send time to over
  //   await network.provider.send("evm_increaseTime", [7 * 24 * 60 * 60]); // send time a week
  //   await network.provider.send("evm_mine"); // this one will have 02:00 PM as its timestamp
  // });

  it("Alice withdraws reward", async () => {
    let data = await stake.connect(alice).getStakingData();
    console.log(data);
    expect(await tokenB.balanceOf(alice.address)).to.eq(0);
    await stake.connect(alice).withdraw();
    // expect(await tokenB.balanceOf(alice.address)).to.eq(10);
    data = await stake.connect(alice).getStakingData();
    console.log(data);
  });

  it("Alice unstake his token", async () => {
    await stake.connect(alice).unStake(900);
    expect(await tokenA.balanceOf(alice.address)).to.eq(900);
    expect(await tokenA.balanceOf(stake.address)).to.eq(100);
  });
});
