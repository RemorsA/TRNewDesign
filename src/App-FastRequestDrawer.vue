<script setup>
    import { ref } from 'vue'

    defineProps({ modelValue: Boolean })

    defineEmits([ 'update:modelValue' ])

	const tableData = ref([
		{
			comment: 'Ваш комментарий будет тут.',
			count: '2',
			unit: '3',
			store: 'Москва',
			side: 'Россия',
			weight: '13 кг',
			amount: '2',
			price: '120 000',
			sum: '240 000',
			rrc: ''
		},
		{
			comment: 'Ваш комментарий будет тут',
			count: '2',
			unit: '3',
			store: 'Москва',
			side: 'Россия',
			weight: '13 кг',
			amount: '2',
			price: '120 000',
			sum: '240 000',
			rrc: ''
		},
	])

	let requestForm = ref({
		article: '93274611'
	})
	const requestRules = ref({
		article: [{ required: true, message: 'Вы не указали артикул' }]
	})
	let formRef = ref()

	let loadingSearchForm = ref(false)
	let isAnswer = ref(false)

	
</script>

<template>
    <el-drawer
		:model-value="modelValue"
		title="Быстрый запрос по артикулу"
		size="60%"
        @close="$emit('update:modelValue', false)"
    >
		<el-form
			inline
			ref="formRef"
			:model="requestForm"
			:rules="requestRules"
		>
			<el-form-item
				ref="article"
				prop="article"
				label="Артикул"
			>
				<el-input
					placeholder="Введите артикул"
					v-model="requestForm.article"
					:disabled="loadingSearchForm"
					@keyup.enter="sendRequest"
					clearable
					style="width: 300px"
				></el-input>
			</el-form-item>

			<el-form-item>
				<el-button
					icon="Search"
					:loading="loadingSearchForm"
					@click="sendRequest(formRef)"
				>
					Сделать запрос
				</el-button>
			</el-form-item>
		</el-form>

		<el-divider
			content-position="left"
			v-show="isAnswer"
		>
			Ответ
		</el-divider>

		<div class="request_response-content"
			v-show="isAnswer"
		>
			<el-image class="request_response-content--picture"
				fit="cover"
				src="https://upload.wikimedia.org/wikipedia/commons/3/35/N6.3000.156.000_-_%D0%9E%D1%81%D1%8C.jpg"
				:preview-src-list="[ 'https://upload.wikimedia.org/wikipedia/commons/3/35/N6.3000.156.000_-_%D0%9E%D1%81%D1%8C.jpg' ]"
				:hide-on-click-modal="true"
				preview-teleported
			></el-image>

			<el-descriptions class="request_response-content--params"
				:column="1"
			>
				<el-descriptions-item label="Наименование:">
					Аммортизатор вальца катка
				</el-descriptions-item>

				<el-descriptions-item label="Ваш кат. номер:">
					00000038823
				</el-descriptions-item>

				<el-descriptions-item>
					<el-button
						icon="Tickets"
						:loading="false"
					>
						Посмотреть замеры
					</el-button>
				</el-descriptions-item>
			</el-descriptions>
		</div>

		<el-table class="request_response-table"
			table-layout="auto"
			:data="tableData"
			v-show="isAnswer"
		>
			<el-table-column label="Комментарий" prop="comment" width="150"></el-table-column>

			<el-table-column label="Кол-во. (запрошено)" prop="count" width="100"></el-table-column>

			<el-table-column label="Ед. изм." prop="unit" width="80"></el-table-column>

			<el-table-column label="Склад" prop="store" width="100"></el-table-column>

			<el-table-column label="Страна" prop="side" width="80"></el-table-column>

			<el-table-column label="Вес, кг." prop="weight" width="80"></el-table-column>

			<el-table-column label="Кол. шт." prop="amount" width="80"></el-table-column>

			<el-table-column label="Цена за ед." prop="price" width="110"></el-table-column>

			<el-table-column label="Сумма, руб." prop="sum" width="110"></el-table-column>

			<el-table-column label="РРЦ" prop="rrc"></el-table-column>

			<el-table-column label="" prop="" width="110">
				<template #default>
					<el-button
						link
						icon="ShoppingCart"
						type="primary"
					>
						В корзину
					</el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-drawer>
</template>

<style lang="scss" scoped>
    .dialog-fast_request {
		display: flex;
		align-items: center;
		gap: 20px;
		white-space: nowrap;

		.dialog-fast_request-input {
			width: 300px;
		}
	}

	.request_response-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 20px;

		.request_response-content--picture {
			height: 200px;
			border: 1px solid var(--el-border-color);
			border-radius: var(--el-border-radius-base);
		}

		.request_response-content--params {
			border: 1px solid var(--el-border-color);
			border-radius: var(--el-border-radius-base);
			padding: 10px;
			height: 100%;
		}
	}

	.request_response-table {
		margin-top: 20px;
		border: 1px solid var(--el-border-color);
		border-radius: var(--el-border-radius-base);
	}
</style>