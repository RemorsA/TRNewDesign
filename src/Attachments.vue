<script setup>
    import TableTooltip from '@/components/TableTooltip.vue'
    import BottomNavigationPanel from '@/components/BottomNavigationPanel.vue';
    import DeliveryForm from './components/DeliveryForm.vue'
    import Descriptions from '@/components/Descriptions.vue'
    import store from './store';
    import { ref } from 'vue'

    let currentTab = ref('1')
</script>

<template>
    <el-table class="el-table-custom"
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
            <template #default="{ row }">
                <Descriptions
                    style="margin: 4px 8px;"
                    :descriptions="['Набережные Челны']"
                    extra="Количество на складах"
                    extra-icon="OfficeBuilding"
                >
                    <template #label="{ row }">
                        {{ row }}:
                    </template>

                    <template #value>
                        {{ row.age }}
                    </template>
                </Descriptions>
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
            label="Класс монтажа"
            prop="age"
            sortable
        ></el-table-column>

        <el-table-column
            label="Грузоподъемность (кг.)"
            prop="age"
            sortable
        ></el-table-column>

        <el-table-column
            label="Центр тяжести (мм.)"
            prop="age"
            sortable
        ></el-table-column>

        <el-table-column
            label="Ширина рамы (мм.)"
            prop="age"
            sortable
        ></el-table-column>

        <el-table-column
            label="Диапазон смещения (+/- мм.)"
            prop="age"
            sortable
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            sortable
        >
            <template #default="{ row }">
                {{ row.balance }}
                <el-tag type="warning">5%</el-tag>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop=""
            width="150"
        >
            <template #default="{ row }">
                <el-input-number size="small" :model-value="1" :min="0"></el-input-number>

                <el-button
                    icon="ShoppingCart"
                    link
                    type="primary"
                    style="margin-top: 10px;"
                >
                    Заказать
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <BottomNavigationPanel
        :filters="[
            // { key: 0, type: 'select', vModel: '', placeholder: 'Тип навесного оборудования' },
            { key: 1, type: 'select', vModel: '', placeholder: 'Бренд' },
            { key: 2, type: 'select', vModel: '', placeholder: 'Класс монтажа' },
            { key: 3, type: 'select', vModel: '', placeholder: 'Грузоподъемность' },
            { key: 4, type: 'select', vModel: '', placeholder: 'Центр тяжести' },
            { key: 5, type: 'select', vModel: '', placeholder: 'Ширина рамы' },
            { key: 6, type: 'select', vModel: '', placeholder: 'Диапазон смещения' },
        ]"
    >
        <el-radio-group
            v-model="currentTab"
        >
            <el-tooltip
                placement="top"
                v-for="(tab, index) in [
                    { label: '1', title: 'Каретка бокового смещения', img: 'https://shop.liftnet.ru/img/attachments-i1.png' },
                    { label: '2', title: 'Захваты киповые', img: 'https://shop.liftnet.ru/img/attachments-i2.png' },
                    { label: '3', title: 'Захваты для шин', img: 'https://shop.liftnet.ru/img/attachments-i3.png' },
                    { label: '4', title: 'Захваты для рулонов', img: 'https://shop.liftnet.ru/img/attachments-i4.png' },
                    { label: '5', title: 'Ротаторы', img: 'https://shop.liftnet.ru/img/attachments-i5.png' },
                    { label: '6', title: 'Позиционеры', img: 'https://shop.liftnet.ru/img/attachments-i6.png' },
                ]"
                :key="index"
                raw-content
                :content="`<img src='${tab.img}' style='width: 150px; height: 100px;'>`"
            >
                <el-radio-button :label="tab.label">
                    {{ tab.title }}
                </el-radio-button>
            </el-tooltip>
        </el-radio-group>
    </BottomNavigationPanel>
</template>

<style lang="scss" scoped></style>