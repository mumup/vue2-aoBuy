<template>
  <Search top="47px" placeholder="在此输入关键词" cancelText="取消"></Search>
</template>

<script>
  import {Search} from 'vux'
  export default {
    name: 'searchIndex',
    data () {
      return {}
    },
    components: {
      Search
    },
    methods: {},
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      // 显示
//      this.$store.commit('UPDATE_LOADING', true)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
