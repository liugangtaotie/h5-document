---
title: 第三章、vite
author: liugang
date: 2020-09-06
tags:
 - tag4
categories:
 - category1
---

<Boxx  changeTime="5000"/>  

## 总方针：是什么？从哪里来？要到哪里去？

## 一、是什么？

* vite ------- vue 作者尤雨溪开发的web开发工具

* 它具有的特性：静态服务器、构建工具、轻量、开箱即用、极速模块热替换、内置Rollup 用于打包项目

* 作者在微博上的发言：

Vite，一个基于浏览器原生 ES imports 的开发服务器。利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用。同时不仅有 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢。针对生产环境则可以把同一份代码用 rollup 打。虽然现在还比较粗糙，但这个方向我觉得是有潜力的，做得好可以彻底解决改一行代码等半天热更新的问题。

它的主要特点：基于浏览器 native 的 ES module
 [ES module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) 来开发，省略打包这个步骤，因为需要什么资源直接在浏览器里引入即可。

本质上是用C++ / Rust / Go 重写了依赖分析/模块构建能力，但是充分利用了已有的生态，使得开发成本极大降低。

## 二、从哪里来？

* 时下热门的打包构建工具有：parcel 、 rollup（es module/ tree shaking） 、 webpack(最强的性能、扩展能力强)

* 2.1 如何食用

```
# npm 6.x
npm init @vitejs/app <project-name> --template vue

# npm 7+, extra double-dash is needed:
npm init @vitejs/app <project-name> --template vue

# yarn
yarn create @vitejs/app <project-name> --template vue

 cd <project-name>

 npm install (or `yarn`)

 npm run dev (or `yarn dev`)
 ```

* 2.2 背后的原理

* 2.2.1 如何去掉打包步骤？

打包的概念是开发者利用打包工具将应用各个模块集合在一起形成 bundle，以一定规则读取模块的代码——以便在不支持模块化的浏览器里使用。

为了在浏览器里加载各模块，打包工具会借助胶水代码用来组装各模块，比如 webpack 使用 map存放模块 id 和路径，使用 __webpack_require__ 方法获取模块导出。

vite 利用浏览器原生支持模块化导入这一特性，省略了对模块的组装，也就不需要生成 bundle，所以打包这一步就可以省略了。

* 2.2.2 如何实现按需加载？

webpack 之类的打包工具会将各模块提前打包进 bundle 里，但打包的过程是静态的——不管某个模块的代码是否执行到，这个模块都要打包到 bundle 里，这样的坏处就是随着项目越来越大打包后的 bundle 也越来越大。

开发者为了减少 bundle 大小，会使用动态引入 import() 的方式异步的加载模块（ 被引入模块依然需要提前打包)，又或者使用 tree shaking 等方式尽力的去掉未引用的模块，然而这些方式都不如 vite 的优雅，vite 可以只在需要某个模块的时候动态（借助 import() ）的引入它，而不需要提前打包，虽然只能用在开发环境，不过这就够了。

## 三、要到哪里去？

正如尤大大所言：彻底解决改一行代码等半天热更新的问题。咱们配好料就等饺子下锅了，真香！

## 四、如何实践？ 
直接上干货：下面链接

[vite2-vue2-vant2-ts](https://jkcs.common.com.cn/learning/h5/vite2-vue2-vant2-ts)

搭建的这套框架，解决了几个前端经常遇到的问题：

a. vite2实现开发环境秒级更新；

b. 实现响应式布局，从而达到任意屏幕适配；

c. 实现vant2 自定义主题色；

d. 加入eslint、stylelint、prettier等插件，实现代码统一规范。

### 4.1 开发环境秒级更新

     上文已经做了解释，目前只关心实现效果：
     
![runtime.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1e1fbb9597064014a86ff0af579c5646~tplv-k3u1fbpfcp-watermark.image)

启动时间为757ms，基本是秒级更新。

### 4.2 任意屏幕适配

采用viewpoint方案：

```js
// 步骤一
npm i -D postcss-px-to-viewport

// 步骤二，配置postcss.config.js文件
module.exports = ({ file }) => {
  return {
    plugins: {
      // autoprefixer: {},
      "postcss-px-to-viewport": {
        viewportWidth: 375, // 视口的宽度，对应的时设计稿的宽度/2，一般为750
        unitToConvert: "px",
        viewportHeight: 667, // 视口的高度，对应的是设计稿的高度（也可以不配置）
        unitPrecision: 5, // 指定‘px’转换为视口单位值的小数位数（很多时候无法整除）
        propList: ["*"], // (Array)指定可以转换的css属性，默认是['*']，代表全部属性进行转换
        viewportUnit: "vw", // 指定需要转换成的视口单位，建议使用vw
        fontViewportUnit: "vw",
        selectorBlankList: ["ignore", "tab-bar"], // 指定不需要转换的类
        minPixelValue: 1, // 小于或等于‘1px’不转换为视口单位
        mediaQuery: false, // 允许在媒体查询中转换为‘px’
        replace: true,
        landscape: false,
        landscapeUnit: "vw",
        landscapeWidth: 568,
        exclude: [], // 排除node_modules文件中第三方css文件
        // exclude: /(\/|\\)(node_modules)(\/|\\)/, // 排除node_modules文件中第三方css文件
      },
    },
  };
};
```


### 4.3 实现vant2 自定义主题色

[官网主题色](https://github.com/youzan/vant/blob/dev/src/style/var.less)

```js
// 步骤一：官网复制theme.less文件到  src/assets/css/theme.less

...
// Tabs
@tabs-default-color: @xx-color-primary;
...

// 步骤二：引入全局样式

...
import { xxx } from "vant";
import "vant/lib/index.less"; // 全局引入样式
Vue.use(xxx);
...

// 步骤三：vite.config.ts

...
import path, { resolve } from "path";
...
export default defineConfig({
...
 // 配置别名
  resolve: {
    alias: [
      {
        find: /^~/,
        replacement: "",
      },
      {
        find: "@",
        replacement: resolve(__dirname, "src"),
      },
      {
        find: "@ASS",
        replacement: resolve(__dirname, "src/assets"),
      },
      ... 
    ],
  },
...

css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import "@ASS/css/theme.less";`,
        },
      },
    },
  },

...
```

实践后的效果：

![Screenshot 2021-04-04 at 4.56.01 PM.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/51f2e8a0877045a4a2d4785d49743b44~tplv-k3u1fbpfcp-watermark.image)

### 4.4 使用rollup的打包插件

    类比webpack里面的插件：copy-webpack-plugin，rollup里面相应的插件为：rollup-plugin-copy，那如何在vite2里面实现静态文件，跳过打包，直接复制到dist里面。

首先 npm i -D rollup-plugin-copy;

接着在vite.config.ts里面配置；

``` js
// vite.config.ts

...
import copy from "rollup-plugin-copy";
...
export default defineConfig({
...
// 插件配置地方
plugins: [
    ...
    // When compiling the project, copy the static file into the dist directory
    copy({
      targets: [{ src: "static/*", dest: "dist/static" }],
      hook: "writeBundle", // notice here
    }),
  ],
...
```

实现后的：

![dist.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/136bbd6d63194a9d8d172d2e6f6e5870~tplv-k3u1fbpfcp-watermark.image)

### 4.5 代码统一规范

加入基本eslint 、stylelint、 prettier 等配置实现代码统一，[具体详见](https://jkcs.common.com.cn/learning/h5/vite2-vue2-vant2-ts)

## 五、vite.config.ts配置详解

```js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

/*
  //* 也可以使用函数来进行判断是否要根据模式做一些处理
  @params {
    command: 'build' | 'serve';
    mode: string;
  }
  @example

  export default ({ command, mode }) => {
    return defineConfig({})
  }
*/

// https://vitejs.dev/config/
// 这个函数就做了一个添加类型的作用
/*
  export function defineConfig(config: UserConfigExport): UserConfigExport {
    return config
  }
*/
export default defineConfig({
  // 类型: string
  // default: process.cwd()
  // 项目根目录，可以是一个绝对路径，或者是一个相对于该配置文件本身的路径
  root: process.cwd(),
  // 类型: string
  // default: /,
  // 开发或者生产环境服务的公共基础路径，合法的值包括
  /*
    1. 绝对url路径名，如`/foo/`
    2. 完整的url，如`https://foo.com/`
    3. 空字符串或`./`（用于开发环境）
  */
  base: '/',
  // 类型: string,
  // 默认: command为serve时默认为`development`，为build时默认为`production`
  // 在配置中指明将会把`serve`和`build`时的模式都覆盖掉
  // 可以通过命令行`--mode`来重写
  mode: 'development',
  // 类型: Record<string, any>
  // 定义全局变量替换方式，每项在开发时会被定义为全局变量，而在构建时则是静态替换
  /*
    1. 从 2.0.0-beta.70 版本开始，字符串值将作为一个直接的表达式，所以如果定义为了一个字符串常量，它需要被显式地引用（例如：通过 JSON.stringify）
    2. 替换知会在匹配到周围是单词边界(\b)时执行
  */
  define: {
    a: 123
  },
  /*
    interface Plugin extends RollupPlugin {
      enforce?: 'pre' | 'post',
      apply?: 'serve' | 'build',
      config?: (config: UserConfig, env: ConfigEnv) => UserConfig | null | void,
      configResolved?: (config: ResolvedConfig) => void,
      configureServer?: ServerHook,
      transformIndexHtml?: IndexHtmlTransform,
      handleHotUpdate?(
        ctx: HmrContext
      ): Array<ModuleNode> | void | Promise<Array<ModuleNode> | void>,
      resolveId?(
        this: PluginContext,
        source: string,
        importer: string | undefined,
        options: { custom?: CustomPluginOptions },
        ssr?: boolean
      ): Promise<ResolveIdResult> | ResolveIdResult
      load?(
        this: PluginContext,
        id: string,
        ssr?: boolean
      ): Promise<LoadResult> | LoadResult
      transform?(
        this: TransformPluginContext,
        code: string,
        id: string,
        ssr?: boolean
      ): Promise<TransformResult> | TransformResult
        }
  */
  // 类型：(Plugin | Plugin[])[]
  // 需要用的的插件，配置模式的时候在这儿配置
  /*
    @example
      vue: 
        ```ts
          import vue from '@vitejs/plugin-vue'
          ...

          plugins: [vue()]
        ```
      react:
        ```ts
          import reactRefresh from '@vitejs/plugin-react-refresh'
          ...

          plugins: [reactRefresh()]
        ```
  */
  plugins: [vue()],
  // 类型: string
  // 默认: public
  // 作为静态资源服务的文件夹。这个目录中的文件会再开发中被服务于 /，在构建时，会被拷贝到 outDir 根目录，并没有转换，永远只是复制到这里。该值可以是文件系统的绝对路径，也可以是相对于项目根的路径。
  publicDir: path.resolve(__dirname, 'public'),
  // 解析配置
  resolve: {
    // 类型: Record<string, string> | Array<{ find: string | RegExp, replacement: string }>
    // 别名
    // 将会被传递到 @rollup/plugin-alias 作为它的 entries。也可以是一个对象，或一个 { find, replacement } 的数组
    // 当使用文件系统路径的别名时，请始终使用绝对路径。相对路径作别名值将按原样使用导致不会解析到文件系统路径中。
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    // 类型: string[]
    // 如果你在你的应用程序中有相同依赖的副本（比如monorepos），使用这个选项来强制vite总是将列出的依赖关系解析到相同的副本（从项目根目录）
    dedupe: [],
    // 类型: string[]
    // 在解析包的情景导出时允许的附加条件
    /*
      一个带有情景导出的包可能在它的package.json中有以下exports字段
      ```json
        {
          "exports": {
            ".": {
              "import": "./index.esm.js",
              "require": "./index.cjs.js"
            }
          }
        }
      ```
      在这里，`import`和`require`被称为‘情景’。情景可以嵌套，并且应该从最特定的到最不特定的指定。
    */
    // Vite 有一个“允许的情景”列表和并且会匹配列表中第一个情景。默认允许的情景是：import，module，browser，default，和基于当前情景为 production/development。resolve.conditions 配置项使得可以指定其他允许的情景。
    conditions: [],
    // 类型: string[],
    // 默认: ['module', 'jsnext:main', 'jsnext']
    // `package.json`中，在解析包的入口点时尝试的字段列表。注意，这比从`exports`字段解析的情景导出优先级低。
    // 如果一个入口点从`exports`成功解析，主字段将被忽略
    mainFields: [],
    // 类型: string[]
    // 默认: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    // 导入时想要省略的扩展名列表。
    // 注意：不建议忽略自定义导入类型的扩展名（例如：`.vue`），因为它会干扰IDE和类型支持
    extensions: []
  },
  // css配置
  css: {
    /*
      @types

      ```ts
      interface CSSModulesOptions {
        scopeBehaviour?: 'global' | 'local'
        globalModulePaths?: string[]
        generateScopedName?:
          | string
          | ((name: string, filename: string, css: string) => string)
        hashPrefix?: string
        //* 默认：'camelCaseOnly'
        localsConvention?: 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'
      }
      ```
    */
    // 配置`css modules`的行为，选项将被传递给`postcss-modules`
    modules: {},
    // 类型: string | (postcss.ProcessOptions & { plugins?: postcss.Plugin[] })
    // 内联的PostCss配置（格式同postcss.config.js），或者一个（默认基于项目根目录的）自定义的PostCss配置路径。
    // 其路径搜索是通过`postcss-load-config`实现的
    //* 注意：如果提供来该内联配置，vite将不会搜索其他PostCss配置源
    postcss: '',
    // 类型: Record<string, object>
    /*
      指定传递给CSS预处理器的选项，例如：
      ```js
        export default {
          css: {
            preprocessorOptions: {
              scss: {
                additionalData: `$injectedColor: orange;`
              }
            }
          }
        }
      ```
    */
    preprocessorOptions: {}
  },
  // json配置
  json: {
    // 类型: boolean
    // 默认: true
    // 是否支持从`.json`文件中进行按名导入
    namedExports: true,
    // 类型: boolean
    // 默认: false
    // 若设置为 true，导入的 JSON 会被转换为 export default JSON.parse("...") 会比转译成对象字面量性能更好，尤其是当 JSON 文件较大的时候
    //* 开启此项，则会禁用按名导入
    stringify: false
  },
  // esbuild配置（vite使用了esbuild来进行编译）
  // 类型: ESBuildOptions | false
  /*
    ESBuildOptions继承自esbuild转换选项(https://esbuild.github.io/api/#transform-api)
    最常见的用例是自定义JSX

    ```js
    export default {
      esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
      }
    }
    ```
    默认情况下，ESbuild 应用在 ts、jsx、tsx 文件。你可以通过 esbuild.include 和 esbuild.exclude 对其进行配置，它们两个配置的类型是string | RegExp | (string | RegExp)[]。
    设置成 false 可以禁用 ESbuild 转换（默认应用于 .ts. .tsx 和 .jsx 文件）。
    
  */

  /*
    此外，你还可以通过esbuild.jsxInject来自动为每一个被 ESbuild 转换的文件注入 JSX helper。

    ```js
    export default {
      esbuild: {
        jsxInject: `import React from 'react'`
      }
    }
    ```
  */
  esbuild: {},
  // 静态文件处理配置
  // 类型: string | RegExp | (string | RegExp)[]
  // 相关内容（https://cn.vitejs.dev/guide/assets.html）
  // 指定其他文件类型作为静态资源处理（这样导入它们就会返回解析后的 URL）
  assetsInclude: '',
  // 日志级别配置
  // 类型: 'info' | 'warn' | 'error' | 'silent'
  // 调整控制台输出的级别，默认为`info`
  logLevel: 'info',
  // 是否清屏
  // 类型: boolean
  // 默认: true
  // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息。命令行模式下请通过 --clearScreen false 设置。
  clearScreen: true,
  // 服务相关配置
  server: {
    // 类型: string
    // 指定服务器主机名
    host: 'localhost',
    // 类型: number
    // 指定服务器端口。
    //* 注意：如果端口已经被使用，Vite 会自动尝试下一个可用的端口，所以这可能不是服务器最终监听的实际端口。
    port: 10086,
    // 类型: boolean
    // 设为true时若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 类型: boolean | https.ServerOptions
    // 启用 TLS + HTTP/2。注意当 server.proxy option 也被使用时，将会仅使用 TLS。
    // 这个值也可以是一个传递给 https.createServer() 的 选项对象。
    https: false,
    // 类型: boolean | string
    // 在服务器启动时自动在浏览器中打开应用程序
    /*
      注意: 当此值为字符串时，会被用作URL的路径名

      ```js
        export default {
          server: {
            open: '/docs/index.html'
          }
        }
      ```
    */
    open: true,
    // 本地服务代理
    // 类型: Record<string, string | ProxyOptions>
    // 为开发服务器配置自定义代理规则。期望接收一个 { key: options } 对象。如果 key 值以 ^ 开头，将会被解释为 RegExp。
    /*
      使用`http-proxy`，完整选项详见https://github.com/http-party/node-http-proxy#options

      @example

      ```js
        export default {
          server: {
            proxy: {
              // 字符串简写写法
              '/foo': 'http://localhost:4567/foo',
              // 选项写法
              '/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
              },
              // 正则表达式写法
              '^/fallback/.*': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, '')
              }
            }
          }
        }

      ```
    */
    proxy: {},
    // 类型: boolean | CorsOptions
    // 为开发服务器配置 CORS。默认启用并允许任何源，传递一个 选项对象 来调整行为或设为 false 表示禁用。
    cors: true,
    // 类型: boolean
    // 相关内容: https://cn.vitejs.dev/guide/dep-pre-bundling.html
    // 设置为`true`强制使依赖预构建
    force: false,
    // 类型: boolean | { protocol?: string, host?: string, port?: number, path?: string, timeout?: number, overlay?: boolean }
    // 禁用或配置HMR链接（用于HMR websocket 必须使用不同的http服务器地址的情况）
    // 设置`server.hmr.overlay`为`false`可以禁用服务器错误遮罩层
    hmr: true,
    // 类型: object
    // 传递给`chokidar`的文件系统监视器选项
    // https://github.com/paulmillr/chokidar#api
    watch: {}
  },
  // 构建的配置
  build: {
    // 类型: string
    // 默认: modules
    // 相关内容：https://cn.vitejs.dev/guide/build.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7
    // 选项: https://esbuild.github.io/api/#target
    /*
      设置最终构建的浏览器兼容目标。默认值是一个 Vite 特有的值，'modules'，这是指 支持原生 ES 模块的浏览器。
      另一个特殊值是 “esnext” —— 即指执行 minify 转换（作最小化压缩）并假设有原生动态导入支持。
      转换过程将会由 esbuild 执行，并且此值应该是一个合法的 esbuild 目标选项。自定义目标也可以是一个 ES 版本（例如：es2015）、一个浏览器版本（例如：chrome58）或是多个目标组成的一个数组。
      注意，如果代码包含不能被 esbuild 安全地编译的特性，那么构建将会失败。查看 esbuild 文档 获取更多细节。
    */
    target: 'modules',
    // 类型: string
    // 默认: dist
    // 指定输出路径（相对于项目根目录）
    outDir: 'dist',
    // 类型: string
    // 默认: assets
    // 指定生成静态资源的存放路径（相对于build.outDir）
    assetsDir: 'assets',
    // 类型: number
    // 默认: 4096（4kb）
    // 小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项。
    assetsInlineLimit: 4096,
    // 类型: boolean
    // 默认: true
    // 启用/禁用 CSS 代码拆分。当启用时，在异步 chunk 中导入的 CSS 将内联到异步 chunk 本身，并在块加载时插入。
    // 如果禁用，整个项目中的所有 CSS 将被提取到一个 CSS 文件中。
    cssCodeSplit: true,
    // 类型: boolean
    // 默认: false
    // 构建后是否生成sourceMap文件
    sourcemap: false,
    // 类型: RollupOptions
    // https://rollupjs.org/guide/en/#big-list-of-options
    // 自定义底层的 Rollup 打包配置。这与从 Rollup 配置文件导出的选项相同，并将与 Vite 的内部 Rollup 选项合并。查看 Rollup 选项文档 获取更多细节。
    // https://rollupjs.org/guide/en/#big-list-of-options
    rollupOptions: {},
    // 类型: RollupCommonJSOptions
    // https://github.com/rollup/plugins/tree/master/packages/commonjs#options
    // 传递给 @rollup/plugin-commonjs 插件的选项。
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    commonjsOptions: {},
    // 类型: { entry: string, name?: string, formats?: ('es' | 'cjs' | 'umd' | 'iife')[] }
    // 相关内容: https://cn.vitejs.dev/guide/build.html#%E5%BA%93%E6%A8%A1%E5%BC%8F
    //* 构建为库。entry 是必须的因为库不可以使用 HTML 作为入口。name 则是暴露的全局变量，并且在 formats 包含 'umd' 或 'iife' 时是必须的。默认 formats 是 ['es', 'umd']。
    lib: {
      entry: ''
    },
    // 类型: boolean
    // 默认: false
    // 相关内容: https://cn.vitejs.dev/guide/backend-integration.html
    // 当设置为 true，构建后将会生成 manifest.json 文件，映射没有被 hash 的资源文件名和它们的 hash 版本。可以为一些服务器框架渲染时提供正确的资源引入链接。
    manifest: false,
    // 类型: boolean | 'terser' | 'esbuild'
    // 默认: 'terser'
    // 设置为 false 可以禁用最小化混淆，或是用来指定使用哪种混淆器。默认为 Terser，虽然 Terser 相对较慢，但大多数情况下构建后的文件体积更小。ESbuild 最小化混淆更快但构建后的文件相对更大。
    // https://github.com/terser/terser
    minify: 'terser',
    // 类型: TerserOptions
    // 传递给Terser的更多minify选项
    // https://terser.org/docs/api-reference#minify-options
    terserOptions: {},
    // 类型: boolean
    // 默认: true
    // 设置为 false 来禁用将构建后的文件写入磁盘。这常用于 编程式地调用 build() 在写入磁盘之前，需要对构建后的文件进行进一步处理。
    // https://cn.vitejs.dev/guide/api-javascript.html#build
    write: true,
    // 类型: boolean
    // 默认: 若outDir在root目录下，则为true
    // 默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。若 outDir 在根目录之外则会抛出一个警告避免意外删除掉重要的文件。可以设置该选项来关闭这个警告。该功能也可以通过命令行参数 --emptyOutDir 来使用。
    emptyOutDir: true,
    // 类型: boolean
    // 默认: true
    // 启用/禁用 brotli 压缩大小报告。压缩大型输出文件可能会很慢，因此禁用该功能可能会提高大型项目的构建性能。
    brotliSize: true,
    // 类型: number
    // 默认: 500
    // chunk大小警告的限制，以kbs为单位
    chunkSizeWarningLimit: 500
  },
  // 依赖优化
  optimizeDeps: {
    // 入口
    // 类型: string | string[]
    // 默认情况下，Vite 会抓取你的 index.html 来检测需要预构建的依赖项。如果指定了 `build.rollupOptions.input`，Vite 将转而去抓取这些入口点。
    // 如果这两者都不适合你的需要，则可以使用此选项指定自定义条目 - 该值需要遵循 fast-glob 模式 ，或者是相对于 vite 项目根的模式数组。这将覆盖掉默认条目推断。
    // https://github.com/mrmlnc/fast-glob#basic-syntax
    entries: '',
    // 类型: string[]
    // 在预构建中强制排除的依赖项
    exclude: [],
    // 类型: string[]
    // 默认情况下，不在 node_modules 中的，链接的包不会被预构建。使用此选项可强制预构建链接的包。
    include: []
  }
})


```


## 推荐的官方文档

[vue-cli 迁移 vite2 实践小结](https://zhuanlan.zhihu.com/p/353601634)

[Vite 2.0 初探](https://zhuanlan.zhihu.com/p/360109945)

[备战2021：Vite2项目最佳实践](https://zhuanlan.zhihu.com/p/349271585)

[重构于Vite](https://zhuanlan.zhihu.com/p/352216610)

