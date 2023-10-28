<script setup>
    import store from './store';
    import { computed } from 'vue'

    const state = computed(() => store.state).value
</script>

<template>
    <div class="filters">
        <el-input
            v-for="(filter, index) in 2"
            :key="index"
            :placeholder="(index === 0) ? 'Номер отгрузки' : (index === 1) ? 'Ссылка для отгрузки' : ''"
            clearable
        ></el-input>

        <el-date-picker
            v-for="(filter, index) in 2"
            :key="index"
            style="width: 100%;"
            :placeholder="(index === 0) ? 'Период от - ?' : (index === 1) ? 'Период до - ?' : ''"
        ></el-date-picker>
    </div>

    <div
        v-for="(desc, index) in state.tData.slice(48)"
        :key="index"
    >
        <el-divider content-position="left">{{ desc.name }}</el-divider>

        <el-card class="cards">
            <div class="descriptions">
                <div class="descriptions-item">
                    <span class="descriptions-item__label">Трек номер: </span>

                    <span class="descriptions-item__value">
                        {{ desc.guid }}
                    </span>
                </div>

                <div class="descriptions-item">
                    <span class="descriptions-item__label">Cтатус: </span>

                    <span class="descriptions-item__value">
                        <el-tag type="warning">
                            {{ desc.eyeColor }}
                        </el-tag>
                    </span>
                </div>

                <div class="descriptions-item">
                    <span class="descriptions-item__label">Cумма: </span>

                    <span class="descriptions-item__value">
                        {{ desc.balance }}
                    </span>
                </div>

                <div class="descriptions-item">
                    <span class="descriptions-item__label">Доставка: </span>

                    <span class="descriptions-item__value">
                        {{ desc.address }}
                    </span>
                </div>

                <div class="descriptions-item">
                    <span class="descriptions-item__label">Дата отгрузки: </span>

                    <span class="descriptions-item__value">
                        {{ desc.registered }}
                    </span>
                </div>

                <div class="descriptions-item">
                    <span class="descriptions-item__label"></span>

                    <span class="descriptions-item__value">
                        <el-button-group>
                            <el-button
                                icon="Printer"
                                :type="index === 0 ? 'success' : 'danger'"
                            >
                                {{ index === 0 ? 'Загрузить' : 'Недоступно' }}
                            </el-button>

                            <el-button
                                :icon="!desc.isActive ? 'Search' : 'Top'"
                                @click="desc.isActive = !desc.isActive"
                            >
                                Посмотреть
                            </el-button>
                        </el-button-group>
                    </span>
                </div>
            </div>

            <transition name="fade-table">
                <el-table
                    v-show="desc.isActive"
                    :data="state.tData.slice(47)"
                    style="margin-top: 20px;"
                    stripe
                    table-layout="fixed"
                >
                    <el-table-column label="Наименование" prop="name"></el-table-column>

                    <el-table-column label="Кат. номер" prop="guid"></el-table-column>

                    <el-table-column label="Вес" prop="age"></el-table-column>

                    <el-table-column label="Количество" prop="age"></el-table-column>

                    <el-table-column label="Ед. изм." prop="favoriteFruit"></el-table-column>

                    <el-table-column label="Цена, руб." prop="balance"></el-table-column>

                    <el-table-column label="Сумма, руб." prop="balance"></el-table-column>
                </el-table>
            </transition>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
    .filters {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }

    .cards {
        margin-top: 20px;

        .descriptions {
            gap: 10px;
            display: flex;
            flex-wrap: wrap;

            .descriptions-item {
                flex: 1 1 300px;
                line-height: 30px;

                .descriptions-item__label {
                    font-weight: bold;
                }

                .descriptions-item__value {
                    margin-left: 10px;
                    font-size: 14px;
                }
            }
        }
    }

    .fade-table-enter-active {
        animation: fadeTable .5s;
    }
    .fade-table-leave-active {
        animation: fadeTable .5s reverse;
    }

    @keyframes fadeTable {
        from {
            opacity: 0;
            transform: translateY(100px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>