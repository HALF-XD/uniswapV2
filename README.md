本仓库按照 [崔棉大师 视频](https://www.bilibili.com/video/BV1ph411e7bT) 指导下完成

### fankou Doc

#### 合约

1. 工厂合约
2. 路由合约
3. weth 合约
4. muticall 合约

- 知识点：
  - 快速找到 uniswap 合约地址
  - weth 功能，其他链对应的合约
  - muticall 功能

#### 前端

1. uniswap 前端
2. uniswap-SDK

- 知识点：
  - 从 github 找到历史提交版本

#### 其他

1. 链的链接方式 https://chainlist.org 查询 chainId

#### 操作顺序

1. 修改合约获取 init_code

```
bytes32 public constant INIT_CODE_PAIR_HASH = keccak256(abi.encodePacked(type(UniswapV2Pair).creationCode));
```

2. 部署工厂合约
3. 获取`INIT_CODE_PAIR_HASH`
4. 修改路由合约
5. 部署路由合约
6. 修改 SDK
   a. 工厂合约地址
   b. INIT_CODE_PAIR_HASH
   c. weth 地址
   d. 链 id
7. 注册 npmjs
8. 发布 sdk
9. 修改前端
   a. 路由合约地址
   b. 支持的链 id, supportedChainIds
   c. 浏览器链接, getEtherscanLink
   d. sdk 包名
   e. muticall 地址
   f. tokenlist
10. 部署前端

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

### 部署合约顺序

router 合约需要用到 【factory 合约地址】 和 【weth 合约地址】
所以
①. factory 合约
②. weth 合约
③. router 合约
④. multicall 合约
⑤. ERC20 发布 token

### 发布到 ghpage 上

interface 目录下：

1. 下载 gh-pages： `yarn add gh-pages`
2. `package.json`文件中增加一句脚本 `"deploy":"gh-pages -d build"`
3. 目录下执行`yarn build`编译后新增了`build`文件夹
4. 目录下执行`yarn deploy`,显示 published,表示成功布置到了 GitHub page 上了
