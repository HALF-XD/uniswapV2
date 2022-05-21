### 发布到 ghpage 上

interface 目录下：

1. 下载 gh-pages： `yarn add gh-pages`
2. `package.json`文件中增加一句脚本 `"deploy":"gh-pages -d build"`
3. 目录下执行`yarn build`编译后新增了`build`文件夹
4. 目录下执行`yarn deploy`,显示 published,表示成功布置到了 GitHub page 上了

遇到问题：
（1）`branch already exists`

- 清除 gh-pages 的缓存文件，
- `node_modules/gh-pages/.cache`或者`node_modules/.cache/gh-pages[3.1.0之后，缓存目录]`
