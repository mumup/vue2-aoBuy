<template>
  <div id="#login">
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
          <button id="login-btn" :class="{ error : isValid }" class="login-btn" type="submit">{{btn}}</button>
          <div>
            <a href="#" class="user-reg">立即注册</a>
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
<style scoped>
  .error {
    position: relative;
    background-color: #C21F39 !important;
  }

  .login-wrap {
    width: 300px;
    border-radius: 5px;
    margin: 10% auto 0 auto;
    padding: 20px;
  }

  .logo {
    width: 50px;
    height: 50px;
  }

  .item {
    position: relative;
    margin-bottom: 15px;
  }

  .item input {
    border: 0;
    background: #fbf9fe;
    width: 220px;
    height: 35px;
    outline: none;
    border-bottom: 1px solid #42b983;
  }

  .item .inputFocus {
    border-bottom: 1px solid #5fcdf0;
  }

  .item label {
    position: absolute;
    transition: all linear .2s;
    color: #999;
    left: 55px;
    top: 10px;
  }

  .item .labelFocus {
    left: 42px;
    top: -9px;
  }

  .login-btn {
    border: none;
    display: block;
    width: 150px;
    height: 40px;
    line-height: 40px;
    background-color: #5fcdf0;
    color: #fff;
    border-radius: 2px;
    font-size: 14px;
    cursor: pointer;
    margin: 30px auto 20px;
    transition: all linear .2s;
  }

  .login-btn:hover {
    background-color: #0074D9;
  }

  .user-reg {
    transition: all linear .2s;
    font-size: 12px;
    text-decoration: none;
    color: #999;
  }

  .user-reg:hover {
    color: #000;
  }

</style>
