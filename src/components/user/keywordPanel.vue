<template>
  <div class="box">
    <div v-if="listLength == 0">没有关键词</div>
    <swipeout>
      <swipeout-item v-for="item in list" @on-open="handleEvents('on-open')">
        <div slot="right-menu">
          <template v-if="item.status === 1">
            <swipeout-button @click.native="changeBtn(item.key_name, 0)" background-color="#f5cf60">停止</swipeout-button>
          </template>
          <template v-else>
            <swipeout-button @click.native="changeBtn(item.key_name, 1)" background-color="#5fb4e0">开启</swipeout-button>
          </template>
          <swipeout-button @click.native="deleteBtn(item.key_name)" type="warn">删除</swipeout-button>
        </div>
        <div slot="content" class="k-panel clearfix">
          <div class="k-panel-left">
            <span class="key-name">{{ item.key_name }}</span>
            <span class="last-hit">上次命中：{{ time(item.last_hit) }}</span>
          </div>
          <div class="k-panel-right">
            <span class="hit">命中：{{ item.hit_counts }}</span>
            <template v-if="item.status === 1">
              <span class="status">状态：已开启</span>
            </template>
            <template v-else>
              <span class="status">状态：已停止</span>
            </template>
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
    methods: {
      time: function (val) {
        if (!val) return '无'
        return this.$moment('unix', val, 'YYYY-MM-DD hh:mm')
      },
      deleteBtn (type) {
        this.$http.get('/apis/api/delete_key?keyword=' + type)
          .then((data) => {
            this.$store.dispatch('UserKeywordFetch')
          })
      },
      changeBtn (val, type) {
        this.$http.post('/apis/api/change_status', {
          keyword: val,
          type: type
        })
          .then((data) => {
            if (data.body.status === 0) {
              this.$store.dispatch('UserKeywordFetch')
            }
          })
      },
      handleEvents (type) {
        console.log('event: ', type)
      }
    },
    computed: {
      listLength: function () {
        return this.list.length
      }
    }
  }

</script>


<style scoped>
  .key-name {
    font-size: 22px;
  }

  .hit, .last-hit {
    color: #bbb;
  }

  .last-hit {
    margin-top: 10px;
  }

  .status {
    margin-top: 10px;
  }

  .k-panel {
    text-align: left;
    padding: 15px;
    border-bottom: 5px solid #fbf9fe;
  }

  .k-panel span {
    display: block;
  }

  .k-panel-left {
    float: left;
  }

  .k-panel-right {
    float: right;
  }

  .vux-swipeout-button-box button {
    border-bottom: 5px solid #fbf9fe;
  }

  .vux-swipeout-content {
    padding: 0 15px;
  }
</style>
