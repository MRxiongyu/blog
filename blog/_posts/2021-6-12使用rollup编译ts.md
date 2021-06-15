# 使用rollup编译ts

#### rollup和webpack的区别

1. rollup更适合写类库，webpack更适合开发
2. webpack编译后更重 因为需要处理css和img等等 有编译头

#### 使用rollup编译ts

安装

```
yarn add typescript rollup rollup-plugin-typescript2 @rollup/plugin-node-resolve -D
```
初始化ts
```
npx tsc --init
```
rollup 支持打包模式 es2020 ESnext
创建rollup.config.js
```
import path from 'path'
import ts from 'rollup-plugin-typescript2'
import {nodeResolve} from '@rollup/plugin-node-resolve'

export default {
    input: 'src/index.ts',
    output: {
        format: 'cjs', // commonjs 规范 umd esm 
        file: path.resolve('dist/bundle.js')
    },
    plugins: [
        ts({
            tsconfig: path.resolve('tsconfig.json')
        }),
        nodeResolve({
            extensions: ['.js', '.ts']
        })
    ]
}
```
安装vs插件coderunner  
npm i node-type -g
就可以直接运行ts了

#### 在package.json 里面

```
"scripts": { 
    "dev": "rollup -c -w"
}
```
配置自动刷新编译ts

