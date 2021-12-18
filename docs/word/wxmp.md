---
title: 第一章、common
author: liugang
date: 2020-07-06
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 一、相关依赖

工程是基于webpack的单页面web app(node:12+、 vue:2.6.11 、vuex:3.5.1 、 webpack:4.43.0、ts:3.9.6)

[ 注意: 下面的说明仅供参考,会由于项目变更而发生变化,请随时保持沟通! ]()

[gitlab - 源码](https://github.com/liugangtaotie/vite2-vue2-ts)

## 二、Build Setup(本地开发)

``` bash
# 安装依赖
npm install && yarn

# 本地调试1
npm run serve && yarn serve
windows 用户
先执行 npm run build:dll(建立vendor-json，动态链接，加快打包速度，一般只执行一次：项目初始化)
生成 vendor_dll_xxx.js 文件，然后 在index.html中script引入vendor_dll_xxx.js文件
再执行 npm run serve / yarn serve(开发)
npm run build:production(打包)

mac 用户
先执行 make dll(建立vendor-json，动态链接，加快打包速度，一般只执行一次：项目初始化)
生成 vendor_dll_xxx.js 文件，然后 在index.html中script引入vendor_dll_xxx.js文件
再执行 make dev(开发)
make pro(打包)

业务配置
在实际使用之前,请先将config/api.js中的参数,配置成实际的业务参数,如公众号名称,appId等,
同时还有针对不同npm命令的参数,如下:

# 打包测试环境中用的包,会使用上面文件中, build:development对应的参数
npm run build:development / make test | make dev

# 打包发布环境中用的包,会使用上面文件中, build:production对应的参数（根据不同的环境使用不同的打包配置参数）
online: npm run build:production / make pro


```

## 三、本地开发调试（注意事项）

 为了保持代码风格的统一性，提交代码之前，先执行（再提交代码）->
 windows: npm run autofix;
 mac: make autofix

## 四、项目结构说明

```
|-- root
    |-- build
    |   |-- lib (本地打包缓存文件)
    |   |-- vendor-manifest.json (dll 动态链接文件)
    |   |-- webpack.base.conf.js
    |   |-- webpack.dev.conf.js (开发环境打包配置)
    |   |-- webpack.dll.conf.js （生成dll动态链接库）
    |   |-- webpack.pro.conf.js（生产环境打包配置）
    |-- config
    |-- ops(自动化部署脚本,目前正在用的)
    |-- ops7.6(自动化部署脚本)
    |-- src
    |   |-- api
    |   |   |-- api.ts（接口地址）
    |   |   |-- apiMain.ts（请求配置）
    |   |   |-- dictionary.ts（常量字典）
    |   |   |-- emoji.ts（表情包）
    |   |   |-- filters.ts（过滤配置）
    |   |   |-- index.ts
    |   |   |-- main.ts（公用api请求）
    |   |   |-- pay.ts（微信支付）
    |   |   |-- request-config.ts（请求统一配置）
    |   |   |-- tools.ts（缓存自定义方法）
    |   |   |-- util.ts（公共方法）
    |   |   |-- WebIM.ts（IM基本配置）
    |   |-- assets
    |   |   |-- css(webpack自动生成的雪碧图和样式)
    |   |   |   |-- sprites-generated.css
    |   |   |   |-- sprites-generated.png
    |   |   |-- font
    |   |   |   |-- mui-icons-extra.ttf
    |   |   |   |-- mui.ttf
    |   |   |-- icons(小图标目录，项目运行过程中webpack会自动合并雪碧图)
    |   |-- common
    |   |   |-- css
    |   |   |   |-- component.less
    |   |   |   |-- reset.css(重新设置全局样式)
    |   |   |   |-- flex.css
    |   |   |   |-- style.css
    |   |   |   |-- vars.less
    |   |   |-- js
    |   |       |-- config.js
    |   |       |-- encryptParams.js
    |   |   |-- stylus
    |   |   |   |-- index.styl(全局定义属性,主要作用于style模块)
    |   |-- App.vue
    |   |-- main.ts（页面入口）
    |   |-- images.d.ts(image ts 变量说明)
    |   |-- registerServiceWorker.ts
    |   |-- shims-tsx.d.ts
    |   |-- shims-vue.d.ts(vue ts 变量说明)
    |   |-- components（公共组件）
    |   |-- mock（没有后端接口的情况下模拟数据）
    |   |-- router（路由入口）
    |   |-- store（全局状态管理）
    |   |-- views（功能模块页面）
    |-- static（无需打包的静态资源）
    |-- tests（unit测试）
    |-- .browserslistrc(浏览器支持)
    |-- .editorconfig
    |-- .eslintignore
    |-- .eslintrc.js
    |-- .gitignore
    |-- .babel.config.js
    |-- CHANGELOG.md（更改日志）
    |-- codeSpecification.md（代码规范）
    |-- cypress.json
    |-- deploy.sh（mac快速发布脚本）
    |-- git.sh（mac自动提交脚本）
    |-- index.html
    |-- jest.config.js
    |-- Makefile(mac快速开启项目)
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json
    |-- vue.config.js(vue 基本配置)
    |-- yarn.lock
```
## 五、前端代码编写规范

查看codeSpecification.md文档

## 六、前端打包webpack配置信息一览

核心一点就是： cmd 中敲 vue inspect > output.js(默认是 development) , 这样我们会得到一份最终生效的 webpack 配置信息:
        development: vue inspect > outputDev.js;
        production: vue inspect > outputProd.js --mode production.

## 七、vs code setting(统一编码风格)

``` bash
{
  "remote.SSH.showLoginTerminal": true,
  "team.showWelcomeMessage": false,
  // "[javascript]": {
  //   "editor.defaultFormatter": "HookyQR.beautify"
  // },
  "[html]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  // ******第一部分：Eslint的配置******
  "typescript.check.tscVersion": false,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue",
  ],
  // #去掉代码结尾的分号
  "prettier.semi": false,
  // #使用带引号替代双引号
  "prettier.singleQuote": true,
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "files.autoSave": "off",
  "files.insertFinalNewline": true, // 文件的最后一行空一行
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  // "vetur.validation.template": true,
  "vetur.format.enable": true,
  "vetur.validation.template": false,
  "workbench.settings.editor": "json",
  "terminal.integrated.rendererType": "dom",
  "vscode_custom_css.policy": true,
  "powermode.enabled": true,
  "powermode.enableShake": false,
  "powermode.presets": "flames",
  "[css]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[markdown]": {
    "editor.defaultFormatter": "fcrespo82.markdown-table-formatter"
  },
  "[json]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  "window.zoomLevel": 0,
  "C_Cpp.updateChannel": "Insiders",
  "http.proxySupport": "off",
  "workbench.colorTheme": "SynthWave '84",
  "javascript.updateImportsOnFileMove.enabled": "always", // 这个是样式，包括火焰，烟火，魔法等
}

```
