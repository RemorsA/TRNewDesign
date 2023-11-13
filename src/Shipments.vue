<script setup>
    import store from './store';
    import BottomNavigationPanel from '@/components/BottomNavigationPanel.vue';
    import TableTooltip from '@/components/TableTooltip.vue'
</script>

<template>
    <el-table
        :data="store.state.tData.slice(40)"
        stripe
        border
        size="small"
    >
        <el-table-column
            type="expand"
            width="40"
            align="center"
        >
            <template #default="props">
                <el-card style="margin: 4px 8px;">
                    <el-table
                        :data="store.state.tData.slice(47)"
                        size="small"
                    >
                        <el-table-column
                            label="Наименование"
                            prop="name"
                        ></el-table-column>

                        <el-table-column
                            label="Кат. номер"
                            prop="guid"
                        ></el-table-column>

                        <el-table-column
                            label="Вес"
                            prop="age"
                        ></el-table-column>

                        <el-table-column
                            label="Кол-во"
                            prop="age"
                        ></el-table-column>

                        <el-table-column
                            label="Ед. изм."
                            prop="favoriteFruit"
                        ></el-table-column>

                        <el-table-column
                            label="Цена, руб."
                            prop="balance"
                        ></el-table-column>

                        <el-table-column
                            label="Сумма, руб."
                            prop="balance"
                        ></el-table-column>
                    </el-table>
                </el-card>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop="download"
            width="60"
            align="center"
        >
            <template #header>
                <TableTooltip :text="`
                    <span style='color: var(--el-color-danger)'>Красный</span> - загрузка счета не доступна,
                    <br>
                    <span style='color: var(--el-color-success)'>Зеленый</span> - загрузка счета доступна
                `"></TableTooltip>
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
            sortable
        ></el-table-column>

        <el-table-column
            label="Трек номер"
            prop="guid"
        >
            <template #header>
                <TableTooltip :text="`
                    По факту забора груза появится
                    <br>
                    трек-номер для отслеживания отправки
                `">
                    Трек номер
                </TableTooltip>
            </template>
        </el-table-column>

        <el-table-column
            label="Cтатус"
            prop="eyeColor"
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
            sortable
        ></el-table-column>

        <el-table-column
            label="Доставка"
            prop="address"
        ></el-table-column>

        <el-table-column
            label="Дата отгрузки"
            prop="registered"
            sortable
        >
            <template #header>
                <TableTooltip :text="`
                    В случае создания заказа до 11:00 по Москве,
                    <br>
                    отгрузка будт произведена в текущий день.
                    <br>
                    Если после 11:00, то на следующий
                `">
                    Дата отгрузки
                </TableTooltip>
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