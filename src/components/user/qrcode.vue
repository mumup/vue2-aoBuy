<template>
  <div id="qrcode">
    <v-title>R&F门禁</v-title>
    <div class="code-box">
      <qrcode :value="value" :size="160"></qrcode>
      <div class="exp">
        <countdown slot="value" v-model="time" :start="start" @on-finish="finish"></countdown>
        秒后更新
      </div>
    </div>
    <div class="button-box">
      <x-button type="default" @click.native="getCode">刷新</x-button>
    </div>
  </div>
</template>

<script>
  import vTitle from '../../components/public/title.vue'
  import {Qrcode, XButton, Countdown} from 'vux'
  export default {
    name: 'qqcode',
    data () {
      return {
        value: '',
        expdate: '',
        time: 60,
        start: false
      }
    },
    components: {
      Qrcode,
      vTitle,
      XButton,
      Countdown
    },
    computed: {},
    created () {
      this.getCode()
    },
    methods: {
      finish () {
        this.start = false
        this.getCode()
      },
      getCode () {
        this.$vux.loading.show({
          text: '加载中'
        })
        this.$http.get('https://api.pmumu.com/v1/yt/qrcode')
          .then(d => {
            this.$vux.loading.hide()
            this.value = d.body.data.content
            this.time = 60
            this.start = true
          })
      }
    }
  }
</script>

<style>
  .code-box {
    margin-top: 20%;
  }

  .button-box {
    padding: 0 15px;
  }

  .exp {
    display: block;
    padding: 15px;
  }
</style>
