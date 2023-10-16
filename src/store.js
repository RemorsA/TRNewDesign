import { createStore } from 'vuex'

export default createStore({
    modules: {},
    actions: {
        setSettings({ state, dispatch }) {
            localStorage.setItem('settings', JSON.stringify({
                'theme': state.isTheme,
                'collapse': state.isMenuCollapse,
                'default': state.defaultMenuOpened
            }))

            dispatch('getSettings')
        },
        getSettings({ state }) {
            let settings = JSON.parse(localStorage.getItem('settings'))

            if (settings !== null && settings !== undefined) {
                state.defaultMenuOpened = settings.default
                state.isMenuCollapse = settings.collapse
                state.isTheme = settings.theme
            }

            if (state.isTheme) {
                document.querySelector('html').className = 'dark'
            }
            else {
                document.querySelector('html').className = ''
            }
        },
        setAuth({ dispatch }, { login, pass }) {
            const key = btoa(login + ':' + pass)
            localStorage.setItem('k', JSON.stringify(key))

            dispatch('getAuth')
        },
        getAuth({ state }) {
            const isAuth = JSON.parse(localStorage.getItem('k'))

            if (isAuth !== null) {
                state.isAuth = true
            }
        }
    },
    mutations: {
        routerGo(state, path) {
            let tagA = document.createElement('a')
            tagA.setAttribute('href', path)
            tagA.click()
        },
    },
    state: {
        isAuth: false,
        isTheme: false,
        isMenuCollapse: false,
        defaultMenuOpened: false
    },
    getters: {}
})