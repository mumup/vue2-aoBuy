<template>
  <div id="#login">
    <div class="login-wrap">
      <div class="login-logo">
        <img @click="" src="#" alt="哈哈哈哈" class="logo">
        <h1>11111</h1>
      </div>
      <div class="login-from">
        <form id="login-form">
          <div class="item">
            <label for="user">用户名</label>
            <input v-model="user" @blur="checkUser" id="user" name="user" type="text">
          </div>
          <div class="item">
            <label for="password">密码</label>
            <input id="password" name="password" type="text">
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
        msg: 'login',
        user: null
      }
    },
    watch: {
      // 如果 question 发生改变，这个函数就会运行
      question: function (userVal) {

      }
    },
    methods: {
      checkUser: function () {
        console.log(this.user)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-wrap {
    width: 300px;
    border-radius: 3px;
    background: #fff;
    margin: 0 auto;
    padding: 20px;
  }

  .logo {
    width: 50px;
    height: 50px;
  }
</style>
