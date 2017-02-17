<template>
  <div id="tools">
    用户中心
  </div>
</template>

<script>
  export default {
    name: 'userCenter',
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
