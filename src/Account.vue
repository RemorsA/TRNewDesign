<script setup>
	import store from './store';
	import { ref } from 'vue'

	let isRefreshLink = ref(false)
	let visibleDesc = ref(window.matchMedia("(max-width: 768px)"))

	function signOut() {
		localStorage.removeItem('k')
		store.commit('routerGo', '/home/news')
	}
</script>

<template>
    <div class="account-container">
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
					href="/account"
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

        <el-tabs class="table-tabs">
			<el-tab-pane label="Контактные лица">
				<el-table
					table-layout="auto"
					:data="[]"
				>
					<el-table-column label="Контактное лицо" prop="ФИО"></el-table-column>
					<el-table-column label="Тел." prop="НомерТелефона"></el-table-column>
					<el-table-column label="Моб. телефон" prop="МобильныйНомер"></el-table-column>
					<el-table-column label="Skype" prop="Skype"></el-table-column>
					<el-table-column label="E-mail" prop="Email"></el-table-column>
					<el-table-column label="Должность" prop="Должность"></el-table-column>
				</el-table>
			</el-tab-pane>

			<el-tab-pane label="График платежей">
				<el-table
					table-layout="auto"
					:data="[]"
				>
					<el-table-column label="Загрузить" prop="">
						<template #default="{ row }">
							<el-button
								link
								type="primary"
								style="font-size: 20px;"
								icon="Download"
							></el-button>
						</template>
					</el-table-column>
					<el-table-column label="Основание" prop="Основание.Наименование"></el-table-column>
					<el-table-column label="Счет" prop="Счет"></el-table-column>
					<el-table-column label="Сумма счета" prop="СуммаСчета"></el-table-column>
					<el-table-column label="Сумма задолжности" prop="СуммаЗадолженности"></el-table-column>
					<el-table-column label="Конечная дата оплаты" prop="КонечнаяДатаОплаты"></el-table-column>
				</el-table>
			</el-tab-pane>

			<el-tab-pane label="Адрес доставки">
				<el-table
					table-layout="auto"
					:data="[]"
				>
					<el-table-column label="Индекс" prop="Индекс"></el-table-column>
					<el-table-column label="Страна" prop="Страна"></el-table-column>
					<el-table-column label="Регион" prop="Регион"></el-table-column>
					<el-table-column label="Населенный пункт" prop="НаселенныйПункт"></el-table-column>
					<el-table-column label="Район" prop="Район"></el-table-column>
					<el-table-column label="Улица, дом" prop="">
						<template #default="{ row }">
							{{ row['Улица'] + ', ' + row['Дом'] }}
						</template>
					</el-table-column>
				</el-table>
			</el-tab-pane>
		</el-tabs>
    </div>
</template>

<style lang="scss" scoped>
    .account-container {
        .table-tabs {
            margin-top: 20px;
        }
    }
</style>