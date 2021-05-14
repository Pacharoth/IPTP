import { createStore } from "vuex";
import commentStore from "./comment";
const store =createStore({
    modules:{
        post:commentStore
    }
})
export default store;