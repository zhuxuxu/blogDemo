<template>
  <nav>
    <ul>
      <li><img src="../assets/logo.png" alt=""></li>
      <li>
        <router-link to="/" exact>博客</router-link>
        <router-link to="/addBlog" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name:"blog-header"
}
</script>
<style scoped>
ul{list-style-type: none;text-align: center;margin: 0;display: flex;justify-content:space-between;align-items: center;}
li{display: inline-block;margin: 0 10px;}
img{width:auto;height: auto;}
a{color: #fff;text-decoration: none;padding: 12px;border-radius: 5px;display: inline-block;width: 80px;}
nav{background: deepskyblue;padding: 0;margin: 0;}
.router-link-active{background: rgba(255, 255, 255, 0.8);color: #555;}
</style>
