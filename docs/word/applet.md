---
title: 第九章、小程序
author: liugang
date: 2020-12-02
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## [#](https://xxx.com.cn/h5-document/word/applet.html#规范)规范

- [W3C miniapp](https://w3c.github.io/miniapp)
- [微信小程序](https://developers.weixin.qq.com/miniprogram/dev/framework)
- [支付宝小程序](https://opendocs.alipay.com/mini/developer/getting-started)
- [百度小程序](https://smartprogram.baidu.com/docs/develop/fuctionlist/list)
- [字节跳动小程序](https://developer.toutiao.com/)
- [京东小程序](https://mp.jd.com/docs/introduction)
- [快应用](https://www.quickapp.cn/)

## [#](https://xxx.com.cn/h5-document/word/applet.html#开发框架)开发框架

### [#](https://xxx.com.cn/h5-document/word/applet.html#dsl-及编译器)DSL 及编译器

- [vue 转小程序](https://echizen.github.io/tech/2017/10-29-vue2wx)
- [wxml 转译器实现过程分析](https://github.com/IOriens/ioriens.github.io/issues/5)
- [从零开始写一个wepy转VUE的工具](https://juejin.im/post/5c877cd35188257e3b14a1bc)

### [#](https://xxx.com.cn/h5-document/word/applet.html#多端转换工具)多端转换工具

- [基于 AST 来转换微信和支付宝小程序](https://qianduan.group/posts/5a0fe3cc44aec04413ec3d7d)
- [百度小程序搬家工具实现原理解析](http://www.dreawer.com.cn/news/672.html)

### [#](https://xxx.com.cn/h5-document/word/applet.html#mars)[Mars](https://github.com/max-team/Mars)

- [Mars - 又双叒叕一个多端开发框架？这次是 Vue 驱动，能完美适配 H5](https://juejin.im/post/5cbd34e7f265da036504fa3c)
- [基于 Vue 的小程序开发框架性能优化实践---去除 VNode](https://juejin.im/post/5d3eafff6fb9a06aeb1095e9)
- [Vue 驱动的小程序+H5同构开发框架@张文韬](https://node.fequan.com/playvideo/701606bc91ec5be86cbd20f39d9a963d_7)

### [#](https://xxx.com.cn/h5-document/word/applet.html#megalo)[Megalo](https://github.com/kaola-fed/megalo)

- [megalo -- 网易考拉小程序解决方案](https://juejin.im/post/5bd2b014e51d457a7a0396ea)

### [#](https://xxx.com.cn/h5-document/word/applet.html#kbone)[Kbone](https://github.com/wechat-miniprogram/kbone)

- [Kbone 官方文档](https://wechat-miniprogram.github.io/kbone/docs)
- [微信官方小程序同构新方案Kbone全解析](https://mp.weixin.qq.com/s/d2jZdmq2c0mOcXi9ALi4dw)
- [小程序同构方案 kbone 分析与适配](http://www.alloyteam.com/2019/12/kbone-analyze)
- [Kbone原理解析 & 小程序技术选型](https://developers.weixin.qq.com/community/develop/article/doc/0006a6326b8d38e56b998833456813)

## [#](https://xxx.com.cn/h5-document/word/applet.html#技术原理)技术原理

### [#](https://xxx.com.cn/h5-document/word/applet.html#微信小程序)微信小程序

- [小程序架构设计(一)](https://developers.weixin.qq.com/community/develop/article/doc/000a4c1620c188f3adf7db9ab5b413)
- [小程序架构设计(二)](https://developers.weixin.qq.com/community/develop/article/doc/000c8eba1ec3b8c7ce287954c53c13)
- [小程序同层渲染原理剖析](https://developers.weixin.qq.com/community/develop/article/doc/000c4e433707c072c1793e56f5c813)
- [基于小程序技术栈的微信客户端跨平台实践](https://mp.weixin.qq.com/s/V-H3pF9ytfXRhZG0PGIKsw)
- [从源码看微信小程序启动过程](https://tech.youzan.com/weapp-booting/)
- [微信小程序任务栈实现原理](https://blog.ysy950803.top/2019/04/27/微信小程序任务栈实现原理/)
- [微信小程序“反编译”实战（一）：解包](https://kangzubin.com/wxapp-decompile-1/)
- [微信小程序“反编译”实战（二）：源码还原](https://kangzubin.com/wxapp-decompile-2/)
- [从微信小程序开发者工具源码看实现原理（一）- - 小程序架构设计](https://www.cnblogs.com/wonyun/p/11168698.html)
- [从微信小程序开发者工具源码看实现原理（二）- - 小程序技术实现](https://www.cnblogs.com/wonyun/p/11176762.html)
- [从微信小程序开发者工具源码看实现原理（三）- - 双线程通信](https://www.cnblogs.com/wonyun/p/10997800.html)
- [从微信小程序开发者工具源码看实现原理（四）- - 自适应布局](https://www.cnblogs.com/wonyun/p/11195157.html)
- [实现微信小程序编译和运行环境系列(初始篇)](https://github.com/gongmw/blog/issues/5)
- [实现微信小程序编译和运行环境系列(进阶篇)](https://github.com/gongmw/blog/issues/6)
- [实现微信小程序编译和运行环境系列(核心篇一)](https://github.com/gongmw/blog/issues/7)
- [实现微信小程序编译和运行环境系列(核心篇二)](https://github.com/gongmw/blog/issues/8)
- [实现微信小程序编译和运行环境系列(核心篇三)](https://github.com/gongmw/blog/issues/9)
- [深入小程序框架](https://www.cnblogs.com/rask/p/9667866.html)
- [小程序底层原理分析](https://blog.csdn.net/smlljet/article/details/90266487)
- [浅析微信小程序 App() 和 Page() 函数的内部实现](https://kangzubin.com/wxapp-App-Page-function/)
- [浅谈小程序运行机制](https://segmentfault.com/a/1190000019131399)
- [微信小程序setData源码分析](https://juejin.im/post/5d647ce26fb9a06ae8361b05)

### [#](https://xxx.com.cn/h5-document/word/applet.html#百度小程序)百度小程序

- [百度智能小程序平台的架构思考与实践](https://myslide.cn/slides/21052)
- [百度小程序源码解读](https://handsomeliuyang.github.io/2019/02/25/百度小程序源码解读/)

### [#](https://xxx.com.cn/h5-document/word/applet.html#支付宝小程序)支付宝小程序

- [支付宝小程序技术架构全解析](https://www.infoq.cn/article/ullETz7q_Ue4dUptKgKC)
- [支付宝小程序框架浅析及如何在 mPaaS 内深度集成](https://www.codercto.com/a/42556.html)

### [#](https://xxx.com.cn/h5-document/word/applet.html#其他)其他

- [企业级小程序—大型 APP 研发模式 升级思考与实践](https://myslide.cn/slides/21848)
- [钉钉 E 应用架构详解](https://blog.csdn.net/weixin_40322495/article/details/81325496)
- [小程序底层实现原理及一些思考](https://zhuanlan.zhihu.com/p/81775922)
- [小程序底层实现原理及一些思考(2)](https://github.com/berwin/Blog/issues/49)
- [基于 Vue.js 的快手小程序探索](https://www.yuque.com/vueconf/2019/lghmly)
- [探索小程序实现](https://www.cnblogs.com/Amy-so/p/12152225.html)
- [从零开始，再造一个小程序平台](https://yiyan.site/2019/02/23/recreatomg-a-small-program-framework/)
- [Web 中文兴趣组下一代移动 Web 应用（小程序/快应用）标准化研讨会 - 总结报告](https://www.w3.org/2019/05/11-chinese-web-mobile-web-apps-summary.html)
- [深入小程序系列之一:小程序核心原理及模拟](https://juejin.im/post/5e6f141c518825491753c955)
- [深入小程序系列之二、Flutter 和小程序混编](https://juejin.im/post/5e6f180a6fb9a07c994bfa51)
- [移动端小程序框架面面观](https://mp.weixin.qq.com/s/uh_miREB1w8FX7mWgph56w)
- [近两万字小程序攻略发布了](https://juejin.im/post/5b8fd1416fb9a05cf3710690)
- [微信小程序适配 iPhone X 总结](https://kangzubin.com/wxapp-iphonex/)
- [小程序自动化测试总结](https://imweb.io/topic/5d1a0c7df7b5692b080f2602)
- [Mini App SDK for iOS Apps](https://github.com/rakutentech/ios-miniapp)

### [#](https://xxx.com.cn/h5-document/word/applet.html#快应用)快应用

- [华为快应用引擎技术架构详解](https://www.infoq.cn/article/huawei-quickapp-engine-architecture)

## [#](https://xxx.com.cn/h5-document/word/applet.html#工具)工具

- 微信解包工具: https://github.com/qwerty472123/wxappUnpacker
- 微信小程序转换为 uni-app 项目：https://github.com/zhangdaren/miniprogram-to-uniapp
- 蚂蚁搬家工具 Antmove：https://ant-move.github.io/website
- miniapp2vue：https://github.com/Lionad-Morotar/miniapp2vue
- vue2wx & wx2vue：https://github.com/xiaojue/vue-wx
- wx2qh：https://www.npmjs.com/package/@qihoo/wx2qh
- miniprogram-to-uniapp: https://github.com/zhangdaren/miniprogram-to-uniapp
- vue-wx: https://github.com/xiaojue/vue-wx
- @wxmini/wxml-parser: https://www.npmjs.com/package/@wxmini/wxml-parser
- @wxmini/wxml-generator: https://www.npmjs.com/package/@wxmini/wxml-generator
- wcc.js: https://github.com/caijw/wcc.js
- wcsc.js: https://github.com/caijw/wcsc.js
- wx2bd: https://github.com/xujie-phper/wx2bd
- 小程序自动化：https://www.npmjs.com/package/miniprogram-automator
