<script setup>
	import { onMounted } from 'vue'
	import store from './store';
	import router from './router'

	onMounted(() => {
		store.dispatch('getSettings')
		store.dispatch('getAuth')

		router.beforeEach((to, from, next) => {
			console.log(to)
			console.log(store.state.isAuth)

			if (!store.state.isAuth && to.name !== 'news') {
				next({ path: '/not_found' })
			}
			else {
				next()
			}
			// if (store.state.isAuth && to.name === 'auth') {
			// 	next({ path: '/' })
			// }
			// else if (!store.state.isAuth) {
			// 	next({ name: '404' })
			// }
			// else {
			// 	next()
			// }
		})
	})
</script>

<template>
	<router-view></router-view>
</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'Inter', sans-serif;

		body {
			scrollbar-gutter: stable;
		}
	}
// CUSTOM CLASS ELEMENT UI
	.el-notification-custom {
        .el-notification__group .el-notification__content {
            text-align: left !important;
        }
    }
</style>
