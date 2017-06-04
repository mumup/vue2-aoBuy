<template>
  <div>
    <tab :line-width=1 v-model="index">
      <tab-item :selected="dfSel === item" v-for="(item, index) in tab" @click="dfSel = item" :key="index">{{item}}
      </tab-item>
    </tab>
    <swiper v-model="index" height="100px" :show-dots="false">
      <swiper-item v-for="(item, index) in list" :key="index">
        <div class="tab-swiper vux-center">{{item}} Container</div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import {Tab, TabItem, Swiper, SwiperItem} from 'vux'
  export default {
    name: 'smzdm',
    data () {
      return {
        index: 0,
        tab: ['优惠精选', '发现频道'],
        dfSel: '优惠精选',
        list: ['精选', '发现']
      }
    },
    components: {
      Tab,
      TabItem,
      Swiper,
      SwiperItem
    }
  }
</script>

<style>

</style>
