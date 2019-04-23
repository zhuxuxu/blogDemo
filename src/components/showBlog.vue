<template>
  <div v-theme:column id="show-blog">
    <h2>博客总览</h2>
    <div class="search"><input type="text" v-model="search" placeholder="请输入搜索关键字"></div>
    <div class="single-blog" v-for="blog in filteredBlogs" :key="blog.id">
      <router-link :to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      </router-link>
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>
<script>
export default {
  name:'show-blog',
  data(){
    return {
      blogs:[],
      search:'',
    }
  },
  created(){
    this.$http.get(
      'https://jsonplaceholder.typicode.com/posts',
      {

      }
    ).then(function(data){
      //console.log(data)
      this.blogs = data.body.slice(0,10);
      // this.blogs = data.body;
      //console.log(this.blogs)
    })
  },
  computed:{
    filteredBlogs:function(){
      return this.blogs.filter((blog)=>{
        return blog.title.match(this.search);
      })
    }
  },
  //自定义局部过滤器
  filters:{
    "snippet":function(value){
      return value.slice(0,100)+" ······";
    }
  },
  //自定义局部指令
  directives: {
    "rainbow":{
      bind(el,binding,vnode){
        el.style.color = "#"+Math.random().toString(16).slice(2,8);
      }
    }
  }
}
</script>
<style scoped>
#show-blog{max-width: 1200px;margin: 0 auto;}
#show-blog a{color: #444;text-decoration: none;}
.single-blog{padding: 20px;margin: 20px 0;box-sizing: border-box;background: #fff;border: 1px dotted #aaa;}
.search{width: 100%;background: #fff;border-radius:50px;}
.search input{background: #fff;border-radius:50px;border: 0;margin-left: 20px;width: 80%;padding: 20px;outline: none;}
</style>
