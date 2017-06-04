<template>
  <div id="user" style="height: 100%">
    <XHeader slot="header" :title="headTitle" :leftOptions="titleLeft"
             style="width:100%;position:absolute;left:0;top:0;z-index:100;">
      <router-link slot="right" v-show="feedback" to="home/add/Keyword">添加</router-link>
    </XHeader>
    <view-box ref="viewBox">
      <transition :name="transitionName" mode="">
        <router-view class="router-view"></router-view>
      </transition>
    </view-box>
    <Tabbar slot="bottom">
      <TabbarItem link="/home">
        <div slot="icon" class="iconfont icon-zhuye" style="font-size: 22px;color: #888;"></div>
        <span slot="label">首页</span>
      </TabbarItem>
      <TabbarItem link="/tools">
        <div slot="icon" class="iconfont icon-gongju" style="font-size: 24px;color: #888;"></div>
        <span slot="label">工具</span>
      </TabbarItem>
      <TabbarItem link="/member">
        <div slot="icon" class="iconfont icon-yonghuzhongxin" style="font-size: 22px;color: #888;"></div>
        <span slot="label">用户中心</span>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem, ViewBox} from 'vux'
  //  import { mapGetters } from 'vuex'
  export default {
    name: 'layout',
    data () {
      return {
        transitionName: 'vux-pop-in',
        lastPath: ''
      }
    },
    components: {
      ViewBox,
      XHeader,
      Tabbar,
      TabbarItem
    },
    methods: {},
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
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'
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
    line-height: 0.8 !important;
  }

  .weui_tabbar_item {
    text-decoration: none;
  }
</style>
