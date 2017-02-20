<template>
  <div id="search">
    <scroller lock-x ref="scroller" height="-107">
        <div class="box">
          <div v-for="item in list" class="goods-card vux-1px-b">
            <div class="goods-head clearfix">
              <i class="goods-channel">{{ item.channel }}</i>
              <i class="goods-price">{{ item.time }}</i>
            </div>
            <span class="goods-info">{{ item.goods }}</span>
          </div>
        </div>
        <!--<p v-for="item in list">-->
          <!--{{ item.goods }}-->
        <!--</p>-->
    </scroller>
  </div>
</template>

<script>
  import {Search, Scroller} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    name: 'searchIndex',
    data () {
      return {}
    },
    components: {
      Scroller,
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


<style scoped>
 i {font-style: normal;}

.goods-card{
  padding: 15px;
}
.goods-channel {
  float: left;
  display: inline-block;
  padding: 3px;
  width: 100px;
  background: #ccc;
}

 .goods-head {
   margin-bottom: 15px;
 }

 .goods-info {

 }
.goods-price {
  float: right;
  display: inline-block;
  padding: 3px;
  background: #89ce8c;
  color: #fff;
  width: 100px;
  height: 15px;
  white-space:normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
