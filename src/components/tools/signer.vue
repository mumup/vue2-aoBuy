<template>
  <div id="signer">
    <div class="box">
      <div v-if="listLength == 0" class="empty">
        <div class="empty-pic">
          <img src="~assets/images/empty.png" alt="">
        </div>
        <p>empty~</p>
        <router-link to="/tools/add/sign" class="add-now">立即添加~</router-link>
      </div>
      <div class="signer-tips" v-if="listLength != 0">温馨提示：程序会在每天10.24签到</div>
      <swipeout>
        <swipeout-item v-for="(item, index) in signerList">
          <div slot="right-menu">
            <swipeout-button @click.native="deleteBtn(item.user)" type="warn">
              删除
            </swipeout-button>
          </div>
          <div slot="content" class="signer-wrap clearfix">
            <div class="signer-box">
                <span class="flex-item">
                  大妈账号：{{item.user}}
                </span>
            </div>
            <div class="signer-box">
                <span class="flex-item">
                  连续签到：{{item.checkin_num || '未知'}}天
                </span>
            </div>
            <div class="signer-box">
              <span class="flex-item">
                  上次签到：{{time(item.last_sign)}}
                </span>
            </div>
          </div>
        </swipeout-item>
      </swipeout>
    </div>
  </div>
</template>

<script>
  import {Swipeout, SwipeoutItem, SwipeoutButton, XButton} from 'vux'
  import {mapGetters} from 'vuex'
  export default {
    name: 'tools',
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
      deleteBtn: function (ac) {
        this.$store.dispatch('deleteSign', {account: ac})
      },
      time: function (val) {
        if (!val) return '无'
        return this.$moment('unix', val, 'MM-DD HH:mm')
      }
    },
    computed: {
      ...mapGetters({
        signerList: 'signerList'
      }),
      listLength: function () {
        return this.signerList.length
      }
    },
    mounted: function () {
      this.$store.dispatch('getSignList')
    }
  }
</script>


<style>
  .add-now {
    font-size: 18px;
    color: #9d9d9d;
  }

  .signer-wrap {
    padding: 10px 15px;
  }

  .flex-item {
    padding: 8px;
    flex: 1;
  }

  .signer-box {
    text-align: left;
    display: flex;
  }

  .signer-tips {
    background: #e4e4e4;
    padding: 10px 10px;
  }
</style>

