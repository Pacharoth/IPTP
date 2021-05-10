const commentStore = {
    namespaced:true,
    state:{
        comments:[{
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            commentAt:Date.now(),
            commentedBy:"kwf",
            postid:1,
            id:1,
        }],
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
                postAt:Date.now(),
                postBy:"kwf",
                id:1,
            },
            {
                title:"I am A god",
                content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                postAt:Date.now(),
                postBy:"kwf",
                id:1,
            },
        ],

    },
    mutations:{

    },
    getters:{
        getComment(state){
            return state.comments
        },
        getPosts(state){
            return state.posts
        },
        getUserById:(state)=>(id)=>{
            return state.users.find(user=>user.id===id);
        }
    },
    actions:{

    }
}
export default commentStore;