import router from '@/router'
import routerGo from '@/store/helpers/RouterGo'
import { ElNotification } from 'element-plus'

const actions = {}

const mutations = {
    handleSelect(state, value) {
        if (value === 'fastRequest') return
		if (value === '/history_request/:isMessages') value = '/history_request/all'

        routerGo(value === 'newsIndexPage' ? '/news_page' : value)
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
				showClose: true,
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
		let other = []

		router.options.routes[0].children.filter(el => {
			if (el.meta?.main) {
				main.push(el)
			}
			if (el.meta?.other) {
				other.push(el)
			}
		})

		return {
			main,
			other,
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