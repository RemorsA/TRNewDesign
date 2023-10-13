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
    },
    mutations: {},
    state: {
        isTheme: false,
        isMenuCollapse: false,
        defaultMenuOpened: false
    },
    getters: {}
})