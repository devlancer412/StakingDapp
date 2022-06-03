//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenB is ERC20 {
    constructor(address staker) ERC20("Reward Token B", "RTB") {
        _mint(staker, 10**10 * 10**18);
    }
}
