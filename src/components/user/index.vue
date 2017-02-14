<template>
  <div>
    <XHeader title="AoBuy"></XHeader>
  </div>
</template>

<script>
  import {XHeader} from 'vux'
  export default {
    name: 'user',
    data () {
      return {
        leftOptions: {
          showBack: false
        }
      }
    },
    components: {
      XHeader
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
