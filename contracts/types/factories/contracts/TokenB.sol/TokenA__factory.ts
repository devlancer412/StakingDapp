/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenA,
  TokenAInterface,
} from "../../../contracts/TokenB.sol/TokenA";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000d7b38038062000d7b83398101604081905262000034916200025b565b6040518060400160405280600e81526020016d2932bbb0b932102a37b5b2b7102160911b81525060405180604001604052806003815260200162292a2160e91b81525081600390805190602001906200008f929190620001b5565b508051620000a5906004906020840190620001b5565b505050620000c6816b204fce5e3e25026110000000620000cd60201b60201c565b50620002f1565b6001600160a01b038216620001285760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200013c91906200028d565b90915550506001600160a01b038216600090815260208190526040812080548392906200016b9084906200028d565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001c390620002b4565b90600052602060002090601f016020900481019282620001e7576000855562000232565b82601f106200020257805160ff191683800117855562000232565b8280016001018555821562000232579182015b828111156200023257825182559160200191906001019062000215565b506200024092915062000244565b5090565b5b8082111562000240576000815560010162000245565b6000602082840312156200026e57600080fd5b81516001600160a01b03811681146200028657600080fd5b9392505050565b60008219821115620002af57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002c957607f821691505b60208210811415620002eb57634e487b7160e01b600052602260045260246000fd5b50919050565b610a7a80620003016000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806342966c681161008c57806395d89b411161006657806395d89b41146101ad578063a457c2d7146101b5578063a9059cbb146101c8578063dd62ed3e146101db57600080fd5b806342966c681461015c57806370a082311461017157806379cc67901461019a57600080fd5b806306fdde03146100d4578063095ea7b3146100f257806318160ddd1461011557806323b872dd14610127578063313ce5671461013a5780633950935114610149575b600080fd5b6100dc6101ee565b6040516100e9919061087f565b60405180910390f35b6101056101003660046108f0565b610280565b60405190151581526020016100e9565b6002545b6040519081526020016100e9565b61010561013536600461091a565b610298565b604051601281526020016100e9565b6101056101573660046108f0565b6102bc565b61016f61016a366004610956565b6102de565b005b61011961017f36600461096f565b6001600160a01b031660009081526020819052604090205490565b61016f6101a83660046108f0565b6102eb565b6100dc610304565b6101056101c33660046108f0565b610313565b6101056101d63660046108f0565b610393565b6101196101e9366004610991565b6103a1565b6060600380546101fd906109c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610229906109c4565b80156102765780601f1061024b57610100808354040283529160200191610276565b820191906000526020600020905b81548152906001019060200180831161025957829003601f168201915b5050505050905090565b60003361028e8185856103cc565b5060019392505050565b6000336102a68582856104f1565b6102b185858561056b565b506001949350505050565b60003361028e8185856102cf83836103a1565b6102d99190610a15565b6103cc565b6102e83382610739565b50565b6102f68233836104f1565b6103008282610739565b5050565b6060600480546101fd906109c4565b6000338161032182866103a1565b9050838110156103865760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6102b182868684036103cc565b60003361028e81858561056b565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661042e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161037d565b6001600160a01b03821661048f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161037d565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b60006104fd84846103a1565b9050600019811461056557818110156105585760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161037d565b61056584848484036103cc565b50505050565b6001600160a01b0383166105cf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161037d565b6001600160a01b0382166106315760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161037d565b6001600160a01b038316600090815260208190526040902054818110156106a95760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161037d565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106e0908490610a15565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161072c91815260200190565b60405180910390a3610565565b6001600160a01b0382166107995760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161037d565b6001600160a01b0382166000908152602081905260409020548181101561080d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161037d565b6001600160a01b038316600090815260208190526040812083830390556002805484929061083c908490610a2d565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016104e4565b600060208083528351808285015260005b818110156108ac57858101830151858201604001528201610890565b818111156108be576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146108eb57600080fd5b919050565b6000806040838503121561090357600080fd5b61090c836108d4565b946020939093013593505050565b60008060006060848603121561092f57600080fd5b610938846108d4565b9250610946602085016108d4565b9150604084013590509250925092565b60006020828403121561096857600080fd5b5035919050565b60006020828403121561098157600080fd5b61098a826108d4565b9392505050565b600080604083850312156109a457600080fd5b6109ad836108d4565b91506109bb602084016108d4565b90509250929050565b600181811c908216806109d857607f821691505b602082108114156109f957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610a2857610a286109ff565b500190565b600082821015610a3f57610a3f6109ff565b50039056fea264697066735822122091b5efd8bad2230e10bc116a5078afbafb92a406c33bf3824552028eae12981964736f6c63430008090033";

type TokenAConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenAConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenA__factory extends ContractFactory {
  constructor(...args: TokenAConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    staker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenA> {
    return super.deploy(staker, overrides || {}) as Promise<TokenA>;
  }
  override getDeployTransaction(
    staker: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(staker, overrides || {});
  }
  override attach(address: string): TokenA {
    return super.attach(address) as TokenA;
  }
  override connect(signer: Signer): TokenA__factory {
    return super.connect(signer) as TokenA__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenAInterface {
    return new utils.Interface(_abi) as TokenAInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TokenA {
    return new Contract(address, _abi, signerOrProvider) as TokenA;
  }
}
