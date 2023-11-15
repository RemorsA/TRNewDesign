import router from '@/router'
import routerGo from '@/store/helpers/RouterGo'
import { ElNotification } from 'element-plus'

const actions = {}

const mutations = {
    handleSelect(state, value) {
        if (value === 'fastRequest') return

        routerGo(value === 'news' ? '/news' : value)
    },

    sendRequest(state) {
        if (state.fastReqField) {
			alert('in development')
		}
		else {
			ElNotification({
				type: 'warning',
				title: 'Внимание',
				message: 'Вы не ввели артикул',
				duration: 5000,
				showClose: true
			})
		}
    }
}

const state = {
    isMobileMenu: false,

    isFastRequestDialog: false,
    fastReqField: ''
}

const getters = {
    menuLinks() {
        let main = []
		let request = []
		let parts = []
		let catalog = []

		router.options.routes[0].children.filter(el => {
			if (el.meta?.main) {
				main.push(el)
			}
			if (el.meta?.request) {
				request.push(el)
			}
			if (el.meta?.parts) {
				parts.push(el)
			}
			if (el.meta?.catalog) {
				catalog.push(el)
			}
		})

		return {
			main,
			request,
			parts,
			catalog, 
		}
    }
}

export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}