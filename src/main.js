import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store/store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/display.css'
import locale from './lang-ru'

import { customUI } from '@/components/customUI/index'

const app = createApp(App)

for (const component of Object.keys(customUI)) {
    app.component(component, customUI[component])
}

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
app.use(store)
app.use(ElementPlus, {
    locale: locale
})
app.mount('#app')

// store.commit('componentsSize')