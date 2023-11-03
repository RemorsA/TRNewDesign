<script setup>
    import store from './store';
    import BottomNavigationPanel from '@/components/BottomNavigationPanel.vue';
</script>

<template>
    <el-table
        :data="store.state.tData.slice(40)"
        stripe
        border
    >
        <el-table-column
            type="expand"
            min-width="40"
            width="40"
            align="center"
        >
            <template #default="props">
                <el-card style="margin: 0 8px;">
                    <el-table
                        :data="store.state.tData.slice(47)"
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
                </el-card>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop="download"
            min-width="60"
            width="60"
            align="center"
        >
            <template #header>
                <el-tooltip
                    :content="`
                        <span style='color: var(--el-color-danger)'>Красный</span> - загрузка счета не доступна,
                        <br>
                        <span style='color: var(--el-color-success)'>Зеленый</span> - загрузка счета доступна
                    `"
                    placement="top"
                    raw-content
                >
                    <el-icon><QuestionFilled></QuestionFilled></el-icon>
                </el-tooltip>
            </template>

            <template #default="{ row, index }">
                <el-button
                    icon="Printer"
                    :type="row.isActive ? 'success' : 'danger'"
                    link
                    style="font-size: 20px;"
                ></el-button>
            </template>
        </el-table-column>

        <el-table-column
            label="Номер отгрузки"
            prop="latitude"
            min-width="160"
            width="160"
            sortable
        ></el-table-column>

        <el-table-column
            label="Трек номер"
            prop="guid"
            min-width="150"
            width=""
        >
            <template #header>
                <el-tooltip
                    :content="`
                        По факту забора груза появится
                        <br>
                        трек-номер для отслеживания отправки
                    `"
                    placement="top"
                    raw-content
                >
                    <span>
                        <el-icon><QuestionFilled></QuestionFilled></el-icon>
                        Трек номер
                    </span>
                </el-tooltip>
            </template>
        </el-table-column>

        <el-table-column
            label="Cтатус"
            prop="eyeColor"
            min-width="160"
            width=""
            sortable
        >
            <template #default="{ row }">
                <span :style="{
                    'color': row.isActive ? 'var(--el-color-success)' : 'var(--el-color-danger)'
                }">
                    
                    {{ row.isActive ? 'Ваш заказ принят. Ожидайте счет на оплату.' : 'Удален' }}
                </span>
            </template>
        </el-table-column>

        <el-table-column
            label="Cумма"
            prop="balance"
            min-width="100"
            width="100"
            sortable
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
            min-width="170"
            width=""
            sortable
        >
            <template #header>
                <el-tooltip
                    :content="`
                        В случае создания заказа до 11:00 по Москве,
                        <br>
                        отгрузка будт произведена в текущий день.
                        <br>
                        Если после 11:00, то на следующий
                    `"
                    placement="top"
                    raw-content
                >
                    <span>
                        <el-icon><QuestionFilled></QuestionFilled></el-icon>
                        Дата отгрузки
                    </span>
                </el-tooltip>
            </template>

            <template #default="{ row }">
                {{ row.registered }}
            </template>
        </el-table-column>
    </el-table>

    <BottomNavigationPanel
        :filters="[
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
        ]"
    ></BottomNavigationPanel>
</template>

<style lang="scss" scoped></style>