<script setup>
    import store from './store'
    import { computed } from 'vue'

    const state = computed(() => store.state).value
</script>

<template>
    <el-table class="el-table-custom"
        :data="state.tData.slice(45)"
        stripe
    >
        <el-table-column
            label="В заказ"
            prop=""
            width="80"
            min-width="80"
        >
            <template #default="{ row, index }">
                <el-checkbox
                    :model-value="row.isActive"
                ></el-checkbox>
            </template>
        </el-table-column>

        <el-table-column
            label="Наименование"
            prop="guid"
            min-width="130"
        ></el-table-column>

        <el-table-column
            label="Артикул"
            prop="name"
            min-width="100"
        ></el-table-column>

        <el-table-column
            label="Страна"
            prop="address"
            min-width="100"
        ></el-table-column>

        <el-table-column
            label="Склад"
            prop="company"
            min-width="100"
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            min-width="100"
        ></el-table-column>

        <el-table-column
            label="Количество"
            prop=""
            width="175"
            min-width="175"
        >
            <template #default>
                <el-input-number
                    :model-value="1"
                ></el-input-number>
            </template>
        </el-table-column>

        <el-table-column
            label="Сумма, руб."
            prop="balance"
            min-width="120"
        ></el-table-column>

        <el-table-column
            label="Убрать"
            prop=""
            width="80"
            min-width="80"
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

    <el-card style="margin-top: 20px; text-align: right;">
        <h5>
            Итого: 1000, руб.
        </h5>
    </el-card>

    <el-row justify="center" style="margin-top: 20px;">
        <el-pagination
            :pager-count="11"
            layout="sizes, prev, pager, next"
            :total="state.tData.slice(45)?.length"
            :page-sizes="[10, 20, 40, 60, 80, 100]"
        ></el-pagination>
    </el-row>

    <el-row class="checkout__items" align="middle">
        <span class="title">Ваша ссылка для заказа:</span>

        <el-input class="link__field"
            placeholder="Ссылка"
        ></el-input>

        <el-button
            icon="Right"
            type="primary"
        >
            Оформить заказ
        </el-button>
    </el-row>
</template>

<style lang="scss">
    .checkout__items {
        gap: 20px;
        margin-top: 20px;
        flex-wrap: wrap;

        .title {
            display: block;
        }

        .link__field {
            max-width: 500px;
        }
    }
</style>