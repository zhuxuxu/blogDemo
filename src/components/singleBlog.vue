<template>
  <div id="single-Blog">
    <h1>{{blog.title}}</h1>
    <article>
      {{blog.body}}
    </article>
  </div>
</template>
<script>
export default {
  name:"single-Blog",
  data(){
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    this.$http.get('https://jsonplaceholder.typicode.com/posts/'+this.id).then(function(data){
      console.log(data)
      this.blog = data.body;
    })
  }
}
</script>
<style scoped>
#single-Blog{max-width: 1160px;margin: 0 auto;padding: 20px;background: #eee;border: 1px dotted #aaa;}
</style>
