<template>
  <div>
    <span @click="pppp">11111111111111111</span>
    <span @click="post">22222222222222222</span>
  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {}
    },
    methods: {
      post: function () {
        this.$store.dispatch('UserLogout')
      },
      pppp: function () {
        let user = {
          user: 'admin',
          password: 123
        }
        this.$store.dispatch('UserLogin', user)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
