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
    lastUpdated: '最近更新时间',
    editLinks: true,
    editLinkText: '修改此页面',
    repo: 'zhangshuai0101/documents/',
    docsDir: 'docs',
    repoLabel: '仓库地址',
    sidebarDepth: 2,
    nav: [
      { text: '首页', link: '/',id: 'home' },
      { text: '使用手册',id: 'operationManual', link: '/operationManual/home' },
    ],
    sidebar: {
      '/projectManage': [
        {
          title: '项目管理',
          collapsable: false,
          children: [
            {
              title: '需求项',
              path: '/projectManage/demand',
            },
            {
              title: '版本任务',
              path: '/projectManage/task'
            }
          ]
        }
      ],
      '/operationManual': [
        {
          title: '使用手册',
          collapsable: false,
          children: [
            {
              path: '/operationManual/home',
              title: '简介'
            }
          ]
        }
      ]
    }
  },
  chainWebpack: (config, isServer) => {
    config.resolveLoader
      .modules
      .add(path.resolve(__dirname, './node_modules'))
  }
}