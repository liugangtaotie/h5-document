---
title: 第二十一章、babel
author: liugang
date: 2021-03-02
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 一、基础知识

### babel中常用的库和工具类

* @babel/parser 将源代码解析成 AST。
* @babel/generator 将AST解码生 js代码。
* @babel/core 包括了整个babel工作流，也就是说在@babel/core里面我们会使用到@babel/parser、transformer[s]、以及@babel/generator。
* @babel/code-frame 用于生成错误信息并且打印出错误原因和错误行数。（其实就是个console工具类）
* @babel/helpers 也是工具类，提供了一些内置的函数实现，主要用于babel插件的开发。
* @babel/runtime 也是工具类，但是是为了babel编译时提供一些基础工具库。作用于transformer[s]阶段，当然这是一个工具库，如果要使用这个工具库，还需要引入@babel/plugin-transform-runtime，它才是transformer[s]阶段里面的主角。
* @babel/template 也是工具类，主要用途是为parser提供模板引擎，更加快速的转化成AST
* @babel/traverse 也是工具类，主要用途是来遍历AST树，也就是在@babel/generator过程中生效。
* @babel/types 也是工具类，主要用途是在创建AST的过程中判断各种语法的类型。

## 二、详解

1.解析
工具：@babel/parse

- 词法分析：
将字符串形式的代码解析为令牌（token）流。

- 语法分析：
将令牌流解析生成抽象语法树（AST）。

2.转换
工具：@babel/traverse
遍历传入的抽象语法树，对其节点进行增添、替换、移除操作，返回新的抽象语法树。可接受自定义的转换规则。

3.生成
工具：@babel/generator
深度优先遍历传入的抽象语法树，生成相应的字符串形式代码，可配置压缩、删除注释等。

### 文件目录

```javascript
@babel/code-frame 为全局错误捕获工具类

@babel/core
├── 输入字符串
├── @babel/parser
│   └── @babel/template
│       └── @babel/types
├── AST
├── transformer[s]
│   └── @babel/helpers
├── AST
├── @babel/generator
│   └── @babel/traverse
```

## 三、开始编写插件

1，初始化

创建文件夹babel-plugin-require-to-default-from，进入执行npm init

插件包命名为@babel/plugin-require-to-default-from

2，环境搭建，安装包并引入

```javascript
const babylon = require('@babel/parser')
const traverse = require("@babel/traverse").default
const generate = require("@babel/generator").default
const t = require('@babel/types')
```

3，创建AST

```javascript
const code = `
  const test = require('test')
`
 
const Ast = babylon.parse(code,{
  sourceType:"module",
  // plugins:["exportDefaultFrom"] // 这里是要用到的插件，文中插件未用到
})
```

4，遍历并操作AST

```javascript
traverse(Ast,{
    enter(path){
      if(path.node.type === 'CallExpression' && path.node.callee.name == "require"){
        // 判断require是否本身包含default
        if(!(path.parentPath.node.type === 'MemberExpression' && path.parentPath.node.property.name === 'default')){
          // t.memberExpression(object, property, computed, optional)
          const node_new = t.memberExpression(
            t.callExpression(
              t.identifier('request'),
              [t.identifier(`'${path.node.arguments[0].value}'`)]
            ),
            t.identifier('default')
          )
          path.replaceWith(node_new)
        }
      }
    }
})
```

5，生成代码

```javascript
const result = generate(Ast, {
  retainLines: false,
  compact: "auto",
  concise: false,
  quotes: "double",
},code)
console.log(result)
```

6，按照插件api封装

```javascript
export default function({types:t}){
  return {
    visitor:{
       enter(path){
           ... // 放入上面的代码
       }
    }
  }
}
```

## 推荐的官方文档

[babel入门到精通](https://www.jianshu.com/p/9aaa99762a52)

[实现一个真正的babel插件（不仅仅是替换字符）及 ast操作原理](https://zhuanlan.zhihu.com/p/91948992)

[babel插件写法官方文档](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

[babel types api文档](https://www.babeljs.cn/docs/babel-types)

[AST explorer官网](https://astexplorer.net/)

[文中例子的代码仓库](https://github.com/dianluyuanli-wp/myBabel)

[babel工作原理](https://www.jianshu.com/p/6cce3fd70851)
