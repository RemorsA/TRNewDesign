<script setup>
    import store from './store';
</script>

<template>
    <el-card>
        <div class="filters">
            <span class="title">
                <el-icon><Filter></Filter></el-icon>
                Фильтр
            </span>

            <div class="fields">
                <el-input
                    v-for="(filter, index) in 2"
                    :key="index"
                    :placeholder="(index === 0) ? 'Номер отгрузки' : (index === 1) ? 'Ссылка для отгрузки' : ''"
                    clearable
                ></el-input>

                <el-date-picker
                    v-for="(filter, index) in 2"
                    :key="index"
                    style="width: 100%;"
                    :placeholder="(index === 0) ? 'Период от - ?' : (index === 1) ? 'Период до - ?' : ''"
                ></el-date-picker>
            </div>

            <div class="navigations">
                <el-button
                    icon="Close"
                    type="primary"
                >
                    Очистить поиск
                </el-button>
            </div>
        </div>
    </el-card>

    <el-table
        style="margin-top: 20px;"
        :data="store.state.tData.slice(45)"
        stripe
    >
        <el-table-column type="expand">
            <template #default="props">
                <el-table
                    :data="store.state.tData.slice(44)"
                    :row-style="{
                        'background-color': 'var(--el-fill-color)',
                    }"
                    style="margin-bottom: 20px;"
                >
                    <el-table-column
                        label="Наименование"
                        prop="name"
                        min-width="150"
                    ></el-table-column>

                    <el-table-column
                        label="Кат. номер"
                        prop="guid"
                        min-width="150"
                    ></el-table-column>

                    <el-table-column
                        label="Вес"
                        prop="age"
                        min-width="90"
                        width="90"
                    ></el-table-column>

                    <el-table-column
                        label="Количество"
                        prop="age"
                        min-width="110"
                        width="110"
                    ></el-table-column>

                    <el-table-column
                        label="Ед. изм."
                        prop="favoriteFruit"
                        min-width="100"
                        width="100"
                    ></el-table-column>

                    <el-table-column
                        label="Цена, руб."
                        prop="balance"
                        min-width="100"
                    ></el-table-column>

                    <el-table-column
                        label="Сумма, руб."
                        prop="balance"
                        min-width="110"
                    ></el-table-column>
                </el-table>
            </template>
        </el-table-column>

        <el-table-column
            label="Загрузить"
            prop="download"
            min-width="100"
            width="100"
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
            label="Трек номер"
            prop="guid"
            min-width="110"
        ></el-table-column>

        <el-table-column
            label="Cтатус"
            prop="eyeColor"
            min-width="160"
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
        ></el-table-column>

        <el-table-column
            label="Доставка"
            prop="address"
            min-width="150"
        ></el-table-column>

        <el-table-column
            label="Дата отгрузки"
            prop="registered"
            min-width="150"
        ></el-table-column>
    </el-table>

    <el-row justify="center" style="margin-top: 20px;">
        <el-pagination
            :pager-count="11"
            layout="sizes, prev, pager, next"
            :total="store.state.tData.slice(45)?.length"
            :page-sizes="[10, 20, 40, 60, 80, 100]"
        ></el-pagination>
    </el-row>
</template>

<style lang="scss" scoped>
    .filters {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .title {
            font-size: 16px;
            font-weight: bold;
            display: block;
        }
        .fields {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .navigations {
            display: inherit;
            align-items: center;
            gap: inherit;
            flex-wrap: wrap;
        }
    }
</style>