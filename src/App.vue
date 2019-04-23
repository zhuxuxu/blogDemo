<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog'
import showBlog from './components/showBlog'
import blogHeader from './components/blogHeader'

export default {
  name: 'App',
  components:{
    addBlog,showBlog,blogHeader
  }
}
</script>

<style>
html,body,div{margin: 0;padding: 0;}
body{background:rgb(255, 255, 204)}
h1,h2,h3{width: 100%;text-align: center;}
</style>
