<script setup>
	import store from '@/store/store';
	import routerGo from '@/store/helpers/RouterGo'

	function signOut() {
		localStorage.removeItem('k')
		routerGo('/news')
	}
</script>

<template>
	<div class="account__descriptions">
		<section class="descriptions__row">
			<span class="descriptions__row-label">
				ФИО:
			</span>

			<span class="descriptions__row-content">
				Усманов Олег Игоревич
			</span>
		</section>

		<section class="descriptions__row">
			<span class="descriptions__row-label">
				Выход из учетной записи:
			</span>

			<span class="descriptions__row-content">
				<el-button
					type="primary"
					@click="signOut"
				>
					Выйти
				</el-button>
			</span>
		</section>

		<section class="descriptions__row">
			<span class="descriptions__row-label">
				Сменить оформление страницы на темную или светлую тему:
			</span>

			<span class="descriptions__row-content">
				<el-switch
					v-model="store.state.settings.theme"
					active-text="Темная"
					inactive-text="Светлая"
					@change="store.dispatch('setSettings')"
				></el-switch>
			</span>
		</section>

		<section class="descriptions__row">
			<span class="descriptions__row-label">
				Скрыть или раскрыть меню:
			</span>

			<span class="descriptions__row-content">
				<el-switch
					v-model="store.state.settings.collapse"
					active-text="Скрыт"
					inactive-text="Раскрыт"
					@change="store.dispatch('setSettings')"
				></el-switch>
			</span>
		</section>
	</div>

	<el-tabs>
		<el-tab-pane label="Контактные лица">
			<el-table
				:data="store.state.tData.slice(40)"
				stripe
				border
				size="small"
			>
				<el-table-column
					label="Контактное лицо"
					prop="name"
				></el-table-column>

				<el-table-column
					label="Тел."
					prop="phone"
				></el-table-column>

				<el-table-column
					label="Моб. телефон"
					prop="phone"
				></el-table-column>

				<el-table-column
					label="Skype"
					prop="email"
				></el-table-column>

				<el-table-column
					label="E-mail"
					prop="email"
				>
					<template #default="{ row }">
						<el-link type="primary">
							{{ row.email }}
						</el-link>
					</template>
				</el-table-column>

				<el-table-column
					label="Должность"
					prop="gender"
				></el-table-column>
			</el-table>

			<BottomNavigationPanel
				:sticky="false"
				:filterable="false"
			></BottomNavigationPanel>
		</el-tab-pane>

		<el-tab-pane label="График платежей">
			<el-table
				:data="store.state.tData.slice(40)"
				stripe
				border
				size="small"
			>
				<el-table-column
					label=""
					prop=""
					width="60"
					align="center"
				>
					<template #default="{ row }">
						<el-button
							link
							style="font-size: 20px"
							type="primary"
							icon="Download"
						></el-button>
					</template>
				</el-table-column>

				<el-table-column
					label="Основание"
					prop="greeting"
				></el-table-column>

				<el-table-column
					label="Счет"
					prop="guid"
				></el-table-column>

				<el-table-column
					label="Сумма счета"
					prop="balance"
				></el-table-column>

				<el-table-column
					label="Сумма задолжности"
					prop="balance"
				></el-table-column>

				<el-table-column
					label="Конечная дата оплаты"
					prop="registered"
				></el-table-column>
			</el-table>

			<BottomNavigationPanel
				:sticky="false"
				:filterable="false"
			></BottomNavigationPanel>
		</el-tab-pane>

		<el-tab-pane label="Адрес доставки">
			<el-table
				:data="store.state.tData.slice(40)"
				stripe
				border
				size="small"
			>
				<el-table-column
					label="Индекс"
					prop="longitude"
				></el-table-column>

				<el-table-column
					label="Страна"
					prop="favoriteFruit"
				></el-table-column>

				<el-table-column
					label="Регион"
					prop="address"
				></el-table-column>

				<el-table-column
					label="Населенный пункт"
					prop="address"
				></el-table-column>

				<el-table-column
					label="Район"
					prop="address"
				></el-table-column>

				<el-table-column
					label="Улица, дом"
					prop="address"
				>
					<!-- <template #default="{ row }">
						{{ row['Улица'] + ', ' + row['Дом'] }}
					</template> -->
				</el-table-column>
			</el-table>

			<BottomNavigationPanel
				:sticky="false"
				:filterable="false"
			></BottomNavigationPanel>
		</el-tab-pane>
	</el-tabs>
</template>

<style lang="scss" scoped>
	.account__descriptions {
		font-size: 14px;
		.descriptions__row {
			display: flex;
			align-items: center;
			flex-wrap: wrap;
			gap: 10px;
			margin-bottom: 10px;

			&:nth-child(n+4) {
				@media screen and (width < 1024px) {
					display: none;
				}
			}
		}
	}
</style>