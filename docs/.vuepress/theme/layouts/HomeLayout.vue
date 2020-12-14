<template>
  <ParentLayout>
    <div class="container">
      <main>
        <Content/>
      </main>
    </div>
  </ParentLayout>
</template>
<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
export default {
  components: { ParentLayout },
  data() {
    return {

    }
  },
  mounted() {
    
  }
}
</script>
<style lang="scss" scoped>
  .layout-container{
    background: #fafafa;
    height: calc(100vh - 50px);
    .layout-menu{
      border-right: 1px solid #e8e8e8;
    }
  }
</style>
