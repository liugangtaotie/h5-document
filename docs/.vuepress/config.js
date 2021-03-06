// dcos/.vuepress/config.js
module.exports = {
  theme: "reco",
  title: "大前端技术交流文档",
  description: "大前端技术交流文档",
  dest: "./dist", // 设置输出目录
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  markdown: {
    lineNumbers: true, // 开启行号（关闭无呼吸灯特效）
    anchor: { permalink: true, permalinkBefore: true, permalinkSymbol: "#" },
    toc: { includeLevel: [2, 3] }, // 指定 [[toc]]
  },
  themeConfig: {
    subSidebar: "auto",
    smoothScroll: true, // 启用页面滚动效果
    site: "https://liugangtaotie.github.io/", // 站点地址
    logo: "/frontender.png", // 站点 Logo
    notFound: "/404.jpeg", // 404 页面背景图片
    // 添加导航栏
    nav: [
      {
        text: "文章",
        link: "/word/",
        items: [
          { text: "日常", link: "/word/vite-libs" },
          { text: "其他", link: "/other/shields" },
          { text: "计划", link: "/schedule/2022" },
          { text: "关注", link: "/attention/one" },
          { text: "文化", link: "/cultural/zhuangzi" },
        ],
        icon: "reco-blog",
      },
      {
        text: "文档",
        link: "/document/",
        items: [
          { text: "JS-Native", link: "/document/js-native" },
          { text: "app-qr-code", link: "/document/app-qr-code" },
          { text: "miniapp-qr-code", link: "/document/miniapp-qr-code" },
          { text: "docking-document", link: "/document/docking-document" },
        ],
        icon: "reco-api",
      },
      {
        text: "代码规范",
        link: "/codeDoc/",
        items: [
          { text: "git-使用规范", link: "/codeDoc/git-doc" },
          { text: "iOS-代码规范", link: "/codeDoc/ios-doc" },
          { text: "h5-代码规范", link: "/codeDoc/h5-doc" },
        ],
        icon: "reco-message",
      },
      {
        text: "tag",
        link: "/tag/",
        icon: "reco-tag",
      },
      {
        text: "时间轴",
        link: "/timeline/",
        icon: "reco-date",
      },
      {
        text: "gitlab",
        // 这里是下拉列表展现形式。
        items: [
          {
            text: "main",
            link: "https://github.com/liugangtaotie/h5-document.git",
          },
        ],
        icon: "reco-github",
      },
    ],

    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间

    // 左侧目录列表
    sidebar: {
      "/document/": ["js-native", "app-qr-code", "miniapp-qr-code", "docking-document"],
      "/codeDoc/git-doc": ["git-doc"],
      "/codeDoc/ios-doc": ["ios-doc"],
      "/codeDoc/": ["h5-doc", "pc-doc"],
      "/word/": [
        "vite-libs",
        "data-visualization",
        "d3",
        "v8",
        "handwriting-vite",
        "vue-ssr",
        "module-federation",
        "web-component",
        "micro-app",
        "qiankun",
        "ios-h5",
        "block-inline-element",
        "babel",
        "auto-deploy",
        "ceiling-scheme",
        "css-var",
        "debounce",
        "multi-end-unified",
        "read-statistic",
        "d2",
        "static-online-img",
        "subpackage",
        "applet-principle",
        "applet-engine",
        "applet",
        "xx-common-ui",
        "npm-private-library",
        "design-patterns",
        "js",
        "event-loop",
        "vite",
        "wxmp-next",
        "wxmp",
      ],
      "/other/": [
        "shields",
        "bug-project",
        "bugly",
        "buglyHotFix",
        "fastlane",
        "Jenkins",
        "mock",
        "mock-two",
        "unit-test",
        "Vue3",
        "Vue3-2",
        "webpack",
      ],
      "/schedule/": ["2022", "202201-03", "202206-08"],
      "/attention/": ["one", "excellent", "jest"],
      "/cultural/": ["zhuangzi", "zhouyi"],
    },

    startYear: "2020", // 项目开始时间，只填写年份

    // author
    author: "wuxiang",
    authorAvatar: "/leaf.png",

    valineConfig: {
      appId: "qmSmoIKH9AUWkfH5grLAIikP-gzGzoHsz", // your appId
      appKey: "T722fxrYq36T2naeyTpQfC32", // your appKey
    },

    vssueConfig: {
      platform: "github",
      owner: "OWNER_OF_REPO",
      repo: "NAME_OF_REPO",
      clientId: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
    },
  },

  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,

  // displayAllHeaders: true, // 默认值：false
  plugins: [
    [
      //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: [
          "wanko",
          "blackCat",
          "whiteCat",
          "haru1",
          "haru2",
          "haruto",
          "koharu",
          "izumi",
          "shizuku",
          "miku",
          "z16",
        ],
        clean: false,
        messages: {
          welcome: "我是lookroot欢迎你的关注 ",
          home: "心里的花，我想要带你回家。",
          theme: "好吧，希望你能喜欢我的其他小伙伴。",
          close: "再见哦",
        },
        width: 240,
        height: 352,
      },
    ],
    [
      // 先安装在配置， npm install @vuepress-plugin-meting --save
      "meting",
      {
        metingApi: "https://api.injahow.cn/meting/",
        meting: {
          server: "netease",
          type: "playlist",
          mid: "621465725",
        }, // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: false,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: "#f9bcdd",
          // 播放顺序为随机
          order: "random",
          // 初始音量
          volume: 0.1,
          lrcType: 3,
        },
        mobile: {
          // 手机端去掉cover图
          cover: false,
        },
      },
    ],
    // [
    //   //彩带背景 先安装在配置， npm install vuepress-plugin-ribbon --save
    //   'ribbon',
    //   {
    //     size: 90, // width of the ribbon, default: 90
    //     opacity: 0.8, // opacity of the ribbon, default: 0.3
    //     zIndex: -1, // z-index property of the background, default: -1
    //   },
    // ],
    [
      // 鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
      "cursor-effects",
      {
        size: 3, // size of the particle, default: 2
        shape: ["circle"], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      },
    ],
    [
      // 动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/favicon.ico",
        hideText: "(●—●)喔哟，崩溃啦！",
        recoverTime: 2000,
      },
    ],
    [
      // 图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
      "@vuepressplugin-medium-zoom",
      {
        selector: ".page img",
        delay: 1000,
        options: {
          margin: 24,
          background: "rgba(25,18,25,0.9)",
          scrollOffset: 40,
        },
      },
    ],
    [
      // 插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
      "flowchart",
    ],
    [
      // 插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
      "sitemap",
      {
        hostname: "https://www.glassysky.site",
      },
    ],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true, //vuepress插件PWA 先安装在配置 npm install @vuepress/pwa --save
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新",
        },
      },
    ],
    [
      "vuepress-plugin-nuggets-style-copy",
      {
        copyText: "复制代码", //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
        tip: {
          content: "复制成功!",
        },
      },
    ],
    ["vuepress-plugin-smooth-scroll"], // 平滑滚动
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-boxx"],
    // [
    //   '@vuepress-yard/vuepress-plugin-window',
    //   {
    //     title: '大前端の公告', //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
    //     contentInfo: {
    //       title: '欢迎进来的小耳朵 🎉🎉🎉',
    //       needImg: true,
    //       imgUrl: 'https://reinness.com/avatar.png',
    //       // content: '喜欢博皮可以到博客园关注教程',
    //       contentStyle: '',
    //     },
    //     bottomInfo: {
    //       btnText: '关于',
    //       linkTo: 'https://jkcs.common.com.cn/learning/h5/h5-document',
    //     },
    //     closeOnce: false,
    //   },
    // ],
  ],
};
