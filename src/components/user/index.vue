<template>
  <div id="user">
    <XHeader :title="headTitle" :leftOptions="titleLeft"></XHeader>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Tabbar>
      <TabbarItem link="/user">
        <div slot="icon">111</div>
        <span slot="label">首页</span>
      </TabbarItem>
      <TabbarItem link="/tools">
        <div slot="icon">111</div>
        <span slot="label">工具</span>
      </TabbarItem>
      <TabbarItem link="/userCenter">
        <div slot="icon">111</div>
        <span slot="label">用户中心</span>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import {XHeader, Tabbar, TabbarItem} from 'vux'
  //  import { mapGetters } from 'vuex'
  export default {
    name: 'userIndex',
    data () {
      return {}
    },
    components: {
      XHeader,
      Tabbar,
      TabbarItem
    },
    methods: {
      post: function () {
        this.$store.dispatch('UserLogout')
      }
    },
    computed: {
//      ...mapGetters({
//        leftOptions: 'leftOptions'
//      }),
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
<style scoped>
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
