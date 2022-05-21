### fankou Doc

#### 合约

1. 工厂合约
2. 路由合约: router 合约需要用到 【factory 合约地址】 和 【weth 合约地址】
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
   - 工厂合约地址
   - INIT_CODE_PAIR_HASH
   - weth 地址
   - 链 id
7. 注册 npmjs
8. 发布 sdk
9. 修改前端
   - 路由合约地址
   - 支持的链 id, supportedChainIds
   - 浏览器链接, getEtherscanLink
   - sdk 包名
   - muticall 地址
   - tokenlist
10. 部署前端
