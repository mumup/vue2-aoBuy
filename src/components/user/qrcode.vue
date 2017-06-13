<template>
  <div>
    <v-title>R&F门禁</v-title>
    <div class="code-box">
      <qrcode :value="value"></qrcode>
      <span class="exp">过期时间：{{expdate}}</span>
    </div>
    <div class="button-box">
      <x-button type="default" @click.native="getCode">刷新</x-button>
    </div>
  </div>
</template>

<script>
  import vTitle from '../../components/public/title.vue'
  import {Qrcode, XButton} from 'vux'
  export default {
    name: 'qqcode',
    data () {
      return {
        value: '',
        expdate: ''
      }
    },
    components: {
      Qrcode,
      vTitle,
      XButton
    },
    computed: {},
    created () {
      this.getCode()
    },
    methods: {
      getCode () {
        this.$http.get('http://localhost:5000/v1/yt/qrcode')
          .then(d => {
            this.value = d.body.data.content
            this.expdate = d.body.data.expireTime
          })
      }
    }
  }
</script>

<style>
  .code-box {
    margin-top: 40%;
  }

  .button-box {
    margin-top: 30px;
    padding: 0 15px;
  }

  .exp {
    display: block;
    padding: 15px;
  }
</style>
