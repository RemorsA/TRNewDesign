<script setup>
	import { onMounted } from 'vue'
	import store from './store';
	import router from './router'

	onMounted(() => {
		store.dispatch('getSettings')
		store.dispatch('getAuth')

		const isAuth = store.state.isAuth

		router.beforeEach((to, from, next) => {
			if (!isAuth && to.name === 'auth') {
				next()

				return
			}

			if ((!isAuth && to.name !== 'news') || (isAuth && to.name === 'auth')) {
				next({ path: '/home/news' })
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

	.el-carousel-custom.el-carousel {
		--el-carousel-arrow-background: var(--el-color-info);
		--el-carousel-arrow-hover-background: var(--el-color-primary);

		.el-carousel__indicators .el-carousel__indicator .el-carousel__button{
			background-color: var(--el-color-info) !important;
		}
	}
</style>
