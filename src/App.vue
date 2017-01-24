<template>
  <div id="app">
    <login></login>
  </div>
</template>

<script>
import Hello from './components/Hello'
//  import demo from './components/demo'
import Login from './components/user/login'

export default {
  name: 'app',
  components: {
    Hello,
    Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  body{
    background: #f3f3f3;
  }
</style>
