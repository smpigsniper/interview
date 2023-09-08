<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <MainPage/>
  <GoogleMap/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainPage from './components/MainPage.vue';
import GoogleMap from './components/GoogleMap.vue'

export default {
  name: 'App',
  components: {
    MainPage,
    GoogleMap
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
