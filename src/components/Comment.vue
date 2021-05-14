<template>
    <div class="comment-content" v-for="comments in comment" :key="comments">
        <div class="avatar">
            <img src="../assets/logo.png" class="pic-avatar" alt="">
            <div class="text-name">
                <h6 class="fw-bold">{{comments.user.name}}</h6>
                <span class="fw-bold"> {{comments.comment.commentAt}}</span>
            </div>
        </div>
        <div class="content-text">
            <span class="content-comment2">{{comments.comment.content}}</span>
        </div>
    </div>
</template>
<script>
import { computed, onMounted, toRefs} from '@vue/runtime-core'
import { useStore } from 'vuex';
export default {
    name:'Comment',
    props:{
        postid:{
            type:Number,
        },
    },
    setup(props){
        const store=useStore();
        const {postid} = toRefs(props);
        const comment = computed(()=>store.getters['post/getCommentPost'](postid.value));
       onMounted(()=>{
           console.log(postid.value)
       })
       return{
           comment,
       }
    }
}
</script>
<style scoped>

    .comment-content{
        margin-top: 2%;
        border:1px solid rgba(126, 121, 121, 0.445);
        padding: 2%;
        border-radius: 10px;
    }
    .pic-avatar{
        width: 35px;
        height: 35px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15),0 8px 16px rgba(0, 0, 0, 0.1);
    }
    .comment-container{
        display: flex;
        justify-content: space-between;
    }
    .comment{
        width: 94%;
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
    @media (max-width:600px) {
        .avatar{
            width: 45%;
        }
    }
    @media (max-width:1200px) {
        .avatar{
            width: 40%;
        }
    }
    @media (max-width:920px) {
        .avatar{
            width:45%;
        }
    }
</style>