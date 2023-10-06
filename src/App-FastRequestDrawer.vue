<script setup>
    import { ref } from 'vue'

    defineProps({ modelValue: Boolean })

    defineEmits([ 'update:modelValue' ])

	let fastRequestArticle = ref('')
</script>

<template>
    <el-drawer
		:model-value="modelValue"
		title="Быстрый запрос по артикулу"
		size="70%"
        @close="$emit('update:modelValue', false)"
    >
		<div class="dialog-fast_request">
			<el-input class="dialog-fast_request-input"
				placeholder="Введите артикул"
				v-model="fastRequestArticle"
				:disabled="false"
			></el-input>

			<el-button
				icon="Search"
				:loading="false"
			>
				Сделать запрос
			</el-button>
		</div>

		<div class="dialog-request_response">
			<div class="request_response-content">
				<el-image class="request_response-content--picture"
					fit="cover"
					src="https://upload.wikimedia.org/wikipedia/commons/3/35/N6.3000.156.000_-_%D0%9E%D1%81%D1%8C.jpg"
					:preview-src-list="[ 'https://upload.wikimedia.org/wikipedia/commons/3/35/N6.3000.156.000_-_%D0%9E%D1%81%D1%8C.jpg' ]"
					:hide-on-click-modal="true"
					preview-teleported
				></el-image>

				<el-descriptions :column="1">
					<el-descriptions-item label="Наименование:">
						Аммортизатор вальца катка
					</el-descriptions-item>

					<el-descriptions-item label="Ваш кат. номер:">
						00000038823
					</el-descriptions-item>

					<el-descriptions-item>
						<el-button
							icon="Search"
							:loading="false"
						>
							Посмотреть замеры
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

	.dialog-request_response {
		margin-top: 20px;
		.request_response-content {
			display: flex;
			align-items: flex-start;
			gap: 20px;

			.request_response-content--picture {
				width: 500px;
				height: 200px;
				min-width: 300px;
				border: 1px solid var(--el-border-color);
				padding: 2px;
			}
		}
	}
</style>