<script setup>
	import { ref, computed } from 'vue'
	import router from '@/router'
    import { ElNotification } from 'element-plus'
	import store from '@/store'

	const menuLinks = computed(() => {
		let links = []
		let linksParts = []

		router.options.routes[0].children.filter(el => {
			if (!el.meta.parts) {
				links.push(el)
			}
			else {
				linksParts.push(el)
			}
		})

		return { links, linksParts }
	})

	let isMobileMenu = ref(false)
	let requestInput = ref('')
	let dialogFastRequest = ref(false)

    function handleSelect(value) {
        if (value === 'fastRequest') return
		store.commit('routerGo', value === 'news' ? '/news' : value)
    }

    function sendRequest() {
		if (requestInput.value) {
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
</script>

<template>
    <div class="main_page-container">
		<el-scrollbar class="el-scrollbar-custom" max-height="100vh">
			<el-menu class="el-menu-custom"
				v-show="store.state.isAuth"
				:default-active="router.currentRoute.value.path"
				:default-openeds="[
					store.state.settings.defaultMenuOpened ? '1' : ''
				]"
				:ellipsis="false"
				:collapse="store.state.settings.collapse"
				@select="handleSelect"
			>
				<el-menu-item
					index="news"
					title="Новости"
				>
					<el-image class="menu__item-logo-picture"
						v-if="!store.state.settings.collapse"
						src="/TRNewDesign/logo.png"
						fit="scale-down"
					></el-image>

					<el-icon v-else><House></House></el-icon>
				</el-menu-item>

				<el-menu-item
					index="fastRequest"
					v-if="!store.state.settings.collapse"
				>
					<el-input class="el-input-menu__custom"
						placeholder="Быстрый запрос"
						v-model="requestInput"
						@keyup.enter="sendRequest"
					></el-input>

					<el-button class="menu__item-fast_request-button"
						icon="Search"
						link
						@click="sendRequest"
					></el-button>
				</el-menu-item>

				<el-menu-item
					index="fastRequest"
					v-else
					@click="dialogFastRequest = true"
					title="Быстрый запрос"
				>
					<el-icon><Search></Search></el-icon>
				</el-menu-item>

				<el-menu-item
					v-for="(record, index) in menuLinks.links"
					:key="index"
					:index="record.path"
					v-show="record.meta.isShowMenu"
					:title="store.state.settings.collapse ? record.meta.title : ''"
				>
					<el-icon v-show="record.meta.icon">
						<component :is="record.meta.icon"></component>
					</el-icon>

					<span>{{ record.meta.title }}</span>
				</el-menu-item>

				<el-sub-menu index="1">
					<template #title>
						<el-icon><Grid></Grid></el-icon>
						<span>Разделы</span>
					</template>

					<el-menu-item-group>
						<el-menu-item
							v-for="(subItem, index) in menuLinks.linksParts"
							:key="index"
							:index="subItem.path"
						>
							{{ subItem.meta.title }}
						</el-menu-item>
					</el-menu-item-group>
				</el-sub-menu>
			</el-menu>
		</el-scrollbar>

		<el-scrollbar max-height="100vh" native>
			<div class="page">
				<el-page-header class="mobile-page__header"
					title="Меню"
					icon="Expand"
					@back="isMobileMenu = !isMobileMenu"
					v-show="store.state.isAuth"
				>
					<template #content>
						<span class="route__title">
							{{ router.currentRoute.value.meta.title }}
						</span>
					</template>

					<template #extra>
						<a href="/TRNewDesign/news">
							<el-image class="page__header-logo-picture"
								src="/TRNewDesign/logo.png"
							></el-image>
						</a>
					</template>
				</el-page-header>

				<el-card class="auth-page__header"
					body-style="background: rgb(63,107,183);"
					v-show="!store.state.isAuth"
				>
					<div class="auth-page__header-content">
						<el-image
							src="/TRNewDesign/logo.png"
							fit="scale-down"
						></el-image>

						<el-button class="auth-page__header-content--button"
							link
							icon="User"
							@click="store.commit('routerGo', '/auth')"
						>
							Войти
						</el-button>
					</div>
				</el-card>

				<h1 class="page-title">
					{{ router.currentRoute.value.meta.title }}
				</h1>

				<div class="page-router">
					<router-view></router-view>
				</div>
			</div>
		</el-scrollbar>
	</div>

	<el-drawer class="el-drawer-custom"
        v-model="isMobileMenu"
		direction="ltr"
		title="Меню"
		style="min-width: 300px;"
    >
		<template #header>
			<a href="/TRNewDesign/news">
				<el-image src="/TRNewDesign/logo-stroke.png"></el-image>
			</a>
		</template>

		<div class="drawer-content">
			<div class="drawer-content__field">
				<el-input
					placeholder="Введите артикул"
					v-model="requestInput"
					@keyup.enter="sendRequest"
				></el-input>

				<el-button
					icon="Search"
					@click="sendRequest"
				></el-button>
			</div>

			<a class="drawer-content__link"
				v-for="(record, index) in menuLinks.links"
				:key="index"
				:href="'/TRNewDesign' + record.path"
				v-show="record.meta.isShowMenu"
				:style="{
					color: record.path === router.currentRoute.value.path ? 'var(--el-color-primary)' : 'currentcolor'
				}"
			>
				<el-icon v-show="record.meta.icon">
					<component :is="record.meta.icon"></component>
				</el-icon>

				{{ record.meta.title }}
			</a>

			<el-divider content-position="left">Разделы</el-divider>

			<a class="drawer-content__link"
				v-for="(record, index) in menuLinks.linksParts"
				:key="index"
				:href="'/TRNewDesign' + record.path"
			>
				<el-icon v-show="record.meta.icon">
					<component :is="record.meta.icon"></component>
				</el-icon>

				{{ record.meta.title }}
			</a>
		</div>
    </el-drawer>

	<el-dialog
		v-model="dialogFastRequest"
		align-center
		append-to-body
		width="400"
		title="Быстрый запрос по артикулу"
	>
		<el-input
			placeholder="Введите артикул"
			v-model="requestInput"
			@keyup.enter="sendRequest"
		></el-input>

		<el-button
			icon="Search"
			style="width: 100%; margin-top: 10px;"
			@click="sendRequest"
		>
			Запросить
		</el-button>
	</el-dialog>
</template>

<style lang="scss" scoped>
	$custom-blue-color: rgb(63,107,183);

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

            .mobile-page__header {
                display: none;
                z-index: 5;

                @media screen and (max-width: 1024px) {
                    display: block;
                    position: sticky;
                    top: 0;
                    left: 0;
                    padding: 10px;
                    box-shadow: var(--el-box-shadow-light);
                    background: $custom-blue-color;
                    color: white;
                }

                .page__header-logo-picture {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 20px;
                    min-width: 100px;
                }

				.route__title {
					font-size: 14px;
					color: var(--el-color-white);

					@media screen and (width < 768px) {
						font-size: 13px;
					}

					@media screen and (width < 425px) {
						display: none;
					}
				}
            }

            .auth-page__header {
                margin: 20px 20px 0 20px;

                @media screen and (max-width: 1024px) {
                    margin: 10px 10px 0 10px;
                }

                .auth-page__header-content {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;

					.auth-page__header-content--button {
						color: white;

						&:hover {
							color: var(--el-color-primary)
						}
					}
                }
            }

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

    .el-menu-custom {
        --el-menu-text-color: white;
        --el-menu-bg-color: $custom-blue-color;
        --el-menu-hover-bg-color: rgb(50, 86, 146);
        --el-menu-active-color: var(--el-color-primary);
        --el-menu-border-color: none;
        min-height: 100vh;
        max-width: 250px;
        background: $custom-blue-color;

        .el-input-menu__custom {
            --el-input-bg-color: transparent;
            --el-input-border-color: transparent;
            --el-input-placeholder-color: white;
            --el-input-text-color: white;
            --el-input-border: none;
            --el-input-hover-border-color: transparent;
            --el-input-focus-border-color: transparent;
            border-bottom: 1px solid white !important;
        }

        .menu__item-logo-picture {
            width: 100%;
            height: 100%;
        }

        .menu__item-fast_request-button {
            color: white !important;

            &:hover {
                color: var(--el-color-primary) !important;
            }
        }
    }

	.el-drawer-custom {
		.drawer-content {
			display: flex;
			align-items: flex-start;
			flex-direction: column;

			.drawer-content__link {
				width: 100%;
				text-decoration: none;
				color: currentColor;
				padding: 10px;
				display: inherit;
				gap: 5px;
				align-items: center;
				cursor: pointer;
				user-select: none;

				&:hover {
					background: var(--el-border-color);
					border-radius: var(--el-border-radius-base);
				}
			}

			.drawer-content__field {
				display: inherit;
				gap: 5px;
				align-items: center;
				padding: 10px;
				width: 100%
			}
		}
	}
</style>