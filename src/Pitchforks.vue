<script setup>
    import BottomNavigationPanel from './components/BottomNavigationPanel.vue'
    import OrderProductDrawer from '@/components/OrderProductDrawer.vue'
    import store from '@/store'
    import { ref } from 'vue'

    let isOrderDrawer = ref(false)
</script>

<template>
    <el-table
        :data="store.state.tData.slice(40)"
        stripe
        border
    >
        <el-table-column
            type="expand"
            align="center"
            width="40"
        >
            <template #default="props">
                <el-card style="margin: 0 8px;">
                    <el-descriptions
                        title="Количество на складе"
                        size="small"
                        :column="1"
                    >
                        <template #title>
                            <el-icon><OfficeBuilding></OfficeBuilding></el-icon>
                            Количество на складе
                        </template>

                        <el-descriptions-item
                            v-for="(r, i) in [ 'Набережные Челны', 'Москва' ]"
                            :key="i"
                        >
                            <template #label>
                                <span class="description-label">
                                    {{ r + ':' }}
                                </span>
                            </template>

                            {{ props.row.age }}
                        </el-descriptions-item>
                    </el-descriptions>
                </el-card>
            </template>
        </el-table-column>

        <el-table-column
            label="Класс монтажа"
            prop="age"
            min-width="160"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="Сечение (в мм.)"
            prop="latitude"
            min-width="160"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="Длина (в мм.)"
            prop="longitude"
            min-width="150"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="Грузоподъемность (в кг.)"
            prop="age"
            min-width="230"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="Цена, руб. (за 1 клык)"
            prop="balance"
            min-width="200"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label=""
            prop=""
            min-width="120"
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
        :filters="[
            { key: 0, type: 'select', vModel: '', placeholder: 'Класс монтажа' },
            { key: 1, type: 'select', vModel: '', placeholder: 'Длина' },
            { key: 2, type: 'select', vModel: '', placeholder: 'Грузоподъемность' },
        ]"
    ></BottomNavigationPanel>
    
    <OrderProductDrawer
        v-model="isOrderDrawer"
    ></OrderProductDrawer>
</template>

<style lang="scss" scoped></style>