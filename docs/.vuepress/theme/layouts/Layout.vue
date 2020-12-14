<template>
  <ParentLayout>
    <component :is="layout"/>
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
