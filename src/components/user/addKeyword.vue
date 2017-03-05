<template>
  <div id="addKeyword">
    <group title="请输入关键词,最长为10个中文">
      <x-input title='==》' :max="10" v-model.trim="value"></x-input>
    </group>
    <group title="提醒方式">
      <x-switch title="邮件提醒" :value="true" :disabled="Switch.mail.disabled"></x-switch>
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
        value: '',
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
        if (this.value === '') {
          this.$store.dispatch('showToast', {
            isShow: true,
            text: '不能为空',
            type: 'warn'
          })
          return false
        }
        this.$store.dispatch('UserAddKeyword', this.value)
          .then(() => {
            this.value = ''
          })
      }
    }
  }
</script>

<style>

</style>
