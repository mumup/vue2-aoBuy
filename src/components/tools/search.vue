<template>
  <div id="search">
    <search top="46px" @on-submit="searchGet" v-model="searchValue" position="absolute"></search>
    <div v-if="listLength == 0">
      <p class="no-box">嗨呀，空空如也</p>
    </div>
    <scroller lock-x height="-151" ref="scroller" :pulldown-config="pulldownConfig" :use-pulldown="usePulldown"
              v-model="status" @on-pulldown-loading="fetchData">
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
        scrollTop: 0,
        searchValue: '',
        usePulldown: true,
        status: {
          pulldownStatus: 'default'
        },
        pulldownConfig: {
          content: 'Pull Down To Refresh',
          height: 60,
          autoRefresh: false,
          downContent: '震惊!!继续下拉居然会↓',
          upContent: '居然会刷新↑',
          loadingContent: '[]~(￣▽￣)~*',
          clsPrefix: 'xs-plugin-pulldown-'
        }
      }
    },
    components: {
      Scroller,
      Search,
      SearchPanel
    },
    methods: {
      searchGet () {
        if (!this.searchValue) {
          this.$vux.toast.show({
            text: '不能为空',
            type: 'cancel'
          })
        } else {
          this.$store.dispatch('AC_GetSearchData', this.searchValue)
        }
      },
      fetchData () {
        this.$store.dispatch('AC_GetNewData')
          .then(() => {
            this.$refs.scroller.donePulldown()
          })
      }
    },
    computed: {
      ...mapGetters({
        list: 'list',
        listLength: 'listLength'
      })
    },
    mounted: function () {
      this.fetchData()
    },
    watch: {
      listLength (val) {
        if (val > 0) {
          this.$nextTick(() => {
            this.$refs.scroller.reset({
              top: 0
            })
          })
        }
      }
    }
  }
</script>


<style scoped>
  i {
    font-style: normal;
  }

  .no-box {
    font-size: 28px;
    padding-top: 30%;
  }

  #search {
    padding-top: 46px;
  }

  .vux-search-box {
    position: absolute !important;
    top: 46px;
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
