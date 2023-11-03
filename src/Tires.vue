<script setup>
    import store from './store';
    import BottomNavigationPanel from '@/components/BottomNavigationPanel.vue';
    import OrderProductDrawer from '@/components/OrderProductDrawer.vue'
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
    >
        <el-table-column
            type="expand"
            align="center"
            width="40"
        >
            <template #default="props">
                <div class="table__expand-content">
                    <el-card class="picture__card">
                        <el-image class="picture"
                            :src="'https://shop.liftnet.ru/tr-lift/dealer.work//pic/20000020264.jpg'"
                            fit="scale-down"
                            hide-on-click-modal
                            :preview-src-list="[ 'https://shop.liftnet.ru/tr-lift/dealer.work//pic/20000020264.jpg' ]"
                            preview-teleported
                        ></el-image>
                    </el-card>

                    <div class="detail__descriptions">
                        <el-card>
                            <el-descriptions
                                title="Количество на складе"
                                size="small"
                            >
                                <template #title>
                                    <el-icon><OfficeBuilding></OfficeBuilding></el-icon>
                                    Количество на складе
                                </template>

                                <el-descriptions-item
                                    v-for="(r, i) in [
                                        'Набережные Челны', 'Москва', 'Санкт-Петербург',
                                        'Екатеринбург', 'Новосибирск', 'Уфа',
                                        'Пермь', 'Нижний новгород', 'Самара',
                                        'Челябинск', 'Краснодар', 'Казань'
                                    ]"
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

                        <el-card style="margin-top: 10px;">
                            <el-descriptions
                                size="small"
                            >
                                <template #title>
                                    <el-icon><Document></Document></el-icon>
                                    Описание
                                </template>

                                <el-descriptions-item
                                    v-for="(r, i) in [
                                        'Производитель', 'Тип', 'Исполнение',
                                        'Размер', 'Вес (кг)', 'Сегмент',
                                        'Эксплуатация', 'Нагрузка (кг)', 'Гарантия (лет)',
                                    ]"
                                    :key="i"
                                >
                                    <template #label>
                                        <span class="description-label">
                                            {{ r + ':' }}
                                        </span>
                                    </template>

                                    {{ props.row.greeting }}
                                </el-descriptions-item>
                            </el-descriptions>
                        </el-card>
                    </div>
                </div>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop=""
            min-width="40"
            width="40"
            align="center"
        >
            <template #header>
                <el-tooltip
                    :content="`Выбрать из списка для сравнения`"
                    placement="top"
                    raw-content
                >
                    <el-icon><QuestionFilled></QuestionFilled></el-icon>
                </el-tooltip>
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
            min-width="140"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="Слойность / Исполнение"
            prop="company"
            min-width="120"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="Модель"
            prop="favoriteFruit"
            min-width="110"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="Производитель"
            prop="company"
            min-width="160"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            min-width="120"
            width=""
            sortable
        ></el-table-column>

        <el-table-column
            label="РРЦ, руб."
            prop="balance"
            min-width="140"
            width=""
            sortable
        >
            <template #header>
                <el-tooltip
                    :content="`Рекомендовано розничная цена`"
                    placement="top"
                    raw-content
                >
                    <span>
                        <el-icon><QuestionFilled></QuestionFilled></el-icon>
                        РРЦ, руб.
                    </span>
                </el-tooltip>
            </template>
        </el-table-column>

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
        padding: 0 8px;

        .picture__card {
            width: 300px;
            height: 100%;
            --el-card-padding: 0;
            --el-card-bg-color: white;

            .picture {
                width: 100%;
                height: 100%;
            }
        }

        .detail__descriptions {
            width: 100%;

            .description-label {
                font-weight: bold;
                white-space: nowrap;
            }
        }
    }
</style>