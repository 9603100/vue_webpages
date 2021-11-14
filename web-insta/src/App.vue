<template>
  <div id="app">
    <nav-bar></nav-bar>
    <recommend></recommend>
    <post></post>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import Recommend from '@/components/Recommend'
import Post from '@/components/Post'

export default {
  name: 'app',
  components: {
    NavBar,
    Recommend,
    Post,
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
