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
  @import '~vux/src/styles/1px.less';

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  a {
    text-decoration: none;
  }

  .clearfix {
    *zoom: 1;
  }
  .clearfix:before,

  .clearfix:after {
    display: table;
    line-height: 0;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
</style>
