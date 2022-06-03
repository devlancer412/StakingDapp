import { DeployFunction } from "hardhat-deploy/types";
import {
  TokenA__factory,
  TokenB__factory,
  Staker,
  Staker__factory,
} from "../types";
import { toWei, Ship } from "../utils";

const func: DeployFunction = async (hre) => {
  const { deploy } = await Ship.init(hre);
  const staker = await deploy(Staker__factory);
  await deploy(TokenA__factory);
  await deploy(TokenB__factory, { args: [staker.address] });
};

export default func;
func.tags = ["init"];
