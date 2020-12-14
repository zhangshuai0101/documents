# 介绍

该平台用于文档管理，同时支持在线编辑文档内容等。以下将对该项目做简要介绍及如何快速使用。

## 目录结构
```
├── docs
│   ├── .vuepress 
│   ├── ├── menuConfig （首页展示的数据）
│   │   ├── theme 主题（默认主题/自定义主题）
│   │   │   └── components 公共组件
│   │   │   └── global-components 全局注册的组件
│   │   │   └── layouts 公共布局组件
│   │   │   └── styles 修改全局公共样式
│   │   │──  └──index.styl
│   │   ├── public 静态资源
│   │   ├── config.js 公共配置（后续用于配置nav和sider）
│   │   └── enhanceApp.js
│   │
│   ├── README.md
│   ├── operationManual 根据业务需求可以自定义文件夹，也可将需要展示的markdown文件放在已有文件夹目录下
│   │   └── README.md
└── package.json

```

## 快速使用

<!-- #### 该平台是一个极简静态网站生成器，所以只需要按照使用规范进行配置即可。<br/><br/> -->

### 新用户接入 
  + 用户只需要在docs目录下创建自己的文档目录即可，相关markdown文件放到该目录下即可。
  ```
    ├── docs
    │   ├── README.md
    ├── ├── operationManual
    └── └── package.json
  ```
  <font color='red'>注意：文件夹/文件名称以英文命名</font>

### 配置导航栏
  + 创建好相应的目录及文件后，需要进行导航栏菜单及侧边栏配置，配置文件config.js如下

  ```
  ├── docs
  │   ├── .vuepress 
  │   ├── ├── menuConfig
  │   │   ├── theme 主题
  └── └── └── config.js (用于配置nav和sider)

  ```
  + 以项目管理为例，在config文件下，可以通过 themeConfig.nav 增加一些导航栏链接

  ``` js
  // nav 可选，根据需求决定是否配置
  module.exports = {
    themeConfig: {
      nav: [ 
        { text: '项目管理', link: '/projectManage' } //其中 text: 菜单名称 link: 跳转地址 
      ]
    }
  }
  ```
  + 当你提供了一个 items 数组而不是一个单一的 link 时，它将显示为一个下拉列表 ：

  ```js
  module.exports = {
    themeConfig: {
      nav: [
        {
          text: '项目管理',
          items: [
            { text: '需求项', link: '/projectManage/demand/' },
            { text: '版本任务', link: '/projectManage/task/' }
          ]
        }
      ]
    }
  }
  ```
### 配置侧边栏

  + 默认情况下，侧边栏会自动地显示由当前页面的标题组成的链接，并按照页面本身的结构进行嵌套，默认的深度是 2，它将同时提取 h2 和 h3 标题。

  ```js
  // 严格遵守规则进行配置
  module.exports = { 
    themeConfig: {
      sidebar: {
        '/projectManage': [        // 当路由匹配到该地址前缀时，侧边栏只展示当前文档分类下的目录，否则会显示所有的文档目录
          {
            title: '项目管理',      // 侧边栏菜单名称
            collapsable: false,   // collapsable: false 让分组是展开的
            children: [
              {
                title: '需求项',
                path: '/projectManage/demand', //侧边栏跳转地址
              },
              {
                title: '版本任务',
                path: '/projectManage/task'
              }
            ]
          }
        ]
      }
    }
  }
  ```
  <font color='red'>注意：sidebar path是根据文档目录层级结构来生成的，对应的为目录名称及文件名称。非自定义配置</font>

  ### 首页数据配置
  
    + 将以上文件文件配置完成后，便可访问该文档。同时，为了更好的使用体验，需要将 sidebar 数据稍微改造，加入menuConfig/index中
    ```
    ├── docs
    │   ├── .vuepress 
    │   ├── ├── menuConfig
    │   ├── ├── └──index.js (用于配置首页展示数据)
    └── └── └── config.js (用于配置nav和sider)

    ```
    用户也可在该目录下自定义文件，对应文档目录名称，具体代码配置如下

    ```js
    module.exports = {
      documentsData : [
        {
          title: '项目管理',  //首页左侧菜单数据
          icon: '',
          children: [ //右侧详情数据
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

    ```