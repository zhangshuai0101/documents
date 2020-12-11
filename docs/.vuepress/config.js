const path = require("path");
module.exports = {
  title: '文档库', // 设置网站标题
  dest: './dist', // 设置输出目录
  base: '/', // 设置站点根路径
  markdown: {
    config: md => {
      md.set({ breaks: true })
    },
   },
  themeConfig: {
    search: true,
    lastUpdated: '上次修改时间',
    editLinks: true,
    editLinkText: '修改此页面',
    repo: 'zhangshuai0101/documents/',
    docsDir: 'docs',
    repoLabel: '仓库地址',
    nav: [
      { text: '首页', link: '/' },
      { text: '项目管理', link: '/projectManage/project' },
      { text: 'demo测试', link: '/demo/dada' }
    ],
    sidebar: {
      '/projectManage': [
        {
          title: '项目管理',
          collapsable: false,
          children: [
            './projectManage/project',
            './projectManage/demand'
          ]
        }
      ],
      '/demo': [
        {
          title: 'demo',
          collapsable: false,
          children: [
            './demo/dada',
            './demo/demo'
          ]
        }
      ],
    }
  },
  chainWebpack: (config, isServer) => {
    config.resolveLoader
      .modules
      .add(path.resolve(__dirname, './node_modules'))
  }
}