<template>
  <div class="app">
    <h2 class="fw-bold">I am the root component</h2>
    <div class="content">
      <shape name="Traingle" color="blue"/>
      <shape name="Hexagone" color="yellow"/>
      <shape name="Star" color="grey"/>
      <shape name="Diamond" color="green"/>
      <shape name="Heart" color="red"/>
    </div>
  </div>

</template>

<script>
import Shape from './components/Shape.vue'
export default {
  title:'Shape App',
  name: 'App',
  data(){
    return{
      todos:[],
      task:"",
    }
  },
  components:{
    Shape
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
