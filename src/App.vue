<template>
  <div id="app">
    <navbar></navbar>
    <mainBody msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import mainBody from './components/mainBody.vue'
import navbar from './components/navbar.vue'


export default {
  name: 'app',
  components: {
    mainBody,
    navbar
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
</style>
