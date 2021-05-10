<template>
  <div class="app">
    {{p.hello}}
    {{count}} <button class="btn" @click="increment">increment</button>
  </div>

</template>

<script>
//I use composition because it is quite easy
import { ref } from '@vue/reactivity';
import {useStore} from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
  title:'Social Media',
  name: 'App',
  setup(){
    const p = ref({hello:"world"});
    const store = useStore();
    let count = ref(0);
    
    return{
      increment:()=>count.value++,
      count:count,
      p:p,
      posts:computed(()=>store.getters['chat/getPosts'])
    }
  },
  components:{
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
</style>
