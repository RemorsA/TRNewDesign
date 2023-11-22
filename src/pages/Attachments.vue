<script setup>
    import store from '@/store/store';
    import { ref } from 'vue'

    let currentTab = ref('1')
    let tabs = ref([
        { label: '1', title: 'Каретка бокового смещения', img: 'https://shop.liftnet.ru/img/attachments-i1.png' },
        { label: '2', title: 'Захваты киповые', img: 'https://shop.liftnet.ru/img/attachments-i2.png' },
        { label: '3', title: 'Захваты для шин', img: 'https://shop.liftnet.ru/img/attachments-i3.png' },
        { label: '4', title: 'Захваты для рулонов', img: 'https://shop.liftnet.ru/img/attachments-i4.png' },
        { label: '5', title: 'Ротаторы', img: 'https://shop.liftnet.ru/img/attachments-i5.png' },
        { label: '6', title: 'Позиционеры', img: 'https://shop.liftnet.ru/img/attachments-i6.png' },
    ])
</script>

<template>
    <el-tabs v-model="currentTab">
        <el-tab-pane
            :label="tab.title"
            v-for="(tab, index) in tabs"
            :key="index"
        >
            <template #label>
                <el-tooltip
                    raw-content
                    :content="`<img src='${tab.img}' style='width: 150px; height: 100px'>`"
                >
                    {{ tab.title }}
                </el-tooltip>
            </template>

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
                        <div class="table-expand__content">
                            <Descriptions
                                :descriptions="['Набережные Челны']"
                                extra="Количество на складах"
                                extra-icon="OfficeBuilding"
                            >
                                <template #label="{ row }">
                                    {{ row }}:
                                </template>

                                <template #value>
                                    {{ record.row.age }}
                                </template>
                            </Descriptions>

                            <Descriptions
                                :descriptions="[
                                    { label: 'Класс монтажа', value: 'age' },
                                    { label: 'Грузоподъемность (кг.)', value: 'age' },
                                    { label: 'Центр тяжести (мм.)', value: 'age' },
                                    { label: 'Ширина рамы (мм.)', value: 'age' },
                                    { label: 'Диапазон смещения (+/- мм.)', value: 'age' },
                                ]"
                                extra="Параметры"
                            >
                                <template #label="{ row }">
                                    {{ row.label }}:
                                </template>

                                <template #value="{ row }">
                                    {{ record.row[row.value] }}
                                </template>
                            </Descriptions>
                        </div>
                    </template>
                </el-table-column>

                <el-table-column
                    label="Внутренний код"
                    prop="longitude"
                ></el-table-column>

                <el-table-column
                    label="Наименование"
                    prop="name"
                ></el-table-column>

                <el-table-column
                    label="Бренд"
                    prop="company"
                ></el-table-column>

                <el-table-column
                    label="Цена, руб."
                    prop="balance"
                    sortable
                >
                    <template #default="{ row }">
                        <el-row align="middle" style="gap: 10px;">
                            {{ row.balance }}

                            <el-tag
                                type="warning"
                                effect="plain"
                                round
                            >
                                5%
                            </el-tag>
                        </el-row>
                    </template>
                </el-table-column>

                <el-table-column
                    label=""
                    prop=""
                    width="240"
                >
                    <template #default="{ row }">
                        <el-row align="middle" style="gap: 10px;">
                            <el-input-number
                                size="small"
                                :model-value="1"
                                :min="0"
                            ></el-input-number>

                            <el-button
                                icon="ShoppingCart"
                                link
                                type="primary"
                            >
                                Заказать
                            </el-button>
                        </el-row>
                    </template>
                </el-table-column>
            </el-table>
        </el-tab-pane>
    </el-tabs>

    <BottomNavigationPanel
        :filters="[
            { key: 1, type: 'select', vModel: '', placeholder: 'Бренд' },
            { key: 2, type: 'select', vModel: '', placeholder: 'Класс монтажа' },
            { key: 3, type: 'select', vModel: '', placeholder: 'Грузоподъемность' },
            { key: 4, type: 'select', vModel: '', placeholder: 'Центр тяжести' },
            { key: 5, type: 'select', vModel: '', placeholder: 'Ширина рамы' },
            { key: 6, type: 'select', vModel: '', placeholder: 'Диапазон смещения' },
        ]"
    ></BottomNavigationPanel>
</template>

<style lang="scss" scoped>
    .table-expand__content {
        margin: 4px 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>