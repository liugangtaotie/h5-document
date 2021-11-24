# 第2章

## 一、本工程是基于webpack的单页面web app(node:12+、 vue:2.6.11 、vuex:3.5.1 、 webpack:4.43.0、ts:3.9.6)

[ 注意: 下面的说明仅供参考,会由于项目变更而发生变化,请随时保持沟通! ]()

[gitlab - 源码](http://jkcs.common.com.cn/bs-standard-repo/fore-end/wxmp.git)

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
zk: npm run build:productionZK / make zk
ys: npm run build:productionYS / make ys
dm: npm run build:productionDM / make dm
dmzk: npm run build:productionDMZK / make dmzk

```

## 三、本地开发调试（注意事项）

1. 由于本工程涉及到微信公众号授权申请,所以无法在本地的开发环境中,走通这个项目的流程. 
2. 可以先在本地调试好业务逻辑之后,再上传到服务器,来走通微信授权.
3. 在本地调试业务,可以对代码做如下的修改:
找到文件src/api/main.ts,找到init函数,作如下修改

```javascript
  init: function (params) {
    // 在该函数最前端插入下面的代码,下面的wxOpenid需要你根据不同的服务环境,找后台人员获取,替换成实际的wxOpenid
    // 这样,就可以直接在本地来测试业务逻辑了，特别注意，init里面注释的wxOpenid是开发人员或者测试人员的，可以用来开发
     const wxOpenidTrue = "ogp6dwv3yj0MLCa6yartxFPz3SLw";
      window.localStorage.setItem("wxOpenid", wxOpenidTrue);
      return this.doLoginByWxOpenId(wxOpenidTrue);
    ....
    ....
  }
```

 4.登录权限判断:
找到文件src/router/**.ts,作如下修改 在meta中添加属性（requiresAuth:true）,其他修改依次类推

```javascript
   // 居民首页
  {
    path: '/home',
    meta: {
      requiresAuth: true,
      keepAlive: false,
      title: '首页'
    },
    component: resolve => require(['../views/home/home.vue'], resolve)
  },
```

 5.本地提交代码:
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

## 五、线上调试

当项目代码,部署到线上之后,可以使用微信公众平台提供的`web开发者工具`来进行调试

### 使用环境变量来配置打包的业务参数,适用于docker中的部署,参数如下:

注意:如果配置下面的环境变量,打包时将不再使用config/api.js中的配置.而是直接使用下面环境变量中的配置.

```
#是否使用环境变量
export WXPACK_CONFIG_FROM_ENV=1   
#图片地址前缀
export WXPACK_CONFIG_IMGPREVIEWURL=http://http://xxx.com.cn/hcn-web/upload
#新闻请求的PCN链接
export WXPACK_CONFIG_NEWSURL=http://http://xxx.com.cn/pcn-core
#新闻内容的HTML文件前缀
export WXPACK_CONFIG_NEWSDETAILURL=http://http://xxx.com.cn/pcn-core/h5/views/resident/healthnews.html
#健康档案地址前缀
export WXPACK_CONFIG_HEALTHDOCURL=http://221.233.192.130:8888/ehrview/redirect?user=system&password=123&idCard=
#通用服务
export WXPACK_CONFIG_SERVICEURL=http://http://xxx.com.cn/hcn-web
#租户iD
export WXPACK_CONFIG_TENANTID=hcn.dongtai
#公众号APPID
export WXPACK_CONFIG_APPID=wx4ff1515c85d65af8
export WXPACK_CONFIG_ROLEID=patient
#公众号名称
export WXPACK_CONFIG_TITLE=健康东台
#公众号的关注链接
export WXPACK_CONFIG_ATTENTATIONWXACCOUNT=https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI2NTEwOTYzNA==&scene=124#wechat_redirect
#如果是公众号第三方接入,需要配置Component Id
export WXPACK_CONFIG_COMPONENT_APPID = wx7732u32378237823
```

## 六、前端代码编写规范

查看codeSpecification.md文档

## 七、前端打包webpack配置信息一览

核心一点就是： cmd 中敲 vue inspect > output.js(默认是 development) , 这样我们会得到一份最终生效的 webpack 配置信息:
        development: vue inspect > outputDev.js;
        production: vue inspect > outputProd.js --mode production.

## 八、常见问题

``` bash
1、项目一般执行顺序
     a、第一次：  菜单->获取微信授权->(code + state) -> loginByCode-> (wxOpenid + accessToken) ->   getAppInfoByDevice ->  首页
     b、再次进入：localStorage->wxOpenid->loginByOpenId->accessToken->   getAppInfoByDevice ->  首页
     c、解绑后：  菜单->获取微信授权->(code + state) -> loginByCode-> (wxOpenid + accessToken) ->   getAppInfoByDevice ->  首页

2、如果出现内存溢出，需要修改vue.config.js->148行： 这个地方改成4096
           let allowUseMem = totalmem > 2048 ? 8192 : 2048;
           -> let allowUseMem = totalmem > 2048 ? 4096 : 2048;

3、如果本地开发： 可以注掉一些不相关的路由， 这样本地运行就很快了， 记得打包把它还原回去；

4、如何在本地写css样式 (一个.vue 文件包含template/script/style)
   a、如果是在template模块里面直接引入全局定义, 可以看一下全局定义样式（src/assets/css/style.css），可以直接引用，使代码简洁；比如（mt5、text-right等）
   b、如果是在style模块里面写样式，可以看一下全局定义样式（src/assets/stylus/index.styl），可以直接使用全局变量，使代码修改简洁；比如（color_price、font_size_14等）
   c、其余样式根据具体业务进行编码，注意有全局的一定要引用全局的，全局没有定义，根据情况，在全局里面加入全局变量，否则就具体问题具体分析。

5、本地开发修改mint-ui(组件库)样式：
   /deep/ .mint-cell {
    min-height: 1rem;
  }
  可以根据具体的需求，在某个样式前，加入/deep/ , 就可以修改具体引入的组件库样式；

6、本地开发如果要引入图标，建议使用雪碧图；
   如何使用：直接拖动将要引入的图标到src/assets/icons/ 下，然后对应看一下 src/assets/css/sprites-generated.png，src/assets/css/sprites-generated.css，在模块里面引用一般是（<i class="w_icon w_icon_**********"></i>）。

7、本地打包： 一般执行完dll后（一般只执行一次，就是项目初始化的时候，如果你在dll模块里面加入了其他包，需要再执行一次，否则以后打线上包的时候都不需要再执行了），打包时间大约是30s；mac 一般打包时间（20s）

```

## 九、vs code setting(统一编码风格)

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

## 十、不同环境的基础域名（对接域名）

``` bash
开发环境（测试环境）：
https://xxx.com.cn/dist/#/ + 路由

比如：路由（具体对接的路由名称），隔离服务：
https://xxx.com.cn/dist/#/isolationService


质控环境：
https://xxx.com.cn/dist-zk/#/+路由

比如：路由（具体对接的路由名称），隔离服务：
https://xxx.com.cn/dist-zk/#/isolationService


演示环境：
https://xxx.com.cn/dist-ys/#/+路由；

比如：路由（具体对接的路由名称），隔离服务：
https://xxx.com.cn/dist-ys/#/isolationService


```

## 十一、打包流程解析以及对应的jenkins/rancher

``` bash
1、打包流程解析

A、当前分支的源代码：npm run build:production / make pro  生成dist 文件;

B、需要另外一个项目：http://jkcs.common.com.cn/bs-standard-repo/fore-end/wxmp-dist.git ;

C、根据本地打包的参数，对应于wxmp-dist 分支号，比如：打包的参数选择的是hcn-web(develop),那么对应wxmp-dist 分支对应选择develop;

2、打包对应jenkins/rancher

开发环境：jenkins->http://jenkins.atag.common.com.cn/ 项目名称：dev->hc-wxmp-v3.2-dist

        Rancher->http://rancher.atag.common.com.cn/env/1a5/apps/stacks 项目名称：dev->hc-wxmp-dist

        开发分支：develop 对应 wxmp-dist: develop

质控环境：jenkins->http://jenkins.atag.common.com.cn/ 项目名称：dev->hc-wxmp-v3.2-dist-zk

        Rancher->http://rancher.zk.atag.common.com.cn/env/1a5/apps/stacks  项目名称：质控环境->hc-wxmp

        质控分支：develop 对应 wxmp-dist: zk

演示环境：jenkins->http://jenkins.demojkcs.atag.common.com.cn/ 项目名称：dev->hc-wxmp-dist

        Rancher->http://rancher.demojkcs.atag.common.com.cn/env/1a5/apps/stacks 项目名称：演示环境->wxmp-dist

        演示分支：develop 对应 wxmp-dist: ys

达梦环境：jenkins->http://jenkins.dm.atag.common.com.cn/ 项目名称：dev->hc-wxmp-dist

        Rancher-> http://rancher.dm.atag.common.com.cn/login 项目名称：达梦环境->wxmp-dist

        达梦分支：develop 对应 wxmp-dist: dm

```
