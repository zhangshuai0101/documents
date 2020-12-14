//首页文档分类下需要展示的内容以及左侧菜单栏显示的内容
module.exports = {
  documentsMenu : [
    {
      title: '项目管理',
      icon: '',
      activeUrl: '/projectManage',
      children: [
        {
          title: '项目需求项',
          path: '/projectManage/demand',
        },
        {
          title: '版本任务',
          path: '/projectManage/project'
        },
        {
          title: '工作项',
          path: '/projectManage/project'
        },
        {
          title: '项目成员',
          path: '/projectManage/project'
        }
      ]
    }
  ]
}