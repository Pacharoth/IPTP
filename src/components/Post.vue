<template>
    <div class="post-content">
        <div class="avatar-content">
            <img src="../assets/logo.png" class="avatar-post" alt="">
            <div class="text-data">
                <h5 class="fw-bold">Roeun Pacharoth</h5>
                <h6 class="fw-bold">27 Jan 2020</h6>
            </div>
        </div>
        <div class="content-text">
            <h6 class="content-post">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h6>
        </div>
        <comment/>
    </div>
</template>
<script>
import Comment from './Comment.vue'

export default {
  components: { Comment },
    name:'Post',
    setup(){
        return {
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
        justify-content: space-between;
        width: 40%;
    }
    .avatar-post{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15),0 8px 16px rgba(0, 0, 0, 0.1);
        margin-right: 2%;
        
    }
    .content-post{
        line-height: 1.6;
    }
    .text-data{
        text-align: left;
    }
    .content-text{
        margin-top: 2%;
        text-align: left;
        letter-spacing: 1px;
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
        .avatar-content{
            width: 55%;
        }
    }
    @media (max-width:737px) {
        .avatar-content{
            width: 70%;

        }
    }
    @media(max-width:500px){
        .avatar-content{
            width: 80%;
            margin-top: 4%;

        }
         .post-content{
            padding: 4%;
        }
    }
</style>