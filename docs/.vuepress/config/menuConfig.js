//首页文档分类下需要展示的内容以及左侧菜单栏显示的内容
export default {
  documentsData: [
    {
      title: '项目管理',
      icon: '',
      children: [
        {
          title: 'projectManage',
          path: '/项目管理/demand',
        },
        {
          title: '版本任务',
          path: '/projectManage/task'
        },
        {
          title: '工作项',
          path: '/projectManage/task'
        },
        {
          title: '项目成员',
          path: '/projectManage/task'
        }
      ]
    },
    {
      title: 'ICDP',
      icon: '',
      children: [
        {
          title: '流水线',
          path: '/projectManage/demand',
        },
        {
          title: 'CI/CD',
          path: '/projectManage/task'
        }
      ]
    },
    {
      title: 'ITM',
      icon: '',
      children: [
        {
          title: '流水线',
          path: '/projectManage/demand',
        },
        {
          title: 'CI/CD',
          path: '/projectManage/task'
        }
      ]
    },
    {
      title: '资产管理',
      icon: '',
      children: [
        {
          title: '业务功能',
          path: '/projectManage/demand',
        },
        {
          title: '知识库',
          path: '/projectManage/task'
        }
      ]
    }
  ]
}