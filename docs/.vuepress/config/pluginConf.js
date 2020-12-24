const titleMap = require('./titleMap');
const vuepressSide = 
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
            title: "测试首页",
            
          }
        ]
      }
    }
  ],
  ["@vuepress/plugin-back-to-top", true]
];