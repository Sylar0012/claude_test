import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { twMerge } from 'tailwind-merge'
import preset from './primevue/preset'
import router from './router'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(PrimeVue, {
  unstyled: true,
  pt: preset,
  ptOptions: {
    mergeProps: true,
    mergeSections: true,
    classNameMergeFunction: twMerge,
  },
})
app.use(router)

app.mount('#app')
