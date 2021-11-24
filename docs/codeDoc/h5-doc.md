---
title: h5代码规范 1.0.0
author: liugang
date: 2020-09-06
tags:
 - tag3
categories:
 - category1
---

* ## 文档修订记录
| 序号 |  修改时间  | 修改人 |  版本  | 备注 |
|:----:|:----------:|:------:|:------:|:----:|
|  1   | 2020.09.06 | 曹良松 | V1.0.0 | 初稿 |

* ## 前端规范

* ## 一、代码：
### 采用ts+eslint，尽可能规范代码格式，减少低级错误。

 ```ts
 import {
  Vue,
  Component,
  Inject,
  Provide,
  Prop,
  Model,
  Watch,
  Emit,
  Mixins
} from "vue-property-decorator";
import BsTest from "@/components/BsTest.vue";

@Component({
  components: { BsTest }
})
export default class Home extends Vue {
  // data
  list: Array<string> = ["电子病历", "检验单", "检查单", "在线处方"];
  loading = false;
  finished = false;

  // methods
  onLoadHandle(): void {
    // 异步更新数据
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push(String(this.list.length + 1));
      }

      // 加载状态结束
      this.loading = false;

      // 数据全部加载完成
      if (this.list.length >= 40) {
        this.finished = true;
      }
    }, 1000);
  }
}
 ```

* ## 二、图片：
### 去图片化，通过多人共同维护项目字体，尽量采用字体图标代替小图片。实在找不到的，用雪碧图实现。

```html
index.html

    <link rel="stylesheet" href="//at.alicdn.com/t/font_1841598_1e2dejynmkp.css">

```

* ## 三、注释：
### 单个方法超过10行的要写简单的注释，说明清楚这个方法干了什么事情。方便多人合作维护。


* ## 四、组件：
### 大写字母开头，驼峰式书写组件。公共组件要以Bs-开头。页面组件，务必保持和对应的路由名称一致，方便查找修改。较大的第三方组件，比如echarts，通过二次封装成异步模块的形式加载。

```ts
DEMO：异步加载百度地图
export default function loadBMap(ak) {
  return new Promise(function(resolve, reject) {
    if (typeof BMap !== 'undefined') {
      resolve(BMap)
      return true
    }
    window.onBMapCallback = function() {
      resolve(BMap)
    }
    let script = document.createElement('script')
    script.type = 'text/javascript'
    // script.src =
    //   'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=onBMapCallback'
    script.src = location.protocol + '//api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=onBMapCallback'
    script.onerror = reject
    document.head.appendChild(script)
  })
}

```

* ## 五、UI组件：
### 采用现有比较成熟的组件。pc端还是element-ui，移动端用vant-ui。业务组件尽量自己封装，自己封装的组件尽量减少外部依赖。


* ## 六、路由：
### 和现有项目一样，保持路由的模块化管理。

```ts
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import home from "./home";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [...home];

const router = new VueRouter({
  routes
});

export default router;

```

* ## 七、数据交换：
### 涉及到多组件的数据共享，尽量采用vuex。涉及到第三方页面的交互采用sessionStorage或localStorage。
- 全局公共样式app.less。样式优先考虑ui组件，需要自定义的样式，参考css书写规则，参考(BEM)  block__element--modifier。

```ts
DEMO:
<button class="button">
 Normal Button
</button>
<button class="button--state-success">
  Success Button
</button>
<div class="footer">
  <button class="footer__button">footer button</button>
  <button class="footer__button--state-success">footer button</button>
</div>


.button {} /*基础按钮*/
/*通过双中划线连接修饰器 这样语义化更加鲜明*/
.button--state-success {} /*状态为成功的button*/
.footer__button{} /*底部按钮样式*/
.footer__button--state-success{} /*底部状态为成功的按钮样式*/
/*state-success 多个单词直接使用-连接*/
```

* ## 八、与APP交互：
### 统一前面scheme，根据类型匹配不同的模块交互。

```ts
// APP跳转统一地址管理app://common?com_common_app_business_type=9
  拦截例子，跳转云支付：
  com_common_app_business_type类型
  1 跳转app问诊列表
  2 跳转app医生主页
  3 跳转app地图
  4 跳转app复诊配药支付
  5 跳转app问诊IM窗口
  6 跳转app复诊配药主页
  7 跳转app复诊配药支付成功
  8 跳转app药品订单支付
  9 跳转app云支付
  10 跳转app预约挂号
  11 跳转app扫码
  12 跳转健康资讯
  13 跳转健康监测
  14 开启摄像设置-首次申请入组点击确定事件
  15 慢病患者详情跳转到app就诊记录、健康记录
  16 跳转app云诊室
  17 跳转到app医生端历史就诊
  18 跳转到app居民端在线建档
  19 跳转到app医生端视频通话
  20 跳转到app医生端拨打电话
```

* ## 九、postMessage参数加密处理。
- 嵌入页面参数加密处理。

```
加密方式等待完善。
```

* ## 十、 问卷编辑器。


* ## 十一、组件事件、变量命名规范。

```ts
 1、变量命名
 
   mmmm_nnnn：正常变量
   mmmm_nnn_: 成员变量
   g_mmmm_nnn：全局变量 

2.常量命名：kPlayerName

  “ k 后接大写字母开头的单词”。

3.函数命名：CheckPlayerCookie()
   “常规函数使用大小写混合, 取值和设值函数则要求与变量名匹配”。

```

* ## 十二、国内镜像文档

```
1、vant国内镜像文档
https://vant-contrib.gitee.io/vant/#/zh-CN/

2、element-ui
https://element.eleme.io/#/zh-CN/component/installation

```

## 十三、vs code setting(统一编码风格)
```
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
