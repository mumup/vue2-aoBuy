<template>
  <div id="app">
    <router-view></router-view>
    <Loading :value="isLoading"></Loading>
    <toast :value="isToast.isShow" :type="isToast.type" :text="isToast.text"></toast>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {Loading, Toast} from 'vux'
  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      Loading,
      Toast
    },
    computed: {
      ...mapGetters({
        isLoading: 'isLoading',
        isToast: 'isToast'
      })
    }
  }
</script>

<style lang="less">
  @import "assets/css/normalize.css";
  @import '~vux/src/styles/1px.less';
  @import "//at.alicdn.com/t/font_g9revw5a2tucv7vi.css";
  @import "~assets/css/login.scss";
  @import "style/main.scss";

  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    background: #fff;
    max-width:750px;
    margin: 0 auto;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
    overflow: auto;
    background: #fbf9fe;
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.3);
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
