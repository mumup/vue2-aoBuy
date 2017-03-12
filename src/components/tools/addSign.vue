<template>
  <div id="addKeyword">
    <group title="PC端签到,并无抽奖(APP签到正在研究中)">
      <x-input title='账号' :max="20" v-model.trim="user"></x-input>
    </group>
    <group title="">
      <x-input title='密码' :max="20" v-model.trim="password"></x-input>
    </group>
    <box gap="10px 10px">
      <x-button type="primary" @click.native="submit">提交</x-button>
    </box>
  </div>
</template>

<script>
  import {XInput, Group, XButton, Box, XSwitch} from 'vux'
  //  import {mapGetters} from 'vuex'
  export default {
    name: 'addKeyword',
    data () {
      return {
        user: '',
        password: '',
        Switch: {
          mail: {
            disabled: true
          }
        }
      }
    },
    components: {
      XInput,
      XButton,
      Group,
      Box,
      XSwitch
    },
    computed: {},
    methods: {
      submit () {
        if (this.user === '' || this.password === '') {
          this.$store.dispatch('showToast', {
            isShow: true,
            text: '请填写完整',
            type: 'warn'
          })
          return false
        }
        this.$store.dispatch('addSignAccount', {
          user: this.user,
          password: this.password
        })
          .then(() => {
            this.user = ''
            this.password = ''
          })
      }
    }
  }
</script>

<style>

</style>
