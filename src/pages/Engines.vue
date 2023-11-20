<script setup>
    import store from '@/store/store'
    import OrderProductTable from '@/components/OrderProductTable.vue'
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
            <template #default="record">
                <div class="table-expand__content">
                    <MeasurementPictures :pictures="store.state.measutementsPictures"></MeasurementPictures>

                    <Descriptions
                        :descriptions="['Набережные Челны']"
                        extra="Количество на складе"
                        extra-icon="OfficeBuilding"
                    >
                        <template #label="{ row }">
                            {{ row }}:
                        </template>

                        <template #value>
                            {{ record.row['age'] }}
                        </template>
                    </Descriptions>

                    <Descriptions
                        :descriptions="[
                            { label: 'Мощность (кВт)', value: '34' },
                            { label: 'Крутящий момент (об/мин)', value: '2500' },
                            { label: 'Тип топлива', value: 'Дизель' },
                            { label: 'Вес (Кг)', value: '252' },
                        ]"
                        :extra="record.row.name"
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
            sortable
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
                    icon="Top"
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

    <OrderProductTable
        v-model="isOrderDrawer"
    ></OrderProductTable>
</template>

<style lang="scss" scoped>
    .table-expand__content {
        display: flex;
        gap: 10px;
        flex-direction: column;
        margin: 4px 8px;
    }
</style>