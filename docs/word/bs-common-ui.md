---
title: 第八章、私有组件库
author: liugang
date: 2020-12-02
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 私有组件库的开发以及使用

### 组件库git地址:

[bs-common-ui组件库git地址](https://jkcs.common.com.cn/common/bs-common-ui)

[bs-common-ui-next组件库git地址](https://jkcs.common.com.cn/common/bs-common-ui-next)

| 项目名                    | 说明                                        | 备注       |
|---------------------------|---------------------------------------------|------------|
| @common/bs-common-ui      | 基于uView UI,适配不同终端的解决方案         | 版本v1.0.8 |
| @common/bs-common-ui-next | 基于uView UI,适配不同终端的解决方案(vue3.x) | 版本v1.0.4 |

## 背景

* 当前已有3个开源组件库已经用vue3.x版本重构：

[vant ui ](https://youzan.github.io/vant/v3/#/en-US)

[element-plus ui ](https://element-plus.gitee.io/#/zh-CN)

[taro-ui-vue3 ](https://b2nil.github.io/taro-ui-vue3/docs/introduction.html)

## 一、如何开发

* 1.git clone https://jkcs.common.com.cn/common/bs-common-ui-xxx

* 2.cnpm i / yarn / npm i

## 二、如何发布

* 1.cd uview-ui

* 2.修改package.json 里面版本号

* 3.npm publish

* 4.查看npm 私有仓库:

  [bs-common-ui私有仓库](http://pri-npm.atag.common.com.cn/-/web/detail/bs-common-ui)

  [bs-common-ui-next私有仓库](http://pri-npm.atag.common.com.cn/-/web/detail/bs-common-ui-next)

## 三、如何使用

### 3.1 安装

```bash
# npm方式安装
npm i @common/bs-common-ui-xxx
```

### 3.2 快速上手

1. `main.ts`引入uView库

```js
// main.ts
import uView from '@common/bs-common-ui-xxx';
Vue.use(uView);
```

2. `App.vue`引入基础样式(注意style标签需声明scss属性支持)

```bash
/* App.vue */
<style lang="scss">
@import "@common/bs-common-ui-xxx/index.scss";
</style>
```

3. `uni.scss`引入全局scss变量文件

```bash
/* uni.scss */
@import "@common/bs-common-ui-xxx/theme.scss";
```

4. `pages.json`配置easycom规则(按需引入)

```bash
/* pages.json*/
{
	"easycom": {
		// npm安装的方式不需要前面的"@/"，下载安装的方式需要"@/"
		// npm安装方式
		"^u-(.*)": "@common/bs-common-ui-xxx/components/u-$1/u-$1.vue"
		// 下载安装方式
		// "^u-(.*)": "@common/bs-common-ui-xxx/components/u-$1/u-$1.vue"
	},
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}
```

请通过[快速上手](https://uviewui.com/components/quickstart.html)了解更详细的内容 

### 3.3 使用方法

配置easycom规则后，自动按需引入，无需`import`组件，直接引用即可。

```html
<template>
	<u-button>按钮</u-button>
</template>
```

## 四、体验

<div class="flex second" v-for="(item,index) in qrDataList" :key="index">
<div class="first">
<div>{{item.title}}</div>
<div class="small-title">{{item.subtitle}}</div>
</div>
<img class="ui-img" :src="item.imgSrc"></h1>
</div>

## 推荐的官方文档

[uView 官方git仓库](https://github.com/YanxinNet/uView)

[uView 官方文档](https://www.uviewui.com/)

[uni-app官方文档](https://uniapp.dcloud.io/)

<script>
export default {
  name: "BsCommonUI",
  data() {
    return {
      qrDataList: [
      {
        title:'Vue2.x',
        subtitle:'(微信小程序)',
        imgSrc:require('../assets/images/ui/ui.jpg'),
      },
      {
        title:'Vue3.x',
        subtitle:'(微信小程序)',
        imgSrc:require('../assets/images/ui/ui-next.jpg'),
      },
      {
        title:'Vue3.x',
        subtitle:'(支付宝小程序)',
        imgSrc:require('../assets/images/ui/ui-ali.jpg'),
      },
      {
        title:'Vue3.x',
        subtitle:'(头条小程序)',
        imgSrc:require('../assets/images/ui/ui-toutiao.png'),
      },
      {
        title:'Vue3.x',
        subtitle:'(百度小程序)',
        imgSrc:require('../assets/images/ui/ui-baidu.png'),
      },
      {
        title:'Vue3.x',
        subtitle:'(QQ小程序)',
        imgSrc:require('../assets/images/ui/ui-qq.png'),
      },
      ],
    };
  },
};


</script>


<style scoped>
.flex{
  display:flex;
  align-items: center;
}

.first{
  width:40%;
  height:200px;
  font-size:50px;
  color:#3eaf7c;
  text-align:left;
}

.second{
margin-top:50px;
}

.ui-img {
  width:200px;
  height:200px;
}

.small-title{
  font-size:20px;
}
</style>
