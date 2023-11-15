<script setup>
    import store from '@/store/store';
    import { ref } from 'vue'

    let isEvaluate = ref(false)
</script>

<template>
    <el-table
        :data="store.state.tData.slice(40)"
        border
        stripe
        size="small"
    >
        <el-table-column
            type="expand"
            width="40"
            align="center"
        >
            <template #default="record">
                <div class="table__expand-content">
                    <MeasurementPictures :pictures="store.state.measutementsPictures"></MeasurementPictures>

                    <Descriptions
                        :descriptions="[
                            { label: 'Мощность (кВт)', value: '34' },
                            { label: 'Крутящий момент (об/мин)', value: '2500' },
                            { label: 'Тип топлива', value: 'Дизель' },
                            { label: 'Вес (Кг)', value: '252' },
                            { label: 'ширина 1', value: '252' },
                            { label: 'ширина 2', value: '252' },
                            { label: 'ширина 3', value: '252' },
                            { label: 'ширина 4', value: '252' },
                            { label: 'ширина 5', value: '252' },
                            { label: 'ширина 6', value: '252' },
                            { label: 'ширина 7', value: '252' },
                        ]"
                        :extra="`Ваш кат. номер 21389213819 / ${record.row.name}`"
                    >
                        <template #label="{ row }">
                            {{ row.label }}:
                        </template>

                        <template #value="{ row }">
                            {{ row.value }}
                        </template>
                    </Descriptions>
                </div>
            </template>
        </el-table-column>

        <el-table-column
            label="Код"
            prop="latitude"
        ></el-table-column>

        <el-table-column
            label="Наименование"
            prop="registered"
        ></el-table-column>

        <el-table-column
            label="Комментарий"
            prop="about"
        >
            <template #default="{ row }">
                <TooltipText
                    :content="row.about"
                    :text="row.about"
                ></TooltipText>
            </template>
        </el-table-column>

        <el-table-column
            label="Кол-во"
            prop="isActive"
            width="140"
        >
            <template #default="{ row }">
                <el-input-number
                    :model-value="1"
                    size="small"
                ></el-input-number>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop=""
            width="120"
        >
            <template #default="{ row }">
                <el-button
                    link
                    type="primary"
                    icon="Top"
                    @click="isEvaluate = true"
                >
                    Проценить
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-drawer
        v-model="isEvaluate"
        direction="btt"
        size="80%"
    >
        <el-table
            :data="store.state.tData.slice(47)"
            border
            stripe
            size="small"
        >
            <el-table-column
                label="Кол-во (запрошено)"
                prop="age"
            ></el-table-column>

            <el-table-column
                label="Ед. изм."
                prop="eyeColor"
            ></el-table-column>

            <el-table-column
                label="Склад"
                prop="company"
            ></el-table-column>

            <el-table-column
                label="Страна"
                prop="address"
            ></el-table-column>

            <el-table-column
                label="Вес (кг.)"
                prop="age"
            ></el-table-column>

            <el-table-column
                label="Кол-во (шт.)"
                prop="age"
            ></el-table-column>

            <el-table-column
                label="Цена, руб."
                prop="balance"
            ></el-table-column>

            <el-table-column
                label="Сумма, руб."
                prop="balance"
            ></el-table-column>

            <el-table-column
                label="РРЦ"
                prop="balance"
            >
                <template #header>
                    <TableTooltip
                        content="Рекомендовано розничаня цена"
                        text="РРЦ"
                    ></TableTooltip>
                </template>
            </el-table-column>

            <el-table-column
                label=""
                prop=""
                width="120"
            >
                <template #default="{ row }">
                    <el-button
                        link
                        type="primary"
                        icon="ShoppingCart"
                    >
                        В корзину
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-drawer>

    <BottomNavigationPanel
        :filters="[
            { key: 0, type: 'select', vModel: '', placeholder: 'Бренд' },
            { key: 1, type: 'input', vModel: '', placeholder: 'Модель погрузчика' },
            { key: 2, type: 'select', vModel: '', placeholder: 'Товарная группа' },
            { key: 3, type: 'input', vModel: '', placeholder: 'Наименование запчасти' },
            // { key: 4, type: 'input', vModel: '', placeholder: 'Запрос по артикулу' }
        ]"
    >
        <el-radio-group :model-value="false">
            <el-radio-button :label="true">Только процененные</el-radio-button>
            <el-radio-button :label="false">Все</el-radio-button>
        </el-radio-group>
    </BottomNavigationPanel>
</template>

<style lang="scss" scoped>
    .table__expand-content {
        margin: 4px 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>