<template>
  <div id="#register">
    <div class="login-wrap">
      <div class="login-logo">
        <img src="../../assets/logo.png" alt="哈哈哈哈" class="logo">
        <h1>AoBuy</h1>
      </div>
      <div class="login-from">
        <form id="login-form" method="post" @submit.prevent="submit">
          <div class="item">
            <label for="user" :class="{ labelFocus: user.focus }">用户名</label>
            <input :class="{ inputFocus: user.focus }"
                   v-model="user.val"
                   @blur="[checkUser,blur('user')]"
                   @focus='focus("user")'
                   id="user" name="user"
                   type="text">
          </div>
          <div class="item">
            <label for="password"
                   :class="{ labelFocus: password.focus }">密码</label>
            <input id="password" :class="{ inputFocus: password.focus }"
                   v-model="password.val"
                   @blur="[checkUser,blur('password')]"
                   @focus='focus("password")'
                   name="password"
                   type="password">
          </div>
          <div class="item">
            <label for="mail"
                   :class="{ labelFocus: mail.focus }">邮箱</label>
            <input id="mail" :class="{ inputFocus: mail.focus }"
                   v-model="mail.val"
                   @blur="[checkUser,blur('mail')]"
                   @focus='focus("mail")'
                   name="mail"
                   type="email">
          </div>
          <button id="login-btn" class="login-btn" type="submit">立即注册</button>
        </form>
        <router-link to="/" class="user-reg">返回</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  //  import {mapGetters} from 'vuex'
  //  import { debounce } from 'vux'
  export default {
    name: 'register',
    data () {
      return {
        user: {
          val: null,
          error: false,
          focus: false
        },
        password: {
          val: null,
          error: false,
          focus: false
        },
        mail: {
          val: null,
          error: false,
          focus: false
        }
      }
    },
    computed: {},
    methods: {
      submit: function () {
        let data = {
          user: this.user.val,
          password: this.password.val,
          email: this.mail.val
        }
        console.log(data)
        this.$store.dispatch('UserReg', data)
      },
      checkUser: function () {
        console.log(this.user.val)
      },
      focus: function ($select) {
        this[$select].focus = true
      },
      blur: function ($select) {
        this[$select].focus = this[$select].val
      }
    }
  }
</script>
