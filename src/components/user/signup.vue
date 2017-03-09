<template>
  <div id="#signup">

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        isValid: false,
        btn: '登陆',
        user: {
          val: null,
          error: false,
          focus: false
        },
        password: {
          val: null,
          error: false,
          focus: false
        }
      }
    },
    computed: {
      ...mapGetters({
        isLogin: 'isLogin'
      })
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "~assets/css/login.scss";
</style>
