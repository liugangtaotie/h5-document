---
title: 第五章、js
author: liugang
date: 2020-11-03
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

### 顶层思维

* 闭继类事原，
* 柯节防懒new，
* call/apply/bind/偏/class,
* 作/this

初级：

* JavaScript各种概念都得了解，《JavaScript语言精粹》这本书的目录都得有概念，并且这些核心点都能脱口而出是什么。这里列举一些做参考：
* 知道组合寄生继承，知道class继承。
* 知道怎么创建类function + class。
* 知道闭包在实际场景中怎么用，常见的坑。
* 知道模块是什么，怎么用。
* 知道event loop是什么，能举例说明event loop怎么影响平时的编码。
* 掌握基础数据结构，比如堆、栈、树，并了解这些数据结构计算机基础中的作用。
* 知道ES6数组相关方法，比如forEach，map，reduce。

中级：

* 知道class继承与组合寄生继承的差别，并能举例说明。
* 知道event loop原理，知道宏微任务，并且能从个人理解层面说出为什么要区分。知道node和浏览器在实现loop时候的差别。
* 能将继承、作用域、闭包、模块这些概念融汇贯通，并且结合实际例子说明这几个概念怎样结合在一起。
* 能脱口而出2种以上设计模式的核心思想，并结合js语言特性举例或口喷基础实现。
* 掌握一些基础算法核心思想或简单算法问题，比如排序，大数相加。

### 深入面试题

* 1. 怎样添加、删除、移动、复制、创建和查找节点  1
* 2. 说说js中操作数组、字符串的方法 1
* 3. 闭包  1
* 4. 垃圾回收机制  1
* 5. 原型、原型链  1
* 6. 事件机制和事件委托  1
* 7. js面向对象有那些特性，怎样实现  1
* 8. ajax原理 1
* 9. es6你知道多少 1
* 10. foreach  能不能跳出foreach? 1
* 11. js的继承  es5/es6  es6的extends 本质是什么？1
* 12. for +  setTimeOut  (异步) 1
* 13. 宏任务、微任务 1
* 14. 判断js是那种类型？ 1  typeof、instanceof、 constructor、 prototype、 $.type()/jquery.type()
* 15. 理解 Iterator, Generator 和 Async/Await
Iterator 是一个循环接口，任何实现了此接口的数据都可以被 for in 循环遍历;Generator 是一个可以暂停和继续执行的函数，他可以完全实现 Iterator 的功能，并且由于可以保存上下文，他非常适合实现简单的状态机。另外通过一些流程控制代码的配合，可以比较容易进行异步操作;Async/Await 就是generator进行异步操作的语法糖。而这个语法糖反而是被使用最广泛的，比如著名的 Koa
* 16. Object.prototype.toString.call([]).slice(8, -1)
* 17. 类型 事件 继承 闭包 原型 1
* 18. call apply bind new class 偏函数
* 19. shim vs polyfill
* 20. this
* 21. number 为什么不安全
* 22. 作用域

作用域：定义标识符在程序正文的有效区域，即定义变量可以被应用的有效区域。
