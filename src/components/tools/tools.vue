<template>
  <div id="tools">
    <Panel header="工具列表" type="1" :list="list"></Panel>
  </div>
</template>

<script>
  import {Panel} from 'vux'
  export default {
    name: 'tools',
    data () {
      return {
        list: [{
          title: '搜索工具',
          src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          desc: '检查关键词，寻找最近优惠',
          url: '/search'
        },
          {title: '开启短信提醒', src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff', desc: '增加短信提醒，最快速度买买买'},
          {title: '大妈自动签到', src: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff', desc: '自动签到,升级杠杠的'}]
      }
    },
    components: {
      Panel
    },
    methods: {
      post: function () {
        this.$store.dispatch('UserLogout')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .weui-media-box__title, .weui-media-box__hd, .weui-media-box__desc {
    text-align: left;
  }
</style>
