const titleMap = require('./titleMap');
module.exports = {
  "vuepress-plugin-auto-sidebar": {
    titleMode: "uppercase",
    sidebarDepth: 2,
    titleMap: titleMap
  },
  "@vuepress/plugin-back-to-top": true
};