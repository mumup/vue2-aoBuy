<template>
  <div id="user" style="height: 100%">
    <view-box ref="viewBox">
      <XHeader slot="header" :title="headTitle" :leftOptions="titleLeft"
               style="width:100%;position:absolute;left:0;top:0;z-index:100;">
        <router-link slot="right" v-show="feedback" to="addKeyword">添加</router-link>
      </XHeader>
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
      <Tabbar slot="bottom">
        <TabbarItem link="/home">
          <div slot="icon" class="iconfont icon-zhuye" style="font-size: 22px;color: #888;"></div>
          <span slot="label">首页</span>
        </TabbarItem>
        <TabbarItem link="/tools">
          <div slot="icon" class="iconfont icon-gongju" style="font-size: 24px;color: #888;"></div>
          <span slot="label">工具</span>
        </TabbarItem>
        <TabbarItem link="/userCenter">
          <div slot="icon" class="iconfont icon-yonghuzhongxin" style="font-size: 22px;color: #888;"></div>
          <span slot="label">用户中心</span>
        </TabbarItem>
      </Tabbar>
    </view-box>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem, ViewBox} from 'vux'
  //  import { mapGetters } from 'vuex'
  export default {
    name: 'userIndex',
    data () {
      return {}
    },
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem
    },
    methods: {
      feedbackClick () {
        alert('11111')
      }
    },
    computed: {
//      ...mapGetters({
//        leftOptions: 'leftOptions'
//      }),
      feedback () {
        return this.$route.name === 'home'
      },
      titleLeft () {
        return {
          showBack: !this.$route.meta.hideBack
        }
      },
      headTitle () {
        return this.$route.meta.title
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #vux_view_box_body {
    padding-top: 46px;
  }

  .weui-tabbar__label {
    line-height: 0.8!important;
  }

  .weui_tabbar_item {
    text-decoration: none;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>
