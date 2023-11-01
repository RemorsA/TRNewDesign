<script setup>
    import store from './store';
    import Filter from './components/Filter.vue'
    import Pagination from './components/Pagination.vue'
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
    ]"></Filter>

    <el-table
        style="margin-top: 20px;"
        :data="store.state.tData.slice(40)"
        stripe
        border
    >
        <el-table-column
            type="expand"
        >
            <template #default="props">
                <el-table
                    :data="store.state.tData.slice(44)"
                    :row-style="{
                        'background-color': 'var(--el-fill-color)',
                    }"
                    style="margin-bottom: 20px;"
                    size="small"
                >
                    <el-table-column
                        label="Наименование"
                        prop="name"
                        min-width=""
                        width=""
                    ></el-table-column>

                    <el-table-column
                        label="Кат. номер"
                        prop="guid"
                        min-width=""
                        width=""
                    ></el-table-column>

                    <el-table-column
                        label="Вес"
                        prop="age"
                        min-width=""
                        width="100"
                    ></el-table-column>

                    <el-table-column
                        label="Кол-во"
                        prop="age"
                        min-width=""
                        width="100"
                    ></el-table-column>

                    <el-table-column
                        label="Ед. изм."
                        prop="favoriteFruit"
                        min-width=""
                        width="100"
                    ></el-table-column>

                    <el-table-column
                        label="Цена, руб."
                        prop="balance"
                        min-width=""
                        width=""
                    ></el-table-column>

                    <el-table-column
                        label="Сумма, руб."
                        prop="balance"
                        min-width=""
                        width=""
                    ></el-table-column>
                </el-table>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop="download"
            min-width="60"
            width="60"
            align="center"
        >
            <template #default="{ row, index }">
                <el-button
                    icon="Printer"
                    type="success"
                    link
                    style="font-size: 20px;"
                ></el-button>
            </template>
        </el-table-column>

        <el-table-column
            label="Номер отгрузки"
            prop="latitude"
            min-width="140"
            width="140"
        ></el-table-column>

        <el-table-column
            label="Трек номер"
            prop="guid"
            min-width="150"
            width=""
        ></el-table-column>

        <el-table-column
            label="Cтатус"
            prop="eyeColor"
            min-width="160"
            width=""
        >
            <template #default="{ row }">
                <el-tag type="success">
                    Ваш заказ принят.
                </el-tag>

                Ожидайте счет на оплату.
            </template>
        </el-table-column>

        <el-table-column
            label="Cумма"
            prop="balance"
            min-width="100"
            width="100"
        ></el-table-column>

        <el-table-column
            label="Доставка"
            prop="address"
            min-width="150"
            width=""
        ></el-table-column>

        <el-table-column
            label="Дата отгрузки"
            prop="registered"
            min-width="130"
            width=""
        ></el-table-column>
    </el-table>

    <Pagination></Pagination>
</template>

<style lang="scss" scoped></style>