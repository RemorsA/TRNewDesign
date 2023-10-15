<script setup>
	import { onMounted } from 'vue'
	import store from './store';

	onMounted(() => {
		store.dispatch('getSettings')

		const isAuth = JSON.parse(localStorage.getItem('k'))

		if (isAuth !== null) {
			store.state.isAuth = true
		}
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
