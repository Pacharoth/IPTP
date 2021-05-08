import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mixin({
    created(){
        const {title}=this.$options
        if(title){
            document.title=title;
        }
    }
});
app.mount('#app')
