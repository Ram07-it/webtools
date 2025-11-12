import 'primeicons/primeicons.css' // icons
import 'primeflex/primeflex.css' // optional utility classes

import Aura from '@primevue/themes/aura' // ✅ the new theme system

import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// ✅ Load Google Analytics dynamically
const script = document.createElement('script')
script.async = true
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-R9C53B0WPD'
document.head.appendChild(script)

// ✅ Initialize GA
window.dataLayer = window.dataLayer || []
window.gtag = function (...args: any[]) {
  window.dataLayer.push(args)
}

window.gtag('js', new Date())
window.gtag('config', 'G-R9C53B0WPD')


app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
})
app.use(router)
app.mount('#app')
