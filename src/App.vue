<script setup>
	import Menu from './Menu.vue'
	import { ref } from 'vue'

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
				<router-view></router-view>
			</div>
		</el-scrollbar>
	</div>

	<el-dialog
		draggable
        align-center
        append-to-body
		v-model="isFastRequestDialog"
		title="Быстрый запрос по артикулу"
		width="80%"
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

		<el-card class="el-dialog-request_response">
			<div class="request_response-content">
				<el-image class="request_response-content--picture"
					fit="cover"
					src="https://upload.wikimedia.org/wikipedia/commons/3/35/N6.3000.156.000_-_%D0%9E%D1%81%D1%8C.jpg"
					:preview-src-list="[ 'https://upload.wikimedia.org/wikipedia/commons/3/35/N6.3000.156.000_-_%D0%9E%D1%81%D1%8C.jpg' ]"
					:hide-on-click-modal="true"
					preview-teleported
				></el-image>

				<el-descriptions border style="width: 100%" :column="1">
					<el-descriptions-item label="Ваш кат. номер">
						00000038823
					</el-descriptions-item>

					<el-descriptions-item label="Наименование">
						Аммортизатор вальца катка
					</el-descriptions-item>

					<el-descriptions-item label="Посмотреть замеры">
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

			<el-table border style="margin-top: 20px; white-space: nowrap !important;">
				<el-table-column label="Комментарий к позиции" prop=""></el-table-column>
				<el-table-column label="Кол-во. (запрошено)" prop=""></el-table-column>
				<el-table-column label="Ед. изм." prop=""></el-table-column>
				<el-table-column label="Склад" prop=""></el-table-column>
				<el-table-column label="Страна" prop=""></el-table-column>
				<el-table-column label="Вес, кг." prop=""></el-table-column>
				<el-table-column label="Количество, шт." prop=""></el-table-column>
				<el-table-column label="Цена за ед." prop=""></el-table-column>
				<el-table-column label="Сумма, руб." prop=""></el-table-column>
				<el-table-column label="РРЦ" prop=""></el-table-column>
				<el-table-column label="" prop=""></el-table-column>
			</el-table>
		</el-card>
	</el-dialog>

	<el-drawer
		v-model="isAccountDialog"
		size="50%"
	></el-drawer>
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
</style>
