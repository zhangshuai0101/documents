<template>
  <!-- <el-container>  -->
    
    <!-- <el-header class="layout-header" height="50px">
      <router-link to="/" title="文档库">文档库</router-link>
      <SearchBox class="header-search"/>
    </el-header> -->
    <!-- <el-container class="layout-container">
      <el-aside class="layout-menu" width="240px">
        
      </el-aside>
      <el-main class="layout-main">
        <el-card class="box-card">
          <Content />
        </el-card>
      </el-main>
    </el-container>
  </el-container> -->
  <ParentLayout>
    <div class="container">
      <header>
        <Content slot-key="header"/>
      </header>
      <main>
        <Content/>
      </main>
      <footer>
        <Content slot-key="footer"/>
      </footer>
    </div>
  </ParentLayout>
</template>
<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import SearchBox from '@SearchBox'
export default {
  components: { SearchBox, ParentLayout },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this)
  }
}
</script>
<style lang="scss">
  .layout-container{
    background: #f0f2f5;
    height: calc(100vh - 50px);
    .layout-menu{
      border-right: 1px solid #e8e8e8;
    }
  }
  .layout-header{
    line-height: 50px;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
    display: flex;
    .header-search{
      float: right;
      margin: 0 auto;
    }
  }
</style>
