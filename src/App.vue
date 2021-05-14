<template>
  <div class="app">
    <add-post :userid="userId"/>
    <post :userid="userId"/>
  </div>

</template>

<script>
import AddPost from './components/AddPost.vue'
import Post from './components/Post.vue'
//I use composition because it is quite easy
export default {
  title:'Social Media',
  name: 'App',
  
  setup(){
    const userId="kwf"
    return{
      userId
    }
  },
  components:{
    AddPost,
    Post
  },
  methods:{
  }
}
</script>

<style>
  @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css';
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
}
body{
  background-color: #eeee;
  height: 100%;
  width: 100%;

}
.app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
}
.content{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}
    ::-webkit-scrollbar{
        width: 10px;
        height: 8px;
    }
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

/* Handle */
    ::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }
        /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
</style>
