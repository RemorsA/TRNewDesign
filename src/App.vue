<script setup>
	import Menu from './Menu.vue'
	import { ref } from 'vue'
	import router from './router'

	let isAccountDialog = ref(false)
	let isFastRequestDialog = ref(false)
	let fastRequestArticle = ref('')
	let fastRequestButtonLoading = ref(true)
</script>

<template>
	<div class="main_page-container">
		<el-scrollbar class="el-scrollbar-custom" max-height="100vh">
			<Menu class="menu"
				@is-account="isAccountDialog = true"
				@is-fast-request="isFastRequestDialog = true"
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

	<el-drawer
		v-model="isFastRequestDialog"
		title="Быстрый запрос по артикулу"
		size="70%"
    >
		<div class="el-dialog-fast_request">
			<el-input
				placeholder="Введите артикул"
				v-model="fastRequestArticle"
				:disabled="fastRequestButtonLoading"
			></el-input>

			<el-button
				link
				icon="Search"
				type="primary"
				:loading="fastRequestButtonLoading"
			>
				Сделать запрос
			</el-button>
		</div>

		<div class="el-dialog-request_response">
			<div class="request_response-content">
				<el-image class="request_response-content--picture"
					fit="cover"
					src="https://upload.wikimedia.org/wikipedia/commons/3/35/N6.3000.156.000_-_%D0%9E%D1%81%D1%8C.jpg"
					:preview-src-list="[ 'https://upload.wikimedia.org/wikipedia/commons/3/35/N6.3000.156.000_-_%D0%9E%D1%81%D1%8C.jpg' ]"
					:hide-on-click-modal="true"
					preview-teleported
				></el-image>

				<el-descriptions border style="width: 100%" :column="2">
					<el-descriptions-item label="Наименование">
						Аммортизатор вальца катка
					</el-descriptions-item>

					<el-descriptions-item label="Ваш кат. номер">
						00000038823
					</el-descriptions-item>

					<el-descriptions-item label="Замеры">
						<el-button
							link
							icon="Search"
							type="primary"
							:loading="true"
						>
							Посмотреть
						</el-button>
					</el-descriptions-item>
				</el-descriptions>
			</div>

			<el-table style="margin-top: 20px;" table-layout="auto">
				<el-table-column label="Комментарий" prop=""></el-table-column>
				<el-table-column label="Кол-во. (запрошено)" prop=""></el-table-column>
				<el-table-column label="Ед. изм." prop=""></el-table-column>
				<el-table-column label="Склад" prop=""></el-table-column>
				<el-table-column label="Страна" prop=""></el-table-column>
				<el-table-column label="Вес, кг." prop=""></el-table-column>
				<el-table-column label="Кол. шт." prop=""></el-table-column>
				<el-table-column label="Цена за ед." prop=""></el-table-column>
				<el-table-column label="Сумма, руб." prop=""></el-table-column>
				<el-table-column label="РРЦ" prop=""></el-table-column>
				<el-table-column label="" prop=""></el-table-column>
			</el-table>
		</div>
	</el-drawer>

	<el-drawer class="drawer-account"
		v-model="isAccountDialog"
		size="70%"
	>
		<template #header>
			<div class="drawer-title">
				<div class="drawer-title__content">
					<el-icon><User></User></el-icon>
					<span>Усманов Олег Игоревич</span>
				</div>

				<el-button
					link
					icon="Back"
				>
					Выйти из аккаунта
				</el-button>
			</div>
		</template>

		<el-tabs>
			<el-tab-pane label="Контактные лица">
				<el-table table-layout="auto">
					<el-table-column label="Контактное лицо" prop=""></el-table-column>
					<el-table-column label="Тел." prop=""></el-table-column>
					<el-table-column label="Моб. телефон" prop=""></el-table-column>
					<el-table-column label="Skype" prop=""></el-table-column>
					<el-table-column label="E-mail" prop=""></el-table-column>
					<el-table-column label="Должность" prop=""></el-table-column>
				</el-table>
			</el-tab-pane>

			<el-tab-pane label="График платежей">
				<el-table table-layout="auto">
					<el-table-column label="Загрузить" prop=""></el-table-column>
					<el-table-column label="Основание" prop=""></el-table-column>
					<el-table-column label="Счет" prop=""></el-table-column>
					<el-table-column label="Сумма счета" prop=""></el-table-column>
					<el-table-column label="Сумма задолжности" prop=""></el-table-column>
					<el-table-column label="Конечная дата оплаты" prop=""></el-table-column>
				</el-table>
			</el-tab-pane>

			<el-tab-pane label="Адрес доставки">
				<el-table table-layout="auto">
					<el-table-column label="Индекс" prop=""></el-table-column>
					<el-table-column label="Страна" prop=""></el-table-column>
					<el-table-column label="Регион" prop=""></el-table-column>
					<el-table-column label="Населенный пункт" prop=""></el-table-column>
					<el-table-column label="Район" prop=""></el-table-column>
					<el-table-column label="Улица, дом" prop=""></el-table-column>
				</el-table>
			</el-tab-pane>
		</el-tabs>
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

	.el-dialog-fast_request {
		display: flex;
		align-items: center;
		gap: 20px;
	}

	.el-dialog-request_response {
		margin-top: 20px;

		.request_response-content {
			display: flex;
			align-items: center;
			gap: 20px;

			.request_response-content--picture {
				width: 200px;
				height: 200px;
				min-width: 200px;
				border: 1px solid var(--el-border-color);
				padding: 2px;
			}
		}
	}

	.drawer-account {
		.drawer-title {
			display: flex;
			align-items: center;
			gap: 50px;

			.drawer-title__content {
				display: inherit;
				gap: 10px;
				align-items: inherit;
			}
		}
	}
</style>
