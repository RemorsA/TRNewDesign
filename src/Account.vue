<script setup>
	import store from './store';
	import { ref, computed } from 'vue'

	const state = computed(() => store.state).value

	let isRefreshLink = ref(false)
	let visibleDesc = ref(window.matchMedia("(max-width: 768px)"))

	function signOut() {
		localStorage.removeItem('k')
		store.commit('routerGo', '/news')
	}
</script>

<template>
    <el-descriptions :column="1">
		<el-descriptions-item label="ФИО:" max-width="500">
			Усманов Олег Игоревич
		</el-descriptions-item>

		<el-descriptions-item label="Выход из учетной записи:">
			<el-button
				type="primary"
				@click="signOut"
			>
				Выйти
			</el-button>
		</el-descriptions-item>

		<el-descriptions-item label="Сменить оформление страницы на темную или светлую тему:">
			<el-switch
				v-model="store.state.isTheme"
				active-text="Темная"
				inactive-text="Светлая"
				@change="store.dispatch('setSettings')"
			></el-switch>
		</el-descriptions-item>

		<el-descriptions-item
			label='Всегда держать раскрытым список "Разделы" в меню слева:'
			v-if="!visibleDesc.matches"
		>
			<el-switch
				v-model="store.state.defaultMenuOpened"
				active-text="Раскрыт"
				inactive-text="Скрыт"
				@change="store.dispatch('setSettings'), isRefreshLink = true"
			></el-switch>

			<el-link
				v-show="isRefreshLink"
				style="gap: 5px; margin-left: 10px;"
				icon="Refresh"
				href="/home/account"
			>
				Перезагрузить
			</el-link>
		</el-descriptions-item>

		<el-descriptions-item
			label='Скрыть или раскрыть меню:'
			v-if="!visibleDesc.matches"
		>
			<el-switch
				v-model="store.state.isMenuCollapse"
				active-text="Раскрыт"
				inactive-text="Скрыт"
				@change="store.dispatch('setSettings')"
			></el-switch>
		</el-descriptions-item>
	</el-descriptions>

	<el-tabs>
		<el-tab-pane label="Контактные лица">
			<el-table
				:data="state.tData.slice(41)"
				stripe
				table-layout="fixed"
			>
				<el-table-column label="Контактное лицо" prop="name"></el-table-column>

				<el-table-column label="Тел." prop="phone"></el-table-column>

				<el-table-column label="Моб. телефон" prop="phone"></el-table-column>

				<el-table-column label="Skype" prop="email"></el-table-column>

				<el-table-column label="E-mail" prop="email"></el-table-column>

				<el-table-column label="Должность" prop="gender"></el-table-column>
			</el-table>
		</el-tab-pane>

		<el-tab-pane label="График платежей">
			<el-table
				:data="state.tData.slice(44)"
				stripe
				table-layout="fixed"
			>
				<el-table-column label="Загрузить" prop="">
					<template #default="{ row }">
						<el-button
							link
							style="font-size: 20px"
							type="primary"
							icon="Download"
						></el-button>
					</template>
				</el-table-column>

				<el-table-column label="Основание" prop="greeting"></el-table-column>

				<el-table-column label="Счет" prop="guid"></el-table-column>

				<el-table-column label="Сумма счета" prop="balance"></el-table-column>

				<el-table-column label="Сумма задолжности" prop="balance"></el-table-column>

				<el-table-column label="Конечная дата оплаты" prop="registered"></el-table-column>
			</el-table>
		</el-tab-pane>

		<el-tab-pane label="Адрес доставки">
			<el-table
				:data="state.tData.slice(39)"
				stripe
				table-layout="fixed"
			>
				<el-table-column label="Индекс" prop="longitude"></el-table-column>

				<el-table-column label="Страна" prop="favoriteFruit"></el-table-column>

				<el-table-column label="Регион" prop="address"></el-table-column>

				<el-table-column label="Населенный пункт" prop="address"></el-table-column>

				<el-table-column label="Район" prop="address"></el-table-column>

				<el-table-column label="Улица, дом" prop="address">
					<!-- <template #default="{ row }">
						{{ row['Улица'] + ', ' + row['Дом'] }}
					</template> -->
				</el-table-column>
			</el-table>
		</el-tab-pane>
	</el-tabs>
</template>

<style lang="scss" scoped></style>