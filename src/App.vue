<script setup>
	import Menu from './Menu.vue'
	import { ref } from 'vue'
	import router from './router'
	import AppFastRequestDrawer from './App-FastRequestDrawer.vue'
	import AppMobileMenu from './App-MobileMenu.vue'

	let isMobileMenu = ref(false)
</script>

<template>
	<div class="main_page-container">
		<el-scrollbar class="el-scrollbar-custom" max-height="100vh">
			<Menu class="menu"></Menu>
		</el-scrollbar>

		<el-scrollbar max-height="100vh" native>
			<div class="page">
				<el-page-header class="mobile-page__header"
					title="Меню"
					icon="Menu"
					:content="router.currentRoute.value.meta.title"
					@back="isMobileMenu = !isMobileMenu"
				></el-page-header>

				<h1 class="page-title">
					{{ router.currentRoute.value.meta.title }}
				</h1>

				<router-view class="page-router"></router-view>
			</div>
		</el-scrollbar>
	</div>

	<AppMobileMenu v-model="isMobileMenu"></AppMobileMenu>
</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		font-family: 'Inter', sans-serif;

		.main_page-container {
			display: grid;
			grid-template-columns: 250px 1fr;

			@media screen and (max-width: 768px) {
				grid-template-columns: 1fr;
			}

			.el-scrollbar-custom {
				@media screen and (max-width: 768px) {
					display: none;
				}

				&.el-scrollbar {
					--el-scrollbar-bg-color: white;
					--el-scrollbar-hover-bg-color: var(--el-color-info-light-3);
					--el-scrollbar-opacity: 0.6;
				}

				.menu {
					min-height: 100vh;
					background: rgb(63,107,183);
				}
			}

			.page {
				.mobile-page__header {
					display: none;

					@media screen and (max-width: 768px) {
						display: block;
						position: sticky;
						top: 0;
						left: 0;
						padding: 10px;
						box-shadow: var(--el-box-shadow-light);
						background: rgb(63,107,183);
						color: white;
					}
				}

				.page-title {
					padding: 20px 20px 0 20px;
					font-size: 16px;

					@media screen and (max-width: 768px) {
						display: none;
					}
				}

				.page-router {
					padding: 20px;

					@media screen and (max-width: 768px) {
						padding: 10px;
					}
				}
			}
		}
	}
</style>
