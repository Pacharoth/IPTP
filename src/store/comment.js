import {getAllDate} from '../utils/GetDate'
const commentStore = {
    namespaced:true,
    state:{
        comments:[
            {
            content:"Lorem never mind Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            commentAt:getAllDate(),
            commentedBy:"kwf",
            postid:1,
            id:1,
        }
        ],
        users:[
            {
                name:"Pacharoth",
                gender:"M",
                phone:"012472018",
                id:"kwf",
            },
            {
                name:"Niko",
                gender:"M",
                phone:"012472018",
                id:"kw",
            },
        ],
        posts:[
            {
                title:"I am A god",
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                postAt:getAllDate(),
                postBy:"kwf",
                id:1,
            },
            {
                title:"I am A god",
                content:"Lorem hehe Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                postAt:getAllDate(),
                postBy:"kw",
                id:2,
            },
        ],

    },
    mutations:{
        addPost(state,data){
            state.posts.push(data);
        },
        addComment(state,data){
            state.comments.push(data);
        }
    },
    getters:{
        getComment(state){
            return state.comments
        },
        getCommentPost:(state)=>(id)=>{
            const  p =[]
            state.comments.find(element=>{
                if(element.postid===id){
                    for(const user in state.users){
                        if(state.users[user].id===element.commentedBy){
                            p.push({comment:element,user:state.users[user]})       
                        }
                    }
                }
            });
            return p
        },
        getPosts(state){
            return state.posts;
        },
        getUserById:(state)=>(id)=>{
            return state.users.find(user=>user.id===id);
        },
        getAllPost(state){  
            var p = []
            state.users.find(element=>{
                for (const post in state.posts) {
                     if(element.id===state.posts[post].postBy){
                        p.push({users:element,posts:state.posts[post]});
                     }
                }
            })
           return p
        },
        countComment(state){
            return state.comments.length
        },
    },
    actions:{
        addPost({commit},data){
            commit('addPost',data)
        },
        addComment({commit},data){
            console.log(data)
            commit('addComment',data);
        }
    }
}
export default commentStore;