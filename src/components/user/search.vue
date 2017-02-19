<template>
  <div id="search">
    <Search top="47px" placeholder="在此输入关键词" cancelText="取消"></Search>
    <p v-for="item in list">
      {{ item.goods }}
    </p>
  </div>
</template>

<script>
  import {Search} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    name: 'searchIndex',
    data () {
      return {}
    },
    components: {
      Search
    },
    methods: {},
    computed: {
      ...mapGetters({
        list: 'list'
      })
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      // 显示
//      this.$store.commit('UPDATE_LOADING', true)
      this.$store.dispatch('AC_GetNewData')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
