<script setup>
	import DesktopMenu from './DesktopMenu.vue'
	import MobileMenu from './MobileMenu.vue'
	import MobileHeader from './MobileHeader.vue'
	import router from '@/router'
	import AuthHeader from './AuthHeader.vue'
</script>

<template>
    <div class="main_page-container">
		<el-scrollbar class="el-scrollbar-custom" max-height="100vh">
			<DesktopMenu></DesktopMenu>
		</el-scrollbar>

		<el-scrollbar max-height="100vh" native>
			<div class="page">
				<MobileHeader></MobileHeader>

				<AuthHeader></AuthHeader>

				<h1 class="page-title">
					{{ router.currentRoute.value.meta.title }}
				</h1>

				<div class="page-router">
					<router-view></router-view>
				</div>
			</div>
		</el-scrollbar>
	</div>

	<MobileMenu></MobileMenu>
</template>

<style lang="scss" scoped>
    .main_page-container {
        display: grid;
        grid-template-columns: auto 1fr;

        @media screen and (max-width: 1024px) {
            grid-template-columns: 1fr;
        }

        .el-scrollbar-custom {
            @media screen and (max-width: 1024px) {
                display: none;
            }

            &.el-scrollbar {
                --el-scrollbar-bg-color: white;
                --el-scrollbar-hover-bg-color: var(--el-color-info-light-3);
                --el-scrollbar-opacity: 0.6;
            }
        }

        .page {
			// overflow: scroll;
			// height: 100vh;
			// overflow-x: hidden;

            .page-title {
                padding: 20px 20px 0 20px;
                font-size: 20px;

                @media screen and (max-width: 1024px) {
                    display: none;
                }
            }

            .page-router {
                padding: 20px;

                @media screen and (max-width: 1024px) {
                    padding: 10px;
                }
            }
        }
    }
</style>