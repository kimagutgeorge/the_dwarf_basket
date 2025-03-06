import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { supabase } from './db/supabase';
import '@/assets/style/style.css';

const app = createApp(App);

// Make Supabase globally accessible
app.config.globalProperties.$supabase = supabase;

app.use(router).mount('#app');
