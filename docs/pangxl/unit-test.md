##                                                              自动化测试



### 1.自动化测试介绍

**1.1什么是自动化测试**

自动化测试就是把以人为驱动的测试行为转化为机器执行的一种过程。让软件代替人工测试，可以快速、反复进行。

**1.2为什么要进行自动化测试？**

从开发的角度上看，目前出现以下的一个现象：

- 提测质量不高,bug多
  提测后的1-3天, BUG井喷式出现;
  测试同学抱怨, 改完bug A,以前修复的bug B又复现了; 或者说出现了新的bug C

增加自动化测试后：

- 我们为核心功能编写测试后可以保障项目的可靠性
- 强迫开发者编写更容易被测试的代码，提高代码质量
- 编写的测试有文档的作用，方便维护
- 从测试用例能了解需求，方便改造。

**1.3 什么样的项目适合自动化测试**

自动化测试如此优秀，那是不是所有项目都适合进行自动化测试？答案是否定的，因为有成本。在实施自动化测试之前需要对软件开发过程进行分析，基于投入产出来判断是否适合实施自动化测试。实施自动化测试的项目通常需要同时满足以下条件：

- 需求变动不频繁，
- 项目周期足够长
- 自动化测试脚本可重复使用
- 代码规范可测试

如果需求变动过于频繁，维护测试脚本的成本太高；

如果项目周期比较短，没有足够的时间去支持自动化测试的过程；

如果测试脚本重复使用率低，耗费的精力大于创造的价值，不值得；

如果代码不规范，可测试性差，那自动化测试实施起来会比较困难。

### 2.简单介绍测试分类

**2.1白盒测试和黑盒测试**

黑盒测试：一般也被称为功能测试，黑盒测试要测试人员将程序看做一个整体，不考虑其内部机构和特性，只是按照期望验证程序是否正常工作（测试人员）

白盒测试：是基于代码本身的测试，一般是指代码逻辑结构测试.

**2.2测试分类**

单元测试（unit Test）：针对程序中最小可测试单元（一个函数、一个模块、一个类等）进行正确性检验的测试工作。

集成测试：在单元测试的基础上，对单元模块进行组装测试。它是为了检测在模块交互中导致模块交互错误的情况。

端到端测试（E2E）：属于黑盒测试，用来测试一个应用从头到尾的流程是否和设计的一样，从一个用户的角度出发，认为整个系统都是一个黑盒，只有ui会暴露给用户。



### 3.技术选型

目前前端整体的测试框架较为常用的有：

- Karma

- Mocha

- Jest

 **Karma**：
 Karma是一个简单的javascript测试工具，为前端自动化测试提供了跨浏览器测试的能力，可以在浏览器中执行测试用例

**Mocha**：
仅仅是运行器，需要配合其他库一起使用，像chai、sinon…，需要配置很多东西。

**Jest**：
Jest 是Facebook推出的一款测试框架，Jest的一个理念是提供一套完整集成的“零配置”测试体验。

- 包含单元测试运行器、断言库、Mock库、jsdom等
- 内置代码覆盖率报告
- 可以和typescript一同使用
- 零配置，开箱即用

​    **vue项目测试选型**

vue 提供单元测试实用工具库Vue Test Utils、集成了Jjest.

综合目前市面上的轮子和公司的架构，我们技术选型为Jest.

### 4.Jest使用

**4.1 vue中集成Jest**

通过vue官方提供的脚手架@vue-cli 创建一个项目，选择jest单元测试

```javascript
vue init webpack
```

**4.2 Jest配置**

jest.config.js 进行相关配置(以下是脚手架生成的)

```javascript
const path = require('path')
module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest', // babel-jest 处理js文件
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest' // vue-jest 处理vue文件
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
 // mapCoverage: true, 这项需要删掉，不然会报错
  collectCoverage: true,//是否生成覆盖率
  coverageDirectory: '<rootDir>/test/unit/coverage',// Jest输出覆盖信息文件的目录。
  collectCoverageFrom: [// 统计覆盖率信息来源文件
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**'
  ]
     "verbose": true,//脚手架生成的配置文件还需要加上该配置
    testURL: 'http://localhost:8080/',
}
```

**4.3 Vue Test Utils**

​      在单元测试中我们无法避免的需要对DOM进行抓取，或者对组件进行挂载，触发DOM的事件等。原生的`querySelector`以及`event`会显得非常的麻烦。

​      Vue Test Utils是 Vue.js 官方的单元测试实用工具库，为jest和vue提供了一个桥梁，暴露出一些接口，让我们更加方便的通过Jest为Vue应用编写单元测试

渲染组件方法：shallow、mount、render

使用：

```javascript
npm install --save-dev @vue/test-utils
```
测试：HelloWorld.spec.js

```javascript
import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import { mount } from '@vue/test-utils'
//通过 mount 方法来创建包裹器
const wrapper = mount(HelloWorld);
describe('HelloWorld.vue', () => {
 
  //于检查已存在的元素
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
  //校验data数据
  it('has a button', () => {
    expect(wrapper.vm.count + 1).toBe(2)
  })
})
```

**4.4 Jest 覆盖率**

​     这里我们可以看到每个`spec`都被执行过一次了，如果遇到哪个用例中的断言不通过则会显示相应的`it`中的名字，并且把断言所期望和收到的值都打印出来。
​     在所有用例都跑过之后，会在我们项目下生成一个`coverage`目录，里面会对应我们每一个项目中的组件生成一个`html`文件来标记我们的代码执行情况

执行npm run unit 命令运行单元测试后，控制台会打印一个测试覆盖率报告

```javascript
 PASS  test\unit\specs\HelloWorld.spec.js
  HelloWorld.vue
    √ should render correct contents (40ms)

----------------|----------|----------|----------|----------|-------------------|

| File             | % Stmts    | % Branch   | % Funcs    | % Lines    | Uncovered Line #s   |      |
| ---------------- | ---------- | ---------- | ---------- | ---------- | ------------------- | ---- |
| All files        | 100        | 100        | 100        | 100        |                     |      |
| HelloWorld.vue   | 100        | 100        | 100        | 100        |                     |      |
| ---------------- | ---------- | ---------- | ---------- | ---------- | ------------------- |      |
```



%stmts是语句覆盖率（statement coverage）：每个语句执行率

%Branch分支覆盖率（branch coverage）：每个if代码块执行率

%Funcs函数覆盖率（function coverage）：每个函数执行率

%Lines行覆盖率（line coverage）：每一行执行率

**4.5 定义测试**

- describe:定义一个测试套件(test suite)

- it：定义一个测试（test）

- expect：执行一个断言

- jest.fn()：创造mock函数

  钩子函数

- beforeAll 在所有测试用例执行前执行
- afteraAll 在所有测试用例执行后
- beforeEach 在每个用例执行前
- afterEach 在每个用例执行后

**4.6 Jest 常用匹配器**

普通匹配器

- toEqual 验证两个值是否相等

- toBe 验证两个值是否严格相等
- not.toBe 测试相反的匹配
- toHavingLength 验证长度

- `toBeDefined` 验证一个值是否被定义
- `toBeTruthy` 匹配任何 `if` 语句为真
- `toBeFalsy` 匹配任何 `if` 语句为假

- toBeCloseTo 验证浮点数相等
- `toMatch` 匹配 正则表达式的字符串
- toContain 验证一个list中是否包含某一项

**4.7 mock 数据引入**

参考

Jest 官网：https://jestjs.io/docs/zh-Hans/using-matchers

[Vue Test Utils](https://vue-test-utils.vuejs.org/zh/)

https://zhuanlan.zhihu.com/p/84405914

https://segmentfault.com/a/1190000016267231