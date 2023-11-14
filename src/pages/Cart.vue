<script setup>
    import store from '@/store'
    import BottomNavigationPanel from '@/components/BottomNavigationPanel.vue';
    import TableTooltip from '@/components/TableTooltip.vue'
</script>

<template>
    <el-table
        :data="store.state.tData.slice(45)"
        stripe
        border
        size="small"
    >
        <el-table-column
            label=""
            prop=""
            width="40"
            align="center"
        >
            <template #default="{ row }">
                <el-checkbox
                    :model-value="row.isActive"
                ></el-checkbox>
            </template>
        </el-table-column>

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
            prop=""
        >
            <template #header>
                <TableTooltip
                    :content="`Для увеличения количества товара <br> необходимо произвести переоценку`"
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
            label="Убрать"
            prop=""
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

    <BottomNavigationPanel
        :filterable="false"
    ></BottomNavigationPanel>

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