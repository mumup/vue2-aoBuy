<template>
  <div id="#login">
    <div class="login-wrap">
      <div class="login-logo">
        <img @click="" src="#" alt="哈哈哈哈" class="logo">
        <h1>AoBuy</h1>
      </div>
      <div class="login-from">
        <form id="login-form">
          <div class="item">
            <label for="user" v-bind:class="{ labelFocus: user.focus }">用户名</label>
            <input v-bind:class="{ inputFocus: user.focus }"
                   v-model="user.val"
                   @blur="[checkUser,blur('user')]"
                   @focus='Focus("user")'
                   id="user" name="user"
                   type="text">
          </div>
          <div class="item">
            <label for="password"
                   v-bind:class="{ labelFocus: password.focus }">密码</label>
            <input id="password" v-bind:class="{ inputFocus: password.focus }"
                   v-model="password.val"
                   @blur="[checkUser,blur('password')]"
                   @focus='Focus("password")'
                   name="password"
                   type="password">
          </div>
          <button id="login-btn" v-bind:class="{ error : isValid }" class="login-btn" type="submit">{{btn}}</button>
          <div>
            <a href="" class="user-reg">立即注册</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
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
    methods: {
      checkUser: function () {
        console.log(this.user.val)
      },
      Focus: function ($select) {
        this[$select].focus = true
      },
      blur: function ($select) {
        this[$select].focus = this[$select].val
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error{
    position: relative;
    background-color: #C21F39 !important;
  }

  .login-wrap {
    width: 300px;
    border-radius: 5px;
    background: #fff;
    margin: 200px auto 0 auto;
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
