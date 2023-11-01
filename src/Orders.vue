<script setup>
    import store from './store';
    import Filter from './components/Filter.vue'
    import Pagination from './components/Pagination.vue'
    import DeliveryForm from './components/DeliveryForm.vue'
    import { ref } from 'vue'

    let isDeliveryForm = ref(false)
    let popperContent = ref(`
        <span class='popper__content'>
            <h4>Сумма товаров:</h4>
            519 450
        </span>

        <span class='popper__content'>
            <h4>Общий вес (кг):</h4>
            900
        </span>

        <span class='popper__content'>
            <h4>Стоимость доставки:</h4>
            7 981
        </span>

        <span class='popper__content'>
            <h4>Итого:</h4>
            527 431
        </span>
    `)
</script>

<template>
    <Filter :filters="[
        {
            key: 0,
            type: 'input',
            vModel: '',
            placeholder: 'Номер отгрузки'
        },
        {
            key: 1,
            type: 'input',
            vModel: '',
            placeholder: 'Ссылка для отгрузки'
        },
        {
            key: 2,
            type: 'date',
            vModel: '',
            placeholder: 'Период от'
        },
        {
            key: 3,
            type: 'date',
            vModel: '',
            placeholder: 'Период до'
        },
    ]">
        <el-radio-group :model-value="'Все'">
            <el-radio-button label="Все"></el-radio-button>
            <el-radio-button label="Активные"></el-radio-button>
            <el-radio-button label="Не активные"></el-radio-button>
        </el-radio-group>
    </Filter>

    <el-table
        :data="index === 3 ? store.state.tData.slice(47) : store.state.tData.slice(49)"
        stripe
        border
        v-for="(order, index) in store.state.tData.slice(45)"
        :key="index"
        style="margin-top: 20px;"
    >
        <el-table-column :label="order.name">
            <el-table-column
                type="selection"
                min-width=""
                width="50"
                align="center"
            ></el-table-column>

            <el-table-column
                label="Наименование"
                prop="name"
                min-width="130"
                width=""
            ></el-table-column>

            <el-table-column
                label="Кат. номер"
                prop="guid"
                min-width="110"
                width=""
            ></el-table-column>

            <el-table-column
                label="Страна"
                prop="address"
                min-width=""
                width=""
            ></el-table-column>

            <el-table-column
                label="Склад"
                prop="company"
                min-width=""
                width=""
            ></el-table-column>

            <el-table-column
                label="Вес"
                prop="latitude"
                min-width=""
                width=""
            ></el-table-column>

            <el-table-column
                label="Кол-во"
                prop="age"
                min-width=""
                width=""
            ></el-table-column>

            <el-table-column
                label="Ед. изм."
                prop="eyeColor"
                min-width=""
                width=""
            ></el-table-column>

            <el-table-column
                label="Цена"
                prop="balance"
                min-width=""
                width=""
            ></el-table-column>

            <el-table-column
                label="Сумма"
                prop="balance"
                min-width=""
                width=""
            ></el-table-column>

            <el-table-column
                label="Состояние"
                prop="isActive"
                min-width="100"
                width=""
            >
                <template #default="{ row }">
                    <span style="color: var(--el-color-warning)">
                        {{ row.isActive }}
                    </span>
                </template>
            </el-table-column>
        </el-table-column>
    </el-table>

    <Pagination>
        <el-tooltip
            raw-content
            :content="popperContent"
            popper-style="font-size: 14px;"
        >
            <el-button
                link
                type="primary"
                :size="store.state.size"
                @click="isDeliveryForm = true"
            >
                Открыть форму / <el-tag type="danger" style="margin-left: 5px;">10</el-tag>
            </el-button>
        </el-tooltip>
    </Pagination>

    <DeliveryForm
        v-model="isDeliveryForm"
    ></DeliveryForm>
</template>

<style lang="scss">
    .popper__content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>

<style lang="scss" scoped></style>