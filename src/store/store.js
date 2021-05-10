import { createStore } from "vuex";
import commentStore from "./comment";
const store =createStore({
    modules:{
        chat:commentStore
    }
})
export default store;