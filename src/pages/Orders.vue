<script setup>
    import store from '@/store/store';
    import DeliveryForm from '@/components/DeliveryForm.vue'
    import { ref } from 'vue'

    let isDeliveryForm = ref(false)
</script>

<template>
    <el-timeline>
        <el-timeline-item
            v-for="(order, index) in store.state.tData.slice(40)"
            :key="index"
            :timestamp="`Заказ 101010 от 29.08.198${index} 11:18 Заказной / ${order.name}`"
            placement="top"
            :color="order.isActive ? 'var(--el-color-success)' : 'var(--el-color-info)'"
            :icon="order.isActive ? 'Select' : 'Close'"
            size="large"
            type="danger"
        >
            <span :style="{
                'color': order.isActive ? 'var(--el-color-success)' : 'var(--el-color-info)',
                'margin-bottom': '10px',
                'display': 'block'
            }">
                {{ order.isActive ? 'Активно' : 'Не активно' }}
            </span>

            <el-table
                :data="index === 3 ? store.state.tData.slice(47) : store.state.tData.slice(49)"
                stripe
                border
                size="small"
            >
                <el-table-column
                    width="40"
                    align="center"
                    type="selection"
                    v-if="order.isActive"
                ></el-table-column>

                <el-table-column
                    label="Наименование"
                    prop="name"
                ></el-table-column>

                <el-table-column
                    label="Кат. номер"
                    prop="guid"
                ></el-table-column>

                <el-table-column
                    label="Страна"
                    prop="address"
                ></el-table-column>

                <el-table-column
                    label="Склад"
                    prop="company"
                ></el-table-column>

                <el-table-column
                    label="Вес"
                    prop="latitude"
                ></el-table-column>

                <el-table-column
                    label="Кол-во"
                    prop="age"
                ></el-table-column>

                <el-table-column
                    label="Ед. изм."
                    prop="eyeColor"
                ></el-table-column>

                <el-table-column
                    label="Цена"
                    prop="balance"
                ></el-table-column>

                <el-table-column
                    label="Сумма"
                    prop="balance"
                ></el-table-column>

                <el-table-column
                    label="Состояние"
                    prop="isActive"
                >
                    <template #default="{ row }">
                        <span :style="{
                            'color': row.isActive ? 'var(--el-color-success)' : 'var(--el-color-warning)'
                        }">
                            {{ row.isActive }}
                        </span>
                    </template>
                </el-table-column>
            </el-table>
        </el-timeline-item>
    </el-timeline>

    <BottomNavigationPanel
        :filters="[
            { key: 0, type: 'input', vModel: '', placeholder: 'Номер отгрузки' },
            { key: 1, type: 'input', vModel: '', placeholder: 'Ссылка для отгрузки' },
            { key: 2, type: 'date', vModel: '', placeholder: 'Период от' },
            { key: 3, type: 'date', vModel: '', placeholder: 'Период до' },
        ]"
    >
        <el-radio-group :model-value="'Все'">
            <el-radio-button label="Все"></el-radio-button>
            <el-radio-button label="Активные"></el-radio-button>
            <el-radio-button label="Не активные"></el-radio-button>
        </el-radio-group>

        <el-tooltip
            raw-content
            :content="`
                <span class='popper__content'>
                    <h4>Сумма товаров:</h4>
                    519 450
                </span>

                <span class='popper__content'>
                    <h4>Общий вес (кг):</h4>
                    900
                </span>
            `"
            popper-style="font-size: 14px;"
        >
            <el-badge value="10">
                <el-button
                    type="primary"
                    @click="isDeliveryForm = true"
                >
                    Открыть форму
                </el-button>
            </el-badge>
        </el-tooltip>
    </BottomNavigationPanel>

    <DeliveryForm
        v-model="isDeliveryForm"
    ></DeliveryForm> 
</template>

<style lang="scss">
    .popper__content {
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;
        line-height: 25px;
    }
</style>