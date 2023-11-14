<script setup>
    import store from '@/store'
    import BottomNavigationPanel from '@/components/BottomNavigationPanel.vue';
    import OrderProductDrawer from '@/components/OrderProductDrawer.vue'
    import TableTooltip from '@/components/TableTooltip.vue'
    import MeasurementPictures from '@/components/MeasurementPictures.vue'
    import Descriptions from '@/components/Descriptions.vue'
    import { ref } from 'vue'

    let isOrderDrawer = ref(false)
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
            align="center"
            width="40"
        >
            <template #default="{ row }">
                <div class="table__expand-content">
                    <MeasurementPictures :pictures="[
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_0002.JPG',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_0005.JPG',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_0009.JPG',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_0011.JPG',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6382.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6383.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6384.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6385.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6385_1.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6386.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6387.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6388.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6396.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6398.jpg',
                        'https://shop.liftnet.ru/tr-lift/dealer.work/pic/drives/00000021173/IMG_6393.jpg',
                    ]"></MeasurementPictures>

                    <Descriptions
                        :descriptions="[
                            { label: 'Мощность (кВт)', value: '34' },
                            { label: 'Крутящий момент (об/мин)', value: '2500' },
                            { label: 'Тип топлива', value: 'Дизель' },
                            { label: 'Вес (Кг)', value: '252' },
                        ]"
                        :extra="row.name"
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
            label="Внутренний код"
            prop="_id"
        ></el-table-column>

        <el-table-column
            label="Наименование"
            prop="name"
        ></el-table-column>

        <el-table-column
            label="На складах"
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
                <el-tag type="warning">10%</el-tag>
            </template>
        </el-table-column>

        <el-table-column
            label="РРЦ"
            prop="balance"
        >
            <template #header>
                <TableTooltip
                    content="Рекомендовано розничная цена"
                    text="РРЦ, руб."
                ></TableTooltip>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop=""
            width="120"
        >
            <template #default>
                <el-button
                    icon="Right"
                    link
                    type="primary"
                    @click="isOrderDrawer = true"
                >
                    Заказать
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <BottomNavigationPanel
        :filterable="false"
    ></BottomNavigationPanel>

    <OrderProductDrawer
        v-model="isOrderDrawer"
    ></OrderProductDrawer>
</template>

<style lang="scss" scoped>
    .table__expand-content {
        display: flex;
        gap: 10px;
        flex-direction: column;
        margin: 4px 8px;
    }
</style>