const path = require("path");
const pluginConf = require('./config/pluginConf.js');

module.exports = {
  title: '文档库', // 设置网站标题
  dest: './dist', // 设置输出目录
  base: '/', // 设置站点根路径
  plugins: pluginConf,
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
    ]
  },
  chainWebpack: (config, isServer) => {
    config.resolveLoader
      .modules
      .add(path.resolve(__dirname, './node_modules'))
  }
}