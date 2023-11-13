<script setup>
    import store from './store';
    import BottomNavigationPanel from '@/components/BottomNavigationPanel.vue';
    import OrderProductDrawer from '@/components/OrderProductDrawer.vue'
    import TableTooltip from '@/components/TableTooltip.vue'
    import Descriptions from '@/components/Descriptions.vue'
    import { ref } from 'vue'

    let isOrderDialog = ref(false)
</script>

<template>
    <el-row class="links__row" align="middle">
        <el-link
            v-for="(link, index) in 5"
            :key="index"
        >
            Ссылка {{ index }}
        </el-link>
    </el-row>

    <el-table
        :data="store.state.tData.slice(40)"
        border
        stripe
        style="margin-top: 20px;"
        size="small"
    >
        <el-table-column
            type="expand"
            align="center"
            width="40"
        >
            <template #default="props">
                <div class="table__expand-content">
                    <el-image class="picture"
                        :src="'https://shop.liftnet.ru/tr-lift/dealer.work//pic/20000020264.jpg'"
                        fit="scale-down"
                        hide-on-click-modal
                        :preview-src-list="[ 'https://shop.liftnet.ru/tr-lift/dealer.work//pic/20000020264.jpg' ]"
                        preview-teleported
                    ></el-image>

                    <div class="detail__descriptions">
                        <Descriptions
                            :descriptions="[
                                'Набережные Челны', 'Москва', 'Санкт-Петербург',
                                'Екатеринбург', 'Новосибирск', 'Уфа',
                                'Пермь', 'Нижний новгород', 'Самара',
                                'Челябинск', 'Краснодар', 'Казань'
                            ]"
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

                        <Descriptions style="margin-top: 10px;"
                            :descriptions="[
                                'Производитель', 'Тип', 'Исполнение',
                                'Размер', 'Вес (кг)', 'Сегмент',
                                'Эксплуатация', 'Нагрузка (кг)', 'Гарантия (лет)',
                            ]"
                            extra="Описание"
                        >
                            <template #label="{ row }">
                                {{ row }}:
                            </template>

                            <template #value>
                                {{ props.row.greeting }}
                            </template>
                        </Descriptions>
                    </div>
                </div>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop=""
            width="40"
            align="center"
        >
            <template #header>
                <TableTooltip :text="`Выбрать из списка для сравнения`"></TableTooltip>
            </template>

            <template #default="{ row, index }">
                <el-checkbox
                    :model-value="row.isActive"
                    :id="String(row._id)"
                ></el-checkbox>
            </template>
        </el-table-column>

        <el-table-column
            label="Типоразмер"
            prop="latitude"
            sortable
        ></el-table-column>

        <el-table-column
            label="Слойность / Исполнение"
            prop="company"
            sortable
        ></el-table-column>

        <el-table-column
            label="Модель"
            prop="favoriteFruit"
            sortable
        ></el-table-column>

        <el-table-column
            label="Производитель"
            prop="company"
            sortable
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            sortable
        ></el-table-column>

        <el-table-column
            label="РРЦ, руб."
            prop="balance"
            sortable
        >
            <template #header>
                <TableTooltip :text="`Рекомендовано розничная цена`">
                    РРЦ, руб.
                </TableTooltip>
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
                    @click="isOrderDialog = true"
                >
                    Заказать
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <BottomNavigationPanel
        :filters="[
            { key: 0, type: 'select', vModel: '', placeholder: 'Категория' },
            { key: 1, type: 'select', vModel: '', placeholder: 'Размер' },
            { key: 2, type: 'select', vModel: '', placeholder: 'Исполнение' },
            { key: 3, type: 'select', vModel: '', placeholder: 'Бренд' },
        ]"
    >
        <el-button
            type="primary"
            icon="Histogram"
            link
        >
            Сравнить /
            <el-tag
                style="margin-left: 5px;"
                type="danger"
            >
                5
            </el-tag>
        </el-button>
    </BottomNavigationPanel>

    <OrderProductDrawer
        v-model="isOrderDialog"
    ></OrderProductDrawer>
</template>

<style lang="scss" scoped>
    .links__row {
        white-space: nowrap;
        gap: 20px;
    }

    .table__expand-content {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        padding: 4px 8px;

        .picture {
            width: 300px;
            height: 100%;
            background: white;
            border-radius: 4px;
        }

        .detail__descriptions {
            width: 100%;
        }
    }
</style>