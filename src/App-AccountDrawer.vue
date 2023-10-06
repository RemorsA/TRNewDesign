<script setup>
	import { ref } from 'vue'

    defineProps({ modelValue: Boolean })

	defineEmits([ 'update:modelValue' ])

	let switchTheme = ref(false)
</script>

<template>
    <el-drawer class="drawer-account"
		:model-value="modelValue"
		@close="$emit('update:modelValue', false)"
		size="20%"
		title="Учетная запись"
	>
		<el-descriptions :column="1">
			<el-descriptions-item label="ФИО:">
				Усманов Олег Игоревич
			</el-descriptions-item>

			<el-descriptions-item label="Сменить оформление страницы:">
				<el-switch
					v-model="switchTheme"
					active-icon="Moon"
					inactive-icon="Sunny"
				></el-switch>
			</el-descriptions-item>

			<el-descriptions-item>
				<el-button
					icon="Right"
				>
					Контактные лица
				</el-button>
			</el-descriptions-item>

			<el-descriptions-item>
				<el-button
					icon="Right"
				>
					График платежей
				</el-button>
			</el-descriptions-item>

			<el-descriptions-item>
				<el-button
					icon="Right"
				>
					Адреса доставки
				</el-button>
			</el-descriptions-item>
		</el-descriptions>

		<!-- <el-tabs style="margin-top: 20px;">
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
		</el-tabs> -->

		<template #footer>
			<el-button
				style="width: 100%"
				icon="Back"
			>
				Выйти из учетной записи
			</el-button>
		</template>
	</el-drawer>
</template>

<style lang="scss" scoped>
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