<script setup>
    import store from './store'
    import Pagination from './components/Pagination.vue';
</script>

<template>
    <el-table class="el-table-custom"
        :data="store.state.tData.slice(45)"
        stripe
        border
    >
        <el-table-column
            min-width="60"
            width="60"
            align="center"
            type="selection"
        ></el-table-column>

        <el-table-column
            label="Наименование"
            prop="guid"
            min-width="130"
            width=""
        ></el-table-column>

        <el-table-column
            label="Артикул"
            prop="name"
            min-width="100"
            width=""
        ></el-table-column>

        <el-table-column
            label="Страна"
            prop="address"
            min-width="100"
            width=""
        ></el-table-column>

        <el-table-column
            label="Склад"
            prop="company"
            min-width="100"
            width=""
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            min-width="100"
            width=""
        ></el-table-column>

        <el-table-column
            label="Кол-во"
            prop=""
            min-width="175"
            width="175"
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
            width=""
        ></el-table-column>

        <el-table-column
            label="Убрать"
            prop=""
            min-width="80"
            width="80"
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

    <Pagination></Pagination>

    <el-row class="total-and-checkout__container"
        align="middle"
        justify="space-between"
    >
        <h5>Итого: 10022220, руб.</h5>

        <el-row class="checkout__items" align="middle">
            <p class="title">Ваша ссылка для заказа:</p>

            <el-input class="input__field"
                placeholder="Ссылка"
            ></el-input>

            <el-button
                icon="Right"
                type="primary"
            >
                Оформить заказ
            </el-button>
        </el-row>
    </el-row>
</template>

<style lang="scss" scoped>
    .total-and-checkout__container {
        margin-top: 20px;
        gap: 10px;
        flex-wrap: wrap;

        .checkout__items {
            flex-wrap: wrap;
            gap: inherit;

            .title {
                font-size: 14px;
            }

            .input__field {
                width: 300px;
            }
        }
    }
</style>