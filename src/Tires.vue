<script setup>
    import store from './store';
    import BottomNavigationPanel from '@/components/BottomNavigationPanel.vue';
    import { ref } from 'vue'

    let switchContent = ref(false)

    // TODO: Только таблица - подумать иначе сделать детальную модалку
    // TODO: Добавить окно заказа
</script>

<template>
    <el-card>
        <el-scrollbar>
            <el-row class="links__row"
                align="middle"
                justify="space-between"
            >
                <el-link
                    v-for="(link, index) in 5"
                    :key="index"
                >
                    Ссылка {{ index }}
                </el-link>
            </el-row>
        </el-scrollbar>
    </el-card>

    <transition name="slide-table">
        <el-table
            :data="store.state.tData.slice(40)"
            border
            stripe
            v-show="!switchContent"
            style="margin-top: 20px;"
        >
            <el-table-column
                type="expand"
                align="center"
                width="40"
            >
                <template #default="props">
                    <div style="
                        display: flex;
                        align-items: flex-start;
                        gap: 20px;
                        padding: 0 8px;
                    ">
                        <el-card
                            body-style="background: white; padding: 0;"
                            style="
                                width: 300px;
                                height: 100%;"
                            >
                            <el-image
                                :src="'https://shop.liftnet.ru/tr-lift/dealer.work//pic/20000020264.jpg'"
                                style="width: 100%; height: 100%; background: white;"
                                fit="scale-down"
                                hide-on-click-modal
                                :preview-src-list="[ 'https://shop.liftnet.ru/tr-lift/dealer.work//pic/20000020264.jpg' ]"
                                preview-teleported
                            ></el-image>
                        </el-card>

                        <div style="width: 100%">
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
                                            <span style="font-weight: bold; white-space: nowrap;">
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
                                            <span style="font-weight: bold; white-space: nowrap;">
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
                min-width="110"
                width=""
            ></el-table-column>

            <el-table-column
                label="Слойность / Исполнение"
                prop="company"
                min-width="120"
                width=""
            ></el-table-column>

            <el-table-column
                label="Модель"
                prop="favoriteFruit"
                min-width="100"
                width=""
            ></el-table-column>

            <el-table-column
                label="Производитель"
                prop="company"
                min-width="140"
                width=""
            ></el-table-column>

            <el-table-column
                label="Цена, руб."
                prop="balance"
                min-width="120"
                width=""
            ></el-table-column>

            <el-table-column
                label="РРЦ, руб."
                prop="balance"
                min-width="120"
                width=""
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
                        icon="ShoppingCart"
                        link
                        type="primary"
                    >
                        Заказать
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </transition>

    <transition name="slide-cards">
        <div class="tires__cards" v-show="switchContent">
            <el-card class="card"
                v-for="(card, index) in store.state.tData.slice(40)"
                :key="index"
            >
                <template #header>
                    <el-image
                        :src="'https://shop.liftnet.ru/tr-lift/dealer.work//pic/20000020264.jpg'"
                        style="width: 100%; height: 200px; background: white;"
                        fit="scale-down"
                    ></el-image>
                </template>

                <div class="card__body">
                    <div class="descriptions">
                        <span class="descriptions-label">
                            {{ card.longitude }}
                        </span>

                        <span class="descriptions-value">
                            На складках: {{ card.age }}
                        </span>
                    </div>

                    <div class="descriptions">
                        <span class="descriptions-label"></span>

                        <span class="descriptions-value">
                            {{ card.balance }}
                        </span>
                    </div>

                    <div class="descriptions">
                        <span class="descriptions-label">
                            <el-checkbox
                                :model-value="card.isActive"
                                :id="String(index)"
                            >
                                Сравнить
                            </el-checkbox>
                        </span>

                        <span class="descriptions-value">
                            <el-button
                                icon="ShoppingCart"
                                type="primary"
                            >
                                Заказать
                            </el-button>
                        </span>
                    </div>
                </div>
            </el-card>
        </div>
    </transition>

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

        <el-radio-group v-model="switchContent" title="Вид в виде таблицы или карточек">
            <el-radio-button :label="false">
                <el-icon><Grid></Grid></el-icon>
            </el-radio-button>

            <el-radio-button :label="true">
                <el-icon><Postcard></Postcard></el-icon>
            </el-radio-button>
        </el-radio-group>
    </BottomNavigationPanel>
</template>

<style lang="scss" scoped>
    .links__row {
        white-space: nowrap;
        flex-wrap: nowrap;
        gap: 20px;
    }

    .tires__cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin-top: 20px;

        .card {
            --el-card-padding: 0;

            .card__body {
                .descriptions {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    .descriptions-label {
                        font-size: 16px;
                        padding: 8px 12px;
                    }

                    .descriptions-value {
                        font-size: 14px;
                        padding: 8px 12px;
                    }
                }
            }
        }
    }
// TABLE:
    .slide-table-enter-active, .slide-table-leave-active {
        transition: all .5s ease-in-out;
    }

    .slide-table-enter-from, .slide-table-leave-to {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
// CARDS:
    .slide-cards-enter-active, .slide-cards-leave-active {
        transition: all .5s ease-in-out;
    }

    .slide-cards-enter-from, .slide-cards-leave-to {
        opacity: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>