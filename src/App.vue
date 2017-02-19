<template>
  <div id="app">
    <router-view></router-view>
    <Loading :value="isLoading"></Loading>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Loading} from 'vux'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      Loading
    },
    computed: {
      ...mapGetters({
        isLoading: 'isLoading'
      })
    }
  }
</script>

<style lang="less">
  @import "assets/css/normalize.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  a {
    text-decoration: none;
  }
</style>
