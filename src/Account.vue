<script setup>
	import { ref, onMounted, watch } from 'vue'
    import { contacts, paymentSchedule, shippingAddress } from './data/accountData'

    let switchTheme = ref(false)
    let isSectionsDefaultOpened = ref(true)
	let isMenuCollapse = ref(true)

    onMounted(async () => {
        let theme = JSON.parse(localStorage.getItem('THEME'))

        if (theme !== null) {
            switchTheme.value = theme
        }
    })

    watch(() => switchTheme.value, (value) => {
        localStorage.setItem('THEME', JSON.stringify(value))

        if (value) {
            document.querySelector('html').className = 'dark'
        }
        else {
            document.querySelector('html').className = ''
        }
    })
</script>

<template>
    <div class="account-container">
        <el-descriptions :column="1">
			<el-descriptions-item label="ФИО:" max-width="500">
				Усманов Олег Игоревич
			</el-descriptions-item>

            <el-descriptions-item label="Выход из учетной записи:">
				<el-button type="primary">
					Выйти
				</el-button>
			</el-descriptions-item>

			<el-descriptions-item label="Сменить оформление страницы на темную или светлую тему:">
				<el-switch
					v-model="switchTheme"
					active-text="Темная"
                    inactive-text="Светлая"
				></el-switch>
			</el-descriptions-item>

			<el-descriptions-item label='Всегда держать раскрытым список "Разделы" в меню слева:'>
				<el-switch
                    v-model="isSectionsDefaultOpened"
                    active-text="Раскрыт"
                    inactive-text="Скрыт"
				></el-switch>
			</el-descriptions-item>

			<el-descriptions-item label='Скрыть или раскрыть меню'>
				<el-switch
                    v-model="isMenuCollapse"
                    active-text="Раскрыт"
                    inactive-text="Скрыт"
				></el-switch>
			</el-descriptions-item>
		</el-descriptions>

        <el-tabs class="table-tabs">
			<el-tab-pane label="Контактные лица">
				<el-table
					table-layout="auto"
					:data="contacts.ContactsTable"
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
					:data="paymentSchedule.PaymentShedule"
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
					:data="shippingAddress.ShippingAddresses"
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