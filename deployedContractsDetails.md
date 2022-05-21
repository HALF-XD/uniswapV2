### 用到的合约列表，部署的时候注意编译版本号和虚拟器版本

```json
{
  "router.sol": {
    "合约": "https://etherscan.io/gastracker > Uniswap V2: Router 2 > Contract > code",
    "配置": {
      "Contract Name": "UniswapV2Router02",
      "Optimization Enabled": "Yes with 999999 runs",
      "Compiler Version": "v0.6.6+commit.6c089d02",
      "EvmVersion": "istanbul"
    },
    "部署合约地址": "0xD4a194eCAb2272Bf33b0dCEb21f80714356f0627"
  },
  "weth9.sol": {
    "合约": "router合约里的 https://etherscan.io/address/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
    "配置": {
      "Contract Name": "WETH9",
      "Optimization Enabled": "No with 200 runs",
      "Compiler Version": "v0.4.19+commit.c4cbbb05",
      "EvmVersion": "default"
    },
    "部署合约地址": "0x3b1edFe363b1D167583C6d6c7CA15ABF635aD4C5"
  },
  "factory.sol": {
    "合约": "router合约里的 https://etherscan.io/address/0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
    "配置": {
      "Contract Name": "UniswapV2Factory",
      "Optimization Enabled": "Yes with 999999 runs",
      "Compiler Version": "v0.5.16+commit.9c3226ce",
      "EvmVersion": "istanbul"
    },
    "部署合约地址": "0xA914ce191A70a3133eE6f9b3EEC4BB815D019224"
  },
  "multicall.sol": {
    "合约": "搜的 https://etherscan.io/address/0x5e227ad1969ea493b43f840cff78d08a6fc17796#code",
    "配置": {
      "Contract Name": "Multicall",
      "Optimization Enabled": "No with 200 runs",
      "Compiler Version": "v0.5.12+commit.7709ece9",
      "EvmVersion": "default"
    },
    "部署合约地址": "0x06eDECc21f728196EB851ED82ec3467719Da4cE0"
  },
  "ERC20.sol": {
    "合约": "搜的 https://etherscan.io/address/0x5e227ad1969ea493b43f840cff78d08a6fc17796#code",
    "配置": {
      "Contract Name": "ERC20",
      "Optimization Enabled": "No with 200 runs",
      "Compiler Version": "v0.8.0",
      "EvmVersion": "default"
    },
    "部署合约地址": {
      "0x9D1f361b9c8FE50833fc15F72FEC00c557d9133c": {
        "name": "TTTT",
        "symbol": "TT",
        "totalSupply": "1000000000000000000000000000",
        "decimals": "18"
      },
      "0xb78bEFCC2D892791B410A8b5089614C9103b83a6": {
        "name": "SSSS",
        "symbol": "SS",
        "totalSupply": "5000000000000000000000000000",
        "decimals": "18"
      }
    }
  }
}
```
