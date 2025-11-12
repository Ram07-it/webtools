import 'primeicons/primeicons.css'; // icons
import 'primeflex/primeflex.css';   // optional utility classes

import Aura from '@primevue/themes/aura'; // ✅ the new theme system

import PrimeVue from 'primevue/config';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'      

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
});
app.use(router)
app.mount('#app');
