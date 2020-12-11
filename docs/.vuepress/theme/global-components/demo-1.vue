<template>
  <el-container class="layout-container">
    <el-main class="layout-main">
      <el-card class="box-card">
        这里将作为首页展示所有的文档分类---前端效果待完善
      </el-card>
    </el-main>
  </el-container>
</template>
<script>
export default {
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
  .theme-container .home{
    padding: 3.6rem 0 0;
    max-width: 100%;
  }
  .layout-container{
    background: #f0f2f5;
    height: calc(100vh - 50px);
    .layout-menu{
      border-right: 1px solid #e8e8e8;
    }
  }
</style>
