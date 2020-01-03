const sidebar = {
  '/js/': [{
      title: '基础修炼',
      children: [
        'js-series-1',
        'js-series-2',
        'js-series-3',
        'js-theme-1',
        'js-theme-2',
        'js-theme-3',
        'es6-series',
        'js-series-summary',
        'js-var',
        'js-prototype',
        'js-this-apply-call',
        'es6-class',
        'js算法',
        'mode-单例模式',
        'js-chapter-1',
        'js-chapter-2',
        'js-chapter-3',
        'js-learn',
      ]
    },
    {
      title: '日常杂记',
      children: [
        'js-code',
        'js-code-big',
        'throttle-debounce',
      ]
    },
    {
      title: '面试总结',
      children: [
        'interview',
      ]
    },
    {
      title: '资源整合',
      children: [
        'js-doc',
        'plugin-purl',
        'plugin-wow',
        'plugin-jquery-1',
        'blog-01',
      ]
    }

  ],
  '/css/': [{
      title: 'CSS',
      children: [
        'css-learn',
        'css-code',
        'css3',
        'css-rem',
        'sass',
        'article'
      ]
    },
    {
      title: 'HTML',
      children: [
        'html-code',
        'html-edm',
      ]
    }
  ],
  '/vue/': [{
    title: 'Vue.js',
    collapsable: false,
    children: [
      'vuepress-blog',
      'v-webpack',
      'v-router',
    ]
  }],
  '/react/': [{
    title: 'React.js',
    collapsable: false,
    children: [
      'learn',
      'react-doc',
      'react-demo',
      'webpack-v3',
    ]
  }],
  '/node/': [{
    title: 'Node.js',
    collapsable: false,
    children: [
      'nodejs-learn',
      'connect',
      'tcp',
      'http',
      'event',
      'express-init',
      'express-spider',
      'express-spider-more',
      'node-event',
    ]
  }],
  '/web/': [{
      title: '前端开发',
      children: [
        'article',
        'web',
        'web-xss',
        'header-response',
      ]
    },
    {
      title: '网络基础',
      children: [
        'http',
        'tcp-ip'
      ]
    },
    {
      title: '开发工具',
      children: [
        'git-command',
        'git-revert',
        'git-learn',
        'gnvm',
        'macos-bash',
        'tool-tree',
        'linux-shell',
        'ubuntu-aliyun',
        'macos-du',
        'doc-rule',
      ]
    },
    {
      title: '日常报错',
      children: [
        'localhost',
        'error-git-push',
        'error-github-file',
        'error-macos-brew',
        'error-macos-node',
      ]
    },
    {
      title: '其他',
      children: [
        'hexo',
        'hexo-order',
      ]
    }
  ],

}

const nav = [{
    text: '主页',
    link: '/'
  },
  {
    text: '分类',
    items: [{
        text: 'JS',
        link: '/js/' + sidebar['/js/'][0]['children'][0]
      },
      {
        text: 'CSS',
        link: '/css/' + sidebar['/css/'][0]['children'][0]
      },
      {
        text: 'Vue.js',
        link: '/vue/' + sidebar['/vue/'][0]['children'][0]
      },
      {
        text: 'React.js',
        link: '/react/' + sidebar['/react/'][0]['children'][0]
      },
      {
        text: 'Node.js',
        link: '/node/' + sidebar['/node/'][0]['children'][0]
      },
      {
        text: '前端开发',
        link: '/web/' + sidebar['/web/'][0]['children'][0]
      },
    ]
  },
  {
    text: '博文',
    link: 'http://www.yangtao.site'
  },
  {
    text: '秘籍',
    items: [{
        text: '大牛博客',
        items: [{
            text: 'Vue技术揭秘',
            link: 'https://ustbhuangyi.github.io/vue-analysis/'
          },
          {
            text: 'ConardLi的blog',
            link: 'http://www.conardli.top/blog/'
          },
          {
            text: 'awesome-coding-js',
            link: 'http://www.conardli.top/docs/'
          },
          {
            text: '木易杨前端进阶',
            link: 'https://muyiy.vip/'
          },
          {
            text: '冴羽的博客',
            link: 'https://github.com/mqyqingfeng/Blog'
          },

        ]
      },
      {
        text: '面试宝典',
        items: [{
            text: '前端面试与进阶指南',
            link: 'https://www.cxymsg.com/guide/'
          },
          {
            text: '前端硬核面试专题',
            link: 'https://yangtao2o.github.io/learn/#/docs/Interview'
          },
          {
            text: '全栈修炼',
            link: 'https://biaochenxuying.github.io/blog/guide/#%E7%AE%80%E4%BB%8B'
          },
        ]
      },
      {
        text: '大佬人物',
        items: [{
            text: '廖雪峰',
            link: 'https://www.liaoxuefeng.com/'
          },
          {
            text: '阮一峰',
            link: 'http://www.ruanyifeng.com/blog/'
          },
          {
            text: '张鑫旭',
            link: 'http://www.zhangxinxu.com/'
          },
        ]
      },
      {
        text: '造车工具',
        items: [{
            text: '收藏夹',
            link: 'http://collect.w3ctrain.com/'
          },
          {
            text: '在线工具',
            link: 'https://tool.lu/c/developer/'
          },
        ]
      },
      {
        text: '前端工程',
        items: [{
            text: '网络基础',
            link: 'https://juejin.im/post/5c591fda6fb9a049dc02b1cc'
          },
          {
            text: '数据结构和算法',
            link: 'https://juejin.im/post/5d5b307b5188253da24d3cd1'
          },
        ]
      },
    ]
  },
  {
    text: 'MySite',
    items: [{
        text: 'Hexo博客',
        link: 'https://istaotao.com/'
      },
      {
        text: '牛客网博客',
        link: 'https://blog.nowcoder.net/istaotao'
      },
      {
        text: '掘金分享',
        link: 'https://juejin.im/user/58b67dd58fd9c50061238e38/shares/'
      },
      {
        text: '掘金收藏',
        link: 'https://juejin.im/user/58b67dd58fd9c50061238e38/collections'
      },
      {
        text: 'CodePen',
        link: 'https://codepen.io/istaotao/'
      },
      // { text: 'QDfuns', link: 'https://www.qdfuns.com/u/32286.html' },
      {
        text: 'CSDN',
        link: 'https://blog.csdn.net/qq_42840269'
      },
      {
        text: 'SegmentFault',
        link: 'https://segmentfault.com/u/taoboy/notes'
      },
    ]
  },
  {
    text: '摄影',
    items: [{
        text: 'LOFTER',
        link: 'http://dataoboy.lofter.com/'
      },
      {
        text: '简书',
        link: 'https://www.jianshu.com/u/c6b5715f3016'
      },
      {
        text: '图虫',
        link: 'https://tuchong.com/2763959/'
      },
      {
        text: '印象',
        link: 'https://cc.adnonstop.com/index.php?r=Info/Home&user_id=160865486&pn=interphoto'
      },
    ]
  },
  {
    text: '友链',
    items: [{
        text: '友链',
        link: 'https://istaotao.com/friends/'
      },
      {
        text: '木易杨前端进阶',
        link: 'https://muyiy.vip/'
      },
      {
        text: '大雷子',
        link: 'https://isliulei.com/'
      },
      {
        text: '大贵子',
        link: 'https://zguii.com/'
      },
      {
        text: 'xaoxuu',
        link: 'https://xaoxuu.com'
      },
    ]
  }
]

const config = {
  base: '/vuepress/', // 基准 URL
  title: '大涛子客栈',
  description: '前端开发、摄影、羽毛球、电影',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
  ],
  port: 8080,
  // dest: '.vuepress/dist',  // 指定 vuepress build 的输出目录
  ga: '',
  markdown: { // markdown设置
    lineNumbers: true,
  },
  themeConfig: { // 主题配置
    repo: 'yangtao2o/vuepress', // 项目的 github 地址
    repoLabel: '代码', // github 地址的链接名
    editLinks: false, // 当前 markdown 的 github 代码链接
    editLinkText: '查看原文|编辑此页',
    lastUpdated: 'Last Updated',
    nav,
    sidebar,
  },
}

module.exports = config