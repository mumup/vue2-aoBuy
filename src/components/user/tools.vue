<template>
  <div id="tools">
    tools
  </div>
</template>

<script>
  export default {
    name: 'tools',
    data () {
      return {}
    },
    components: {

    },
    methods: {
      post: function () {
        this.$store.dispatch('UserLogout')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
