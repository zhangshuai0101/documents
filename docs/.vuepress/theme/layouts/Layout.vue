<template>
  <ParentLayout>
    <!-- <Navbar /> -->
    <!-- <template #sidebar-top>
      <BackHome />
    </template> -->
    <component :is="layout"/>
  </ParentLayout>
</template>
<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
// import Navbar from '@theme/components/Navbar'
import BackHome from '@theme/components/BackHome'
export default {
  components: { ParentLayout, BackHome },
  data() {
    return {

    }
  },
  mounted() {
    console.log(this)
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>
<style lang="scss">
</style>
