<script setup>
	import { ref } from 'vue'
	import router from './router'
    import { ElNotification } from 'element-plus'

	let isMobileMenu = ref(false)
	let requestInput = ref('')
    let isCollapse = ref(false)
	const subMenuArr = ref([
        { label: 'Запчасти', index: 'spareParts' },
        { label: 'Запрос по артикулу', index: 'requestByArticle' },
        { label: 'Запрос на подбор', index: 'selectionRequest' },
        { label: 'Каталог номенклатуры', index: 'productCatalog' },
        { label: 'История запросов', index: 'queryHistory' },
        { label: 'Каталоги', index: 'catalogs' },
        { label: 'Шины', index: 'tires' },
        { label: 'Вилы', index: 'pitchfork' },
        { label: 'Двигатели', index: 'engines' },
        { label: 'Навесное оборудование', index: 'attachments' },
        { label: 'Аккумуляторы', index: 'batteries' },
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
				:default-active="router.currentRoute.value.name"
				text-color="white"
				:default-openeds="[ '1' ]"
				active-text-color="var(--el-color-primary)"
				background-color="rgb(63,107,183)"
				:ellipsis="false"
				:collapse="isCollapse"
				@select="handleSelect"
			>
				<el-menu-item index="news">
					<el-image class="menu__item-logo-picture"
						v-if="!isCollapse"
						src="/logo.png"
						fit="scale-down"
					></el-image>

					<el-icon v-else><House></House></el-icon>
				</el-menu-item>

				<el-menu-item index="account">
					<el-icon><User></User></el-icon>
					<span>Усманов Олег Игоревич</span>
				</el-menu-item>

				<el-menu-item index="fastRequest">
					<el-input class="el-input-menu__custom"
						placeholder="Введите артикул"
						v-model="requestInput"
						@keyup.enter="sendRequest"
					></el-input>

					<el-button
						icon="Search"
						link
						style="color: white;"
						@click="sendRequest"
					></el-button>
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

				<el-menu-item index="message">
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

	<el-drawer class="el-drawer-custom"
        v-model="isMobileMenu"
		direction="ltr"
    >
		
    </el-drawer>
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
				.mobile-page__header {
					display: none;
					z-index: 2;

					@media screen and (max-width: 1024px) {
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
    }

	.el-drawer-custom {
		width: 30% !important;

		@media screen and (max-width: 768px) {
			width: 40% !important;
		}

		@media screen and (max-width: 425px) {
			width: 90% !important;
		}
	}
</style>
