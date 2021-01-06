const titleMap = require('./titleMap');
module.exports = [
  [
    require('../lib/index.js'),
    {
      titleMode: "uppercase",
      sidebarDepth: 2,
      titleMap: titleMap,
      siderbars: {
        "/Devops/ICDP/": [
          {
            path: '/Devops/ICDP/',
            title: "首页",
            collapsable: false,
            children: [
              {
                path: '/Devops/ICDP/demo/demo',
                title: "平台介绍",
                collapsable: false,
                children: [
                  {
                    // path: '/Devops/ICDP/demo/demo1',
                    title: "demo1",
                    collapsable: false,
                    children: [
                      {
                        path: '/Devops/ICDP/demo/demo2',
                        title: "demo2",
                        collapsable: false,
                        children: [
                          {
                            path: '/Devops/ICDP/demo/demo3',
                            title: "demo3",
                            collapsable: false
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            path: '/Devops/ICDP/pipeline/demo',
            title: "测试流水线",
          },
          {
            path: '/Devops/ICDP/prod/demo',
            title: "测试投产",
          },
        ]
      }
    }
  ],
  ["@vuepress/plugin-back-to-top", true]
];