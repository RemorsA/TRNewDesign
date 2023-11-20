<script setup>
    import store from '@/store/store'
    import { ref, onMounted } from 'vue'

    onMounted(() => {
        store.state.tData.slice(40).forEach(el => {
            if (el.isActive) {
                table.value.toggleRowSelection(el, undefined)
            }
        })
    })

    const table = ref()
</script>

<template>
    <el-table
        :data="store.state.tData.slice(40)"
        stripe
        border
        size="small"
        ref="table"
    >
        <el-table-column
            width="40"
            align="center"
            type="selection"
        ></el-table-column>

        <el-table-column
            label="Наименование"
            prop="guid"
        ></el-table-column>

        <el-table-column
            label="Артикул"
            prop="name"
        ></el-table-column>

        <el-table-column
            label="Страна"
            prop="address"
        ></el-table-column>

        <el-table-column
            label="Склад"
            prop="company"
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
        ></el-table-column>

        <el-table-column
            label="Кол-во"
        >
            <template #header>
                <TableTooltip
                    content="Для увеличения количества товара <br> необходимо произвести переоценку"
                    text="Кол-во"
                ></TableTooltip>
            </template>

            <template #default>
                <el-input-number
                    :model-value="1"
                    size="small"
                ></el-input-number>
            </template>
        </el-table-column>

        <el-table-column
            label="Сумма, руб."
            prop="balance"
        ></el-table-column>

        <el-table-column
            width="50"
            align="center"
        >
            <template #default>
                <el-button
                    type="danger"
                    icon="Delete"
                    link
                    style="font-size: 20px;"
                ></el-button>
            </template>
        </el-table-column>
    </el-table>

    <BottomNavigationPanel
        :filterable="false"
    >
        <span style="font-size: 14px">Итого: 10022220, руб.</span>

        <el-input
            style="width: 250px;"
            placeholder="Ваша ссылка для заказа:"
        ></el-input>

        <el-button
            icon="Right"
            type="primary"
        >
            Оформить заказ
        </el-button>
    </BottomNavigationPanel>
</template>

<style lang="scss" scoped></style>