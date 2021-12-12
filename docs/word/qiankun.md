---
title: 第二十四章、qiankun
author: liugang
date: 2021-08-17
tags:
  - tag4
categories:
  - category1
---

<Boxx  changeTime="5000"/>

## 总方针：是什么？从哪里来？要到哪里去？

## 一. 是什么？

### 为什么选择 qiankun

根据当前的项目需求，需要根据不同的项目单独部署上线某个子系统；

目前有 2 种方案可以选择：

- `iframe`方案
- `qiankun`微前端方案

1.1 、 iframe 有哪些优劣

**它的好处有哪些？**

- 自带样式
- 沙盒机制（环境隔离）
- 前端之间可以相互独立运行

**那我们为什么没有使用 iFrame 做微前端呢？**

- CSS 问题（视窗大小不同步）
- 子应用通信（使用 postMessage 并不友好）
- 组件不能共享
- 使用创建 iframe，可能会对性能或者内存造成影响

1.2 、 qiankun 有哪些优劣

上层为统一共享的拼接层，主要做一些基础信息的加载，和对来自不同团队不同技术栈的客户端在运行时动态组成一个完整的SPA应用，
以及生命周期的调度和事件的管理。总之，微前端是将微服务概念做了一个很好的延伸和实现。

技术细节上的决策

技术无关，路由及应用导入，应用隔离，资源及通信

技术无关：基于协议 ，完成子应用的导入  像jQuery，dom增强的一个库，不加限制，用的时候直接用就可以

路由及应用导入：方便

应用隔离：css module

## 二. 从哪里来？

来源于single-spa, 旨在帮助大家能更简单、无痛的构建一个生产可用微前端架构系统。

#### 什么是js 沙箱（sandbox）



## 推荐的官方文档

[qiankun 官网](https://qiankun.umijs.org/zh/guide)

[如何设计实现微前端框架 - qiankun](https://zhuanlan.zhihu.com/p/200775337?utm_source=ZHShareTargetIDMore)

[微前端 qiankun 从搭建到部署的实践](https://juejin.im/post/6875462470593904653)

[详细解析微前端、微前端框架 qiankun 以及源码](https://mp.weixin.qq.com/s/67FBqDlr5-PNcggS0gdArA)

[微前端框架 qiankun 项目实战（一）--本地开发篇](https://mp.weixin.qq.com/s/X95qV8zrB-XgG_IlaILvAQ)

[微前端框架 qiankun 项目实战（二）--踩坑与部署篇](https://mp.weixin.qq.com/s/zBBpZNOU_ewd2U_szE5OBA)

[vue-qiankun 公司微前端项稳定目落地后的简单总结](https://juejin.cn/post/6986565026387591205)

[从微服务到微前端：浅谈微前端的设计思想](https://mp.weixin.qq.com/s/rJ0yMBcDvm9KD0OF2gLfAA)

[基于 qiankun 落地部署微前端爬”坑“记](https://mp.weixin.qq.com/s/G2gZrOkvlsqsPK5lL0nqdg)

[基于 qiankun 的微前端应用实践](https://juejin.cn/post/6938207400457404430)

[微前端在小米 CRM 系统的实践](https://link.juejin.cn/?target=https%3A%2F%2Fxiaomi-info.github.io%2F2020%2F04%2F14%2Ffe-microfrontends-practice%2F)

[微前端实践](https://juejin.im/post/6844903816295350279)

[可能是你见过最完善的微前端解决方案](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F78362028)

[微前端在美团外卖的实践](https://link.juejin.cn/?target=https%3A%2F%2Ftech.meituan.com%2F2020%2F02%2F27%2Fmeituan-waimai-micro-frontends-practice.html)

[qiankun 微前端方案实践及总结](https://juejin.im/post/6844904185910018062)

[每日优鲜供应链前端团队微前端改造](https://juejin.cn/post/6844903943873675271)

[前端微服务在字节跳动的打磨与应用](https://juejin.cn/post/6844904046487142408)

[标准微前端架构在蚂蚁的落地实践](https://link.juejin.cn/?target=https%3A%2F%2Fdeveloper.aliyun.com%2Farticle%2F742576)

[微前端的那些事儿](https://microfrontends.cn/)

[Micro Frontends](https://micro-frontends.org/)

[手写一个微前端框架（内含源码地址）](https://blog.csdn.net/lunahaijiao/article/details/108016383)
