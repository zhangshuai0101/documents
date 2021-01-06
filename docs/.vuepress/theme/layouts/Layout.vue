<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    import('./HomeLayout').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
<style lang="scss">
</style>
