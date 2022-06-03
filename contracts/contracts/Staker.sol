//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/interfaces/IERC20.sol";

contract Staker is Ownable {
    struct StakeData {
        uint256 time;
        uint256 amount;
        uint256 rewardAmount;
    }

    address private _stakingToken;
    address private _rewardToken;
    uint256 private _rate;

    mapping(address => StakeData) private stakes;

    constructor() {
        _rate = 100;
    }

    modifier canStake() {
        require(
            _stakingToken != address(0),
            "STAKING:doesn't set staking token"
        );
        require(_rewardToken != address(0), "STAKING:doesn't set reward token");
        _;
    }

    function setStakingToken(address tokenAddr) public onlyOwner {
        _stakingToken = tokenAddr;
    }

    function setRewardToken(address tokenAddr) public onlyOwner {
        _rewardToken = tokenAddr;
    }

    function setRate(uint256 rate) public onlyOwner {
        _rate = rate;
    }

    function stake(uint256 amount) public canStake {
        IERC20(_stakingToken).transferFrom(msg.sender, address(this), amount);

        uint256 rateSpace = 1 weeks;
        if (
            stakes[msg.sender].amount > 0 || stakes[msg.sender].rewardAmount > 0
        ) {
            stakes[msg.sender].rewardAmount +=
                (stakes[msg.sender].amount *
                    _rate *
                    (block.timestamp - stakes[msg.sender].time)) /
                10000 /
                rateSpace;
            stakes[msg.sender].time = block.timestamp;
            stakes[msg.sender].amount += amount;
            return;
        }

        stakes[msg.sender] = StakeData(amount, block.timestamp, 0);
    }

    function unStake(uint256 amount) public canStake {
        require(
            stakes[msg.sender].amount >= amount,
            "STAKING:amount is small than request"
        );

        uint256 rateSpace = 1 weeks;
        stakes[msg.sender].rewardAmount +=
            (
                (stakes[msg.sender].amount *
                    _rate *
                    (block.timestamp - stakes[msg.sender].time))
            ) /
            10000 /
            rateSpace;

        stakes[msg.sender].time = block.timestamp;
        stakes[msg.sender].amount -= amount;

        IERC20(_stakingToken).transfer(msg.sender, amount);
    }

    function withdraw() public canStake {
        uint256 rateSpace = 1 weeks;
        stakes[msg.sender].rewardAmount +=
            (
                (stakes[msg.sender].amount *
                    _rate *
                    (block.timestamp - stakes[msg.sender].time))
            ) /
            10000 /
            rateSpace;

        stakes[msg.sender].time = block.timestamp;

        require(stakes[msg.sender].rewardAmount > 0, "STAKING:amount is zero");
        uint256 rewardAmount = stakes[msg.sender].rewardAmount;
        stakes[msg.sender].rewardAmount = 0;
        IERC20(_rewardToken).transfer(msg.sender, rewardAmount);
    }

    function getStakingData() public view returns (StakeData memory) {
        return stakes[msg.sender];
    }

    function getReward() public view returns (uint256 amount) {
        uint256 rateSpace = 1 weeks;
        amount = stakes[msg.sender].amount;
        amount +=
            (
                (stakes[msg.sender].amount *
                    _rate *
                    (block.timestamp - stakes[msg.sender].time))
            ) /
            10000 /
            rateSpace;
    }

    function test() public view returns (uint256) {
        return (block.timestamp - stakes[msg.sender].time);
    }
}
