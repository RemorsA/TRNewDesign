<script setup>
    import OrderProductTable from '@/components/OrderProductTable.vue'
    import store from '@/store/store'
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
            <template #default="props">
                <div class="table-expand__content">
                    <Descriptions
                        :descriptions="['Набережные Челны', 'Москва']"
                        extra="Количество на складе"
                        extra-icon="OfficeBuilding"
                    >
                        <template #label="{ row }">
                            {{ row }}:
                        </template>

                        <template #value>
                            {{ props.row.age }}
                        </template>
                    </Descriptions>
                </div>
            </template>
        </el-table-column>

        <el-table-column
            label="Класс монтажа"
            prop="age"
            sortable
        ></el-table-column>

        <el-table-column
            label="Сечение (мм.)"
            prop="latitude"
            sortable
        ></el-table-column>

        <el-table-column
            label="Длина (мм.)"
            prop="longitude"
            sortable
        ></el-table-column>

        <el-table-column
            label="Грузоподъемность (кг.)"
            prop="age"
            sortable
        ></el-table-column>

        <el-table-column
            label="Цена, руб. (за 1 клык)"
            prop="balance"
            sortable
        ></el-table-column>

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
        :filters="[
            { key: 0, type: 'select', vModel: '', placeholder: 'Класс монтажа' },
            { key: 1, type: 'select', vModel: '', placeholder: 'Длина' },
            { key: 2, type: 'select', vModel: '', placeholder: 'Грузоподъемность' },
        ]"
    ></BottomNavigationPanel>
    
    <OrderProductTable
        v-model="isOrderDrawer"
    ></OrderProductTable>
</template>

<style lang="scss" scoped>
    .table-expand__content {
        margin: 4px 8px;
    }
</style>