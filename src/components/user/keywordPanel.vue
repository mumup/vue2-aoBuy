<template>
  <div class="box">
    <swipeout>
      <swipeout-item v-for="item in list">
        <div slot="right-menu">
          <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="160">删除</swipeout-button>
        </div>
        <div slot="content" class="k-panel clearfix">
          <div class="k-panel-left">
            <span class="key-name">{{ item.key_name }}</span> <br>
            <template v-if="item.status === 1">
              <span>状态：已开启</span>
            </template>
            <template v-else>
              <span>状态：已关闭</span>
            </template>
          </div>
          <div class="k-panel-right">
            <span class="hit">命中：{{ item.hit_counts }}</span> <br>
            <span class="last-hit">上次命中时间：{{ item.last_hit || '无' }}</span>
          </div>
        </div>
      </swipeout-item>
    </swipeout>
  </div>
</template>

<script>
  import {Swipeout, SwipeoutItem, SwipeoutButton, XButton} from 'vux'
  export default {
    name: 'keywordPanel',
    props: {
      list: Array
    },
    data () {
      return {}
    },
    components: {
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      XButton
    },
    methods: {},
    computed: {}
  }
</script>


<style scoped>
  .key-name {
    font-size: 22px;
  }

  .hit, .last-hit {
    color: #bbb;
  }

  .k-panel {
    text-align: left;
    padding: 15px;
    border-bottom: 5px solid #fbf9fe;
  }

  .k-panel-left {
    float: left;
  }

  .k-panel-right {
    float: right;
  }

  /*.vux-swipeout-button-warn {*/
    /*border-bottom: 3px solid #ccc;*/
  /*}*/

  .vux-swipeout-content {
    padding: 0 15px;
  }
</style>
