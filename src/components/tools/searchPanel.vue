<template>
  <div class="box">
    <div v-for="item in list" class="goods-card">
      <div class="goods-head clearfix">
        <img :src="item.article_pic_url" alt="图">
        <i class="goods-channel">{{ item.channel }}</i>
      </div>
      <div class="goods-info">
        <p class="goods-txt">{{ item.goods }}</p>
        <span class="goods-price">{{ item.price }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'searchPanel',
    props: {
      list: Array
    },
    data () {
      return {}
    },
    methods: {},
    computed: {}
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
