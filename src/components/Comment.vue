<template>
    <div class="comment-content">
        <div class="avatar">
            <img src="../assets/logo.png" class="pic-avatar" alt="">
            <div class="text-name">
                <h6 class="fw-bold">Roeun Pacharoth</h6>
                <span class="fw-bold"> 27 Jan 2020</span>
            </div>
        </div>
        <div class="content-text">
            <span class="content-comment2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        </div>
        <form class="comment-container">
            <img src="../assets/logo.png" class="pic-avatar" alt="">
            <input type="text" class="form-control comment" placeholder="Write a comment">
        </form>
    </div>
</template>
<script>
export default {
    name:'Comment',
    setup(){

    }
}
</script>
<style scoped>

    .comment-content{
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