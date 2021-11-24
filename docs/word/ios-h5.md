---
title: 第二十三章、ios-h5
author: liugang
date: 2021-08-04
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 一. h5的各种兼容问题

## 场景一、h5在iPhone6（版本12.x）上面，输入框唤起软键盘，失焦后出现卡白屏

### 解决方案

* 1.1 在main.ts里面全局自定义指令

```js
...
// 当input 失焦时，滚动一下页面就可以使页面恢复正常
function checkWxScroll(el) {
  setTimeout(() => {
    el.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  }, 300);
  window.scrollTo(0, 0);
}
...
Vue.directive('iosbugfixed', {
  inserted: function(el, binding, vnode) {
    // 解决input、select被组件包装的场景
    const childInput = el.getElementsByTagName('input');
    const childSelect = el.getElementsByTagName('select');
    for (let i = 0; i < childInput.length; i++) {
      childInput[i].onblur = function temporaryRepair() {
        checkWxScroll(el);
      };
    }
    for (let i = 0; i < childSelect.length; i++) {
      childSelect[i].onblur = function temporaryRepair() {
        checkWxScroll(el);
      };
    }
    // 正常场景
    el.onblur = function temporaryRepair() {
      checkWxScroll(el);
    };
  }
});
...
```

* 1.2 在具体模块里面加入对应指令:v-iosbugfixed

```js
<input
  v-iosbugfixed
  type="text"
  placeholder="请输入验证码"
  class="inputverfiytext"
  style="border: 0"
  v-model="vImageCode"
  autofocus="false"
  autocomplete="off"
/>
```

## 推荐的官方文档

