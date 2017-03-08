<template>
  <div id="userCenter">
    <group title="用户信息">
      <cell title="用户名" :value="user"></cell>
      <cell title="邮箱" value="pmumuv5@163.com"></cell>
      <cell title="修改密码" :link="{path:'/demo'}"></cell>
    </group>
    <group title="关于">
      <cell title="打赏" :link="{path:'/demo'}"></cell>
      <cell title="反馈BUG"></cell>
      <cell title="关于作者" :link="{path:'/demo'}"></cell>
    </group>
    <box gap="10px 10px">
      <x-button type="warn" @click.native="logout">退出</x-button>
    </box>
  </div>
</template>

<script>
  import {Cell, Group, XButton, Box} from 'vux'
  import { mapGetters } from 'vuex'
  export default {
    name: 'userCenter',
    data () {
      return {}
    },
    computed: {
      ...mapGetters({
        userInfo: 'userInfo'
      })
    },
    components: {
      Cell,
      Group,
      XButton,
      Box
    },
    methods: {
      logout: function () {
        this.$store.dispatch('UserLogout')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


  .weui-cells__title, .weui-cell {
    text-align: left;
  }

  .weui-cell {
    padding: 5px 15px!important;
  }

  .weui-cell p {
    margin: 0;
    padding: 10px 0;
  }
</style>
