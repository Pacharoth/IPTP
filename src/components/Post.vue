<template>
    <div v-for="posts in post" :key="posts" class="post-content">
        <div class="avatar-content">
            <img src="../assets/logo.png" class="avatar-post" alt="">
            <div class="text-data">
                <h5 class="fw-bold">{{posts.users.name}}</h5>
                <h6 class="fw-bold">{{posts.posts.postAt}}</h6>
            </div>
        </div>
        <div class="content-text">
            <h6 class="content-post">{{posts.posts.content}}</h6>
        </div>
        <div class="comment-session">
            <h5 class="fw-bold">comment</h5>
        </div>
        <comment :postid="posts.posts.id"/>
        <form method="post" class="comment-container" @submit.prevent="commentPost(posts.posts.id)">
            <img src="../assets/logo.png" class="pic-avatar" alt="">
            <input type="text" v-model="comment" class="form-control comment" placeholder="Write a comment">
        </form>
    </div>
</template>
<script>
import { computed, onMounted, toRefs,ref} from '@vue/runtime-core';
import { useStore } from 'vuex'
import Comment from './Comment.vue'
import { getAllDate } from '../utils/GetDate';

export default {
  components: { Comment },
    name:'Post',
    props:{
        userid:{
            type:String,
        }
    },
    setup(props){
        const postid =ref()
        const {userid} = toRefs(props)
        const store= useStore();
        const post = computed(()=>store.getters['post/getAllPost'])
        const comment = ref("");
        function commentPost(id){
            if(comment.value!==""){
                store.dispatch('post/addComment',
                {
                    content:comment.value,
                    id:computed(()=>store.getters['post/countComment']).value+1,
                    commentAt:getAllDate(),
                    postid:id,
                    commentedBy:userid.value,
                })
                comment.value="";
            }
        }
        onMounted(()=>{
            console.log("mounted");
        })
        return {
            post,
            comment,
            commentPost,
            postid,
        }
    }
}
</script>
<style scoped>
    .post-content{
        margin: auto;
        margin-top: 1%;
        margin-bottom: 1%;
        padding: 2%;
        border-radius: 10px;
        width:50%;
        background-color: white;
        display: flex;
        flex-direction: column;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),0 8px 16px rgba(0, 0, 0, 0.1);
    }
    .avatar-content{
        display: flex;
        width: 40%;
    }
    .avatar-post{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15),0 8px 16px rgba(0, 0, 0, 0.1);
        margin-right: 2%;
        
    }
    .comment-session{
        display: flex;
        justify-content: flex-start;
    }
    .content-post{
        line-height: 1.6;
    }
    .text-data{
        text-align: left;
        margin-left: 10%;
    }
    .content-text{
        margin-top: 2%;
        text-align: left;
        letter-spacing: 1px;
    }
        .pic-avatar{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15),0 8px 16px rgba(0, 0, 0, 0.1);
    }
    .comment-container{
        margin-top: 2%;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .comment{
        width: 92%;
        border-radius: 50px;
        background-color: #eeee;
        border:none;
        color: grey;
        resize: vertical;
    }
    .comment:hover,.comment:focus{
        box-shadow: none;
        background-color: rgba(212, 209, 209, 0.274);
        color: black;
    }
    .content-text{
        text-align: left;
        margin-bottom: 2%;
        line-height: 1.5;

    }
    .content-comment2{
        font-size: 16px;
    }
    .avatar{
        display: flex;
        width: 32%;
        justify-content: space-between;
        margin-bottom: 2%;
    }
    .text-name{
        text-align: left;
    }
    @media(max-width:1200px){
        .avatar-content{
            width: 50%;
        }
    }
    @media (max-width:600px){
        .post-content{
            width: 90%;
            padding: 2%;
        }
      
    }
    @media (max-width:737px) {
        
    }
    @media(max-width:500px){
         .post-content{
            padding: 4%;
        }
    }
</style>