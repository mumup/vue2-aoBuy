<template>
  <div id="#login">
    <div class="login-wrap">
      <div class="login-logo">
        <img src="../../assets/images/logo.png" alt="哈哈哈哈" class="logo">
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
          <button id="login-btn" :class="{ error : isValid }" class="login-btn" type="submit">{{btn}}</button>
          <div>
            <router-link to="register" class="user-reg">立即注册</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: 'login',
    data () {
      return {
        isValid: false,
        btn: '登陆',
        user: {
          val: null,
          error: false,
          focus: false
        },
        password: {
          val: null,
          error: false,
          focus: false
        }
      }
    },
    computed: {
      ...mapGetters({
        isLogin: 'isLogin'
      })
    },
    methods: {
      checkUser: function () {
        console.log(this.user.val)
      },
      focus: function ($select) {
        this[$select].focus = true
      },
      blur: function ($select) {
        this[$select].focus = this[$select].val
      },
      submit: function () {
        let user = {
          user: this.user.val,
          password: this.password.val
        }
        this.$store.dispatch('UserLogin', user)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
