<template>
    <form method="POST" class="add-form" @submit.prevent="postSocialMedia">
        <div class="a-form">
            <img src="../assets/logo.png" class="avatar" alt="">
            <div class="content-avatar">
                <h5 class="fw-bold text">{{user.name}}</h5>
                <h6 class="fw-bold">{{date}}</h6>
            </div>
        </div>
        <textarea v-model="data" type="text" class="form-control post-add" placeholder="What is on your mind?"></textarea>
        <div class="button">
            <button class="btn post">Post</button>

        </div>
    </form>
</template>
<script>
import { computed, onMounted, ref, toRefs} from '@vue/runtime-core';
import {useStore} from 'vuex';
import {getAllDate} from '../utils/GetDate'
export default {
    name:"AddPost",
    props:{
        userid:{
            type:String,
        }
    },
    setup(props){
        const {userid} = toRefs(props)
        const store = useStore();
        const date =ref();
        var data =ref();
        const user = computed(()=>store.getters['post/getUserById'](userid.value));
        function postSocialMedia(){
            const{id} =user.value;
            const idPost = store.getters['post/getPosts'].length+1;
            store.dispatch('post/addPost',{postBy:id,content:data.value,id:idPost,postAt:getAllDate()});
            data.value = ""

        }
        onMounted(()=>{
            function interval(){
                setInterval(()=>date.value=getAllDate(),1000);
            }
            interval();
            return clearInterval(interval);
        })
        return{
            user,
            date,
            data,
            postSocialMedia,
        }
    }
}
</script>
<style scoped>
    .add-form{
        background-color: white;
        width:50%;
        margin: auto;
        height: 100%;
        padding: 1%;
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),0 8px 16px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-bottom: 1%;
    }
    .add-form:focus{
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15),0 8px 16px rgba(0, 0, 0, 0.1);
        
    }
    .post-add{
        height: 20vh;
        resize: none;
        font-size: 20px;
        box-shadow: none;
        border:none;
        
    }
    .post-add::-webkit-scrollbar{
        width: 10px;
        border-radius: 10px;
    }
    .post-add::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 10px;
    }

/* Handle */
    .post-add::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 10px;
    }
        /* Handle on hover */
    .post-add::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
    .post-add:focus{
        box-shadow: none;
        border:none;
    }
    .post{
        width:20%;
        margin-top: 2%;
        color: black;
        font-weight: bold;
        background-color: rgba(255, 123, 0, 0.589);
    }
    .post:focus,.post:hover{
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),0 8px 16px rgba(0, 0, 0, 0.1);
        background-color: rgba(255, 123, 0, 0.664);
        color: rgb(66, 64, 64);


    }
    .button{
        display: flex;
        justify-content: flex-end;
    }
    .a-form{
        display: flex;
        align-items: center;
        width: 40%;

        padding: 1%;
        margin-bottom: 1%;

    }
    .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15),0 8px 16px rgba(0, 0, 0, 0.1);
        margin-bottom: 1%;
        margin-right: 1%;
    }
    .content-avatar{
        margin-left: 10%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
    }

    @media(max-width:1200px){
        .a-form{
            width: 50%;
        }
    }
    @media (max-width:600px){
        .add-form{
            width: 90%;
        }
        .a-form{
            width: 55%;
        }
    }
     @media (max-width:737px) {
        .a-form{
            width: 70%;
        }
     }
    @media(max-width:500px){
        .a-form{
            width: 80%;
        }
         .add-form{
             padding: 4%;
             margin-bottom: 4%;
        }
    }
</style>