<script setup>
	import { onMounted } from 'vue'
	import store from '@/store/store';
	import router from './router'

	onMounted(() => {
		store.dispatch('getSettings')
		store.dispatch('getAuth')

		const isAuth = store.state.isAuth

		router.beforeEach((to, from, next) => {
			if (!isAuth && to.name !== 'auth') {
				next({ name: 'auth' })
			}
			else if (isAuth && to.name === 'auth') {
				next({ name: 'news' })
			}
			else {
				next()
			}
		})
	})
</script>

<template>
	<router-view></router-view>
</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
	@import '@/styles/Templates.scss';
	@import '@/styles/ElementPlusCustom.scss';

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'Inter', sans-serif;
	}
</style>
