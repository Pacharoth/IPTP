<template>
    <div>
        <button v-if="deletes=='DELETE'" class="btn delete"><em class="far fa-trash-alt"></em></button>
        
        <button v-if="add=='ADD'" class="btn plus"><em class="fas fa-plus"></em></button>
    </div>
</template>
<script>
export default {
    props:['deletes','add'],
    name:"MyButton",
    
}
</script>
<style scoped>
    button{
        box-shadow: 0 2px 4px rgba(0,0,0,0.1),0 8px 16px rgba(0, 0,0, 0.1);
    }
    button:hover,button:focus{
        box-shadow: 0 4px 8px rgba(0,0,0,0.1),0 16px 20px rgba(0, 0,0, 0.1);
    }
    .delete{
        background-color: rgba(235, 72, 72, 0.664);
        color: white;
    }
    .delete:hover,.delete:focus{
        color: white;
        background-color: rgba(209, 78, 78, 0.925);
    }
    .plus{
        background-color: rgba(141, 57, 219, 0.466);
        color: white;
    }
    .plus:hover,.plus:focus{
        background-color: rgba(141, 57, 219, 0.788);
        color: white;
    }
</style>