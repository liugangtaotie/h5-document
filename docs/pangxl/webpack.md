#                           webpack初级篇

## webpack基础配置

- 前提条件

在开始之前，请确保安装了 [Node.js](https://nodejs.org/en/) 的最新版本。使用 Node.js 最新的长期支持版本(LTS - Long Term Support)。使用旧版本，你可能遇到各种问题，因为它们可能缺少 webpack 功能以及/或者缺少相关 package 包。

- webpack安装(一般建议本地webpack)

```
npm webpack webpack-cli -D
```

 webpack 4+ 版本需要分开安装webpack、webpack-cli 

-D ：开发依赖，上线时候不需要

创建简易webpack项目，目录下创建index.html文件、src下添加index.js文件 ,使用npx webpack 命令打包，会生成dist文件夹，和main.js，main.js就是默认打包后的js文件，在index.html中script标签引入main.js文件，在浏览器中打开 `index.html`，如果一切访问都正常，你应该能看到以下文本：'Hello webpack'。

```bash
mkdir webpack-demo && cd webpack-demo
npm init -y
npm install webpack webpack-cli --D
```

```diff
 webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

**src/index.js**

```javascript
function component () {

  let element = document.createElement("div");

  element.innerHTML = ['Hello', 'webpack'].join(",")

  return element;

}
document.body.appendChild(component());
```

`npx webpack`是Node 提供的 `npx` 命令，会将我们的脚本作为[入口起点](https://www.webpackjs.com/concepts/entry-points)，然后 [输出](https://www.webpackjs.com/concepts/output) 默认打包文件为 `main.js`。也可以在终端输入如下命令：

```
D:\training-h5>node_modules\.bin\webpack app\main.js public\bundle.js
```

1.training-h5项目下面的node_modules\.bin\webpack

2.app\main.js是要打包的文件

3.public\bundle.js 是打包后输出的文件，可配置

- webpack配置

webpack 可以进行0配置（使用默认配置，以上打包是使用默认配置的）

在 webpack 4 中，可以无须任何配置使用，然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持 [配置文件](https://www.webpackjs.com/concepts/configuration)。

新增webpack.config.js文件

```javascript
const path = require('path');//  Node.js 核心模块，用于操作文件路径。
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.export={

mode:""//模式 开发、生成环境

entry："" //设置打包入口文件，作为构建其内部依赖图的开始文件

output:{
filename:""//打包后模块文件名称
path: path.resolve(__dirname, 'dist'),// 导出路径必须是一个绝地路径，_dirname可以不写，返回的路径一样，dist所在的绝对路径
}
// 使用对应loader对模块进行处理
 module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
// 插件 插件接口功能极其强大，可以用来处理各种各样的任务
 plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'}) //通过使用 new 操作符来创建它的一个实例
  ]

}

```

path:

```javascript
// __dirname、__filename 当前文件绝对路径  、path.resolve（） 理解
// 以下是在vue.config.js文件打印出来的
console.log("__dirname：", __dirname)
输出：__dirname： d:\pangxilian\web\learning-h5\training-h5

console.log("__filename:", __filename)
输出：__filename: d:\pangxilian\web\learning-h5\training-h5\vue.config.js

console.log("path:", path.resolve(__dirname, 'dist'))
输出：path: d:\pangxilian\web\learning-h5\training-h5\dist
```

loader：

webpack 自身只理解 JavaScript，如果import一张图片或者css文件等，webpack是无法识别的；loader 可以将所有类型的文件转换为 webpack 能够处理的有效[模块](https://www.webpackjs.com/concepts/modules)，

plugin：

插件是一个具有 [`apply`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) 属性的 JavaScript 对象。`apply` 属性会被 webpack compiler 调用，并且 compiler 对象可在**整个**编译生命周期访问。
