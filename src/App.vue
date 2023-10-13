<script setup>
	import { ref } from 'vue'
	import router from './router'
    import { ElNotification } from 'element-plus'
	import store from './store'

	store.dispatch('getSettings')

	let isMobileMenu = ref(false)
	let requestInput = ref('')
	let dialogFastRequest = ref(false)
	const subMenuArr = ref([
        { label: 'Запрос по артикулу', index: 'request_by_article' },
        { label: 'Запрос на подбор', index: 'selection_request' },
        { label: 'Каталог номенклатуры', index: 'product_catalog' },
        { label: 'История запросов', index: 'history_request' },
        { label: 'Каталоги', index: 'catalogs' },
        { label: 'Шины', index: 'tires' },
        { label: 'Вилы', index: 'forks' },
        { label: 'Двигатели', index: 'engines' },
        { label: 'Навесное оборудование', index: 'attachments' },
        { label: 'Аккумуляторы', index: 'batteries' },
    ])

	const menuLinks = ref([
		{ label: 'Новости', href: '/news', icon: 'House' },
		{ label: 'Аккаунт', href: '/account', icon: 'User' },
		{ label: 'Заказы', href: '/orders', icon: 'List' },
		{ label: 'Отгрузки', href: '/shipments', icon: 'Van' },
		{ label: 'Корзина', href: '/cart', icon: 'ShoppingCart' },
		{ label: 'Сообщения', href: '/messages', icon: 'Message' },
		{ label: 'Запрос по артикулу', href: '/request_by_article' },
		{ label: 'Запрос на подбор', href: '/selection_request' },
		{ label: 'Каталог номенклатуры', href: '/product_catalog' },
		{ label: 'История запросов', href: '/history_request' },
		{ label: 'Каталоги', href: '/catalogs' },
		{ label: 'Шины', href: '/tires' },
		{ label: 'Вилы', href: '/forks' },
		{ label: 'Двигатели', href: '/engines' },
		{ label: 'Навесное оборудование', href: '/attachments' },
		{ label: 'Аккумуляторы', href: '/batteries' },
	])

    function handleSelect(value) {
        if (value === 'fastRequest') return

        let tagA = document.createElement('a')
        tagA.setAttribute('href', '/' + value)
        tagA.click()
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
			<el-menu class="el-menu-custom menu"
				v-show="true"
				:default-active="router.currentRoute.value.name"
				text-color="white"
				:default-openeds="[
					store.state.defaultMenuOpened ? '1' : ''
				]"
				active-text-color="var(--el-color-primary)"
				background-color="rgb(63,107,183)"
				:ellipsis="false"
				:collapse="store.state.isMenuCollapse"
				@select="handleSelect"
			>
				<el-menu-item index="news">
					<el-image class="menu__item-logo-picture"
						v-if="!store.state.isMenuCollapse"
						src="/logo.png"
						fit="scale-down"
					></el-image>

					<el-icon v-else><House></House></el-icon>
				</el-menu-item>

				<el-menu-item index="fastRequest" v-if="!store.state.isMenuCollapse">
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

				<el-menu-item index="fastRequest" v-else @click="dialogFastRequest = true">
					<el-icon><Search></Search></el-icon>
				</el-menu-item>

				<el-menu-item index="account">
					<el-icon><User></User></el-icon>
					<span>Аккаунт</span>
				</el-menu-item>

				<el-menu-item index="orders">
					<el-icon><List></List></el-icon>
					<span>Заказы</span>
				</el-menu-item>

				<el-menu-item index="shipments">
					<el-icon><Van></Van></el-icon>
					<span>Отгрузки</span>
				</el-menu-item>

				<el-menu-item index="cart">
					<el-icon><ShoppingCart></ShoppingCart></el-icon>
					<span>Корзина</span>
				</el-menu-item>

				<el-menu-item index="messages">
					<el-icon><Message></Message></el-icon>
					<span>Сообщения</span>
				</el-menu-item>

				<el-sub-menu index="1">
					<template #title>
						<el-icon><Grid></Grid></el-icon>
						<span>Разделы</span>
					</template>

					<el-menu-item-group>
						<el-menu-item
							v-for="(subItem, index) in subMenuArr"
							:key="index"
							:index="subItem.index"
						>
							{{ subItem.label }}
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
				>
					<template #content>
						<el-image class="page__header-logo-picture"
							src="../../public/logo.png"
						></el-image>
					</template>
				</el-page-header>

				<el-card
					body-style="background: rgb(63,107,183);"
					style="margin: 20px 20px 0 20px;"
					v-show="false"
				>
					<div style="
						display: flex;
						align-items: center;
						justify-content: space-between;
					">
						<el-image
							src="/logo.png"
							fit="scale-down"
						></el-image>

						<el-button
							link
							icon="Right"
						>
							Войти
						</el-button>
					</div>
				</el-card>

				<h1 class="page-title">
					{{ router.currentRoute.value.meta.title }}
				</h1>

				<router-view class="page-router"></router-view>
			</div>
		</el-scrollbar>
	</div>

	<el-drawer class="el-drawer-custom"
        v-model="isMobileMenu"
		direction="ltr"
		title="Меню"
    >
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
				v-for="(record, index) in menuLinks.slice(0, 6)"
				:key="index"
				:href="record.href"
			>
				<el-icon v-show="record.icon">
					<component :is="record.icon"></component>
				</el-icon>

				{{ record.label }}
			</a>

			<el-divider content-position="left">Разделы</el-divider>

			<a class="drawer-content__link"
				v-for="(record, index) in menuLinks.slice(6)"
				:key="index"
				:href="record.href"
			>
				<el-icon v-show="record.icon">
					<component :is="record.icon"></component>
				</el-icon>

				{{ record.label }}
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

		.main_page-container {
			display: grid;
			grid-template-columns: auto 1fr;

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
			}

			.page {
				.mobile-page__header {
					display: none;
					z-index: 2;

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

					.page__header-logo-picture {
						display: flex;
						align-items: center;
						justify-content: center;
						height: 20px;
						min-width: 100px;
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

	.el-menu-custom {
        &.el-menu {
            --el-menu-border-color: none;
        }

		&.menu {
			min-height: 100vh;
			max-width: 250px;
			background: rgb(63,107,183);
		}

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
		min-width: 300px !important;

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
