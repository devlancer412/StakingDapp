//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenA is ERC20 {
    constructor() ERC20("Stakable Token A", "STA") {
        _mint(msg.sender, 10000 * 10 * 18);
    }
}
