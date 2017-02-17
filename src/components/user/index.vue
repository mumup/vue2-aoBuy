<template>
  <div id="user">
    <XHeader :title="Title"></XHeader>
    <router-view></router-view>
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
  import {mapGetters} from 'vuex'
  import {XHeader, Tabbar, TabbarItem} from 'vux'
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
      ...mapGetters({
        Title: 'logo'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui_tabbar_item{
  text-decoration: none;
}
</style>
