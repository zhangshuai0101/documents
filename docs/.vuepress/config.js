const path = require("path");
const menuData = require("./menuConfig");

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
    nav: [
      { text: '首页', link: '/',id: 'home' },
      // { 
      //   text: '项目管理',id: 'project',
      //   items: [
      //     { text: '需求项', link: '/projectManage/demand/' },
      //     { text: '版本管理', link: '/projectManage/project/' }
      //   ]
      // },
      // { 
      //   text: '更多文档',id: 'more',
      //   items: [
      //     { text: 'icdp', link: '/projectManage/demand/' },
      //     { text: 'itm', link: '/projectManage/project/' }
      //   ]
      // },
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
              path: '/projectManage/project'
            }
          ]
        }
      ],
      '/operationManual': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            {
              path: '/operationManual/home',
              title: '如何使用'
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

function getDocumentMenu(activeUrl) {
  let siderData = [{}];
  menuData.documentsMenu.map(item => {
    if(item.activeUrl == activeUrl){
      siderData[0].title = item.title;
      siderData[0].collapsable = false;
      siderData[0].children = item.children;
    }
  });
  return siderData
}