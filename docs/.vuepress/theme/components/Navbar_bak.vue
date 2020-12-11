<template>
  <el-header class="layout-header navbar" height="50px">
    <router-link to="/" title="文档库">文档库</router-link>
    <SearchBox class="header-search"/>
  </el-header>
</template>
<script>
import SearchBox from '@SearchBox'
export default {
  components: { SearchBox },
  data() {
    return {

    }
  },
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
  .layout-header{
    line-height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    display: flex;
    .header-search{
      margin: 0 auto;
    }
  }
</style>
