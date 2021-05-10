import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store';
const app = createApp(App);
app.mixin({
    created(){
        const {title}=this.$options
        if(title){
            document.title=title;
        }
    }
});
app.use(store);
app.mount('#app');

