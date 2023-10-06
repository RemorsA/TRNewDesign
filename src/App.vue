<script setup>
	import Menu from './Menu.vue'
	import { ref } from 'vue'
	import router from './router'
	import AppFastRequestDrawer from './App-FastRequestDrawer.vue'
	import AppAccountDrawer from './App-AccountDrawer.vue'

	let isAccountDrawer = ref(false)
	let isFastRequestDrawer = ref(false)
</script>

<template>
	<div class="main_page-container">
		<el-scrollbar class="el-scrollbar-custom" max-height="100vh">
			<Menu class="menu"
				@is-account="isAccountDrawer = true"
				@is-fast-request="isFastRequestDrawer = true"
			></Menu>
		</el-scrollbar>

		<el-scrollbar max-height="100vh" native>
			<div class="page">
				<h1 class="page-title">
					{{ router.currentRoute.value.meta.title }}
				</h1>

				<router-view></router-view>
			</div>
		</el-scrollbar>
	</div>

	<AppFastRequestDrawer v-model="isFastRequestDrawer"></AppFastRequestDrawer>

	<AppAccountDrawer v-model="isAccountDrawer"></AppAccountDrawer>
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

			.el-scrollbar-custom {
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
				padding: 20px;

				.page-title {
					margin-bottom: 20px;
					font-size: 16px;
				}
			}
		}
	}
</style>
