<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form v-if="!submitted">
        <label>博客标题</label>
        <input type="text" v-model="blog.title" required />
        <label>博客内容</label>
        <textarea v-model="blog.content"></textarea>
        <div id="checkboxes">
          <input type="checkbox" value="Vue.js" v-model="blog.categories" id="vue">
          <label for="vue">Vue.js</label>
          <input type="checkbox" value="Angular.js" v-model="blog.categories" id="angular">
          <label for="angular">Angular.js</label>
          <input type="checkbox" value="React.js" v-model="blog.categories" id="react">
          <label for="react">React.js</label>
          <input type="checkbox" value="Node.js" v-model="blog.categories" id="node">
          <label for="node">Node.js</label>
          <br>
          <label>作者：</label>
          <select v-model="blog.author">
            <option v-for="author in authors" :key="author">
              {{author}}
            </option>
          </select>
        </div>
        <button @click.prevent="post">添加博客</button>
    </form>
    <div v-if="submitted">
      <h3>您的博客发布成功！</h3>
    </div>
    <hr>
    <div id="preview">
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容：</p>
        <p>{{blog.content}}</p>
        <p>博客分类：</p>
        <ul>
          <li v-for="category in blog.categories" :key="category">
            {{category}}
          </li>
        </ul>
        <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  //http://jsonplaceholder.typicode.com/
  //http://jsonplaceholder.typicode.com/posts
  name: 'add-blog',
  data () {
    return {
      blog:{
        title:'',
        content:'',
        categories:[],
        author:'朱旭旭'
      },
      authors:["zhuxuxu","朱旭旭","北丐","Nostalgia"],
      submitted:false
    }
  },
  methods:{
    post:function(){
      this.$http.post(
        "http://jsonplaceholder.typicode.com/posts",
        {
          title:this.blog.title,
          body:this.blog.content,
          userId:1
        }
      ).then(function(data){
        //console.log(data)
        this.submitted=true;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label{cursor: pointer;display: block;margin: 20px 0 10px;}
#add-blog *{box-sizing: border-box;}
#add-blog{margin: 0px auto 0;max-width:1160px;padding:20px;}
input[type="text"],textarea,select{display: block;width: 100%;padding: 8px;}
textarea{height: 200px;outline: none;}
#checkboxes label{display: inline-block;margin-top: 0;margin-right: 10px;}
#checkboxes input{display: inline-block;}
button{display:block;margin:20px 0;background: crimson;color: #fff;border:0;padding:14px;border-radius:5px;font-size:18px;cursor:pointer;outline:none;}
#preview{padding: 10px 20px;border: 1px solid #ccc;margin: 30px 0;height: auto;}
p{width: 100%;height: auto;word-break: break-all;}
h3{margin-top: 10px;}
select{cursor: pointer;}
</style>
