<template>
  <div id="search">
    <search :auto-scroll-to-top="true" top="46px" @on-submit="searchGet" v-model="value"></search>
    <scroller lock-x ref="scroller" height="-107">
      <search-panel :list="list"></search-panel>
    </scroller>
  </div>
</template>

<script>
  import SearchPanel from './searchPanel'
  import {Search, Scroller} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    name: 'searchIndex',
    data () {
      return {
        value: ''
      }
    },
    components: {
      Scroller,
      Search,
      SearchPanel
    },
    methods: {
      searchGet () {
        if (!this.value) {
          this.$vux.toast.show({
            text: '不能为空',
            type: 'cancel'
          })
        } else {
          this.$store.dispatch('AC_GetSearchData', this.value)
          this.$nextTick(() => {
            this.$refs.scroller.reset({
              top: 0
            })
          })
        }
      }
    },
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


<style scoped>
  i {
    font-style: normal;
  }

  .box {

  }

  .goods-card {
    display: flex;
    padding: 15px;
    border-bottom: 3px solid #e4e1e1;
  }

  .goods-channel {
    position: absolute;
    display: inline-block;
    bottom: 4px;
    left: 0;
    padding: 3px;
    width: 94px;
    background: #ccc;
    opacity: .85;
  }

  .goods-head {
    position: relative;
    margin-right: 1rem;
  }

  .goods-head img {
    width: 100px;
    height: 100px;
  }

  .goods-info {
    text-align: left;
  }

  .goods-txt {
    line-height: 25px;
    height: 50px;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .goods-price {
    display: inline-block;
    height: 15px;
    width: 120px;
    text-align: left;
    padding: 3px;
    color: #ff685b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
