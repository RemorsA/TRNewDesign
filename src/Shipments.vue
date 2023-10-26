<script setup>
    import store from './store';
    import { computed, ref } from 'vue'

    const state = computed(() => store.state).value
</script>

<template>
    <div class="shipments-filters">
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
        :kye="index"
    >
        <el-card class="cards">
            <template #header>
                {{ desc.name }}
            </template>

            <div class="descriptions">
                <div class="descriptions-item">
                    <span class="descriptions-item__label"></span>

                    <span class="descriptions-item__value">
                        <el-button
                            icon="Printer"
                        ></el-button>

                        <el-button
                            icon="Search"
                            @click="desc.isActive = !desc.isActive"
                        ></el-button>
                    </span>
                </div>

                <div class="descriptions-item">
                    <span class="descriptions-item__label">Трек номер: </span>

                    <span class="descriptions-item__value">
                        {{ desc.guid }}
                    </span>
                </div>

                <div class="descriptions-item">
                    <span class="descriptions-item__label">Cтатус: </span>

                    <span class="descriptions-item__value">
                        <el-tag>
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
            </div>

            <!-- <el-descriptions style="border: 1px solid var(--el-border-color); padding: 10px; border-radius: 4px;">
                <el-descriptions-item>
                    <el-button-group>
                        <el-button
                            icon="Printer"
                        ></el-button>

                        <el-button
                            icon="Search"
                            @click="desc.isActive = !desc.isActive"
                        ></el-button>
                    </el-button-group>
                </el-descriptions-item>

                <el-descriptions-item label="Трек номер:">
                    {{ desc.guid }}
                </el-descriptions-item>

                <el-descriptions-item label="Cтатус:">
                    <el-tag>
                        {{ desc.eyeColor }}
                    </el-tag>
                </el-descriptions-item>

                <el-descriptions-item label="Cумма:">
                    {{ desc.balance }}
                </el-descriptions-item>

                <el-descriptions-item label="Доставка:">
                    {{ desc.address }}
                </el-descriptions-item>

                <el-descriptions-item label="Дата отгрузки:">
                    {{ desc.registered }}
                </el-descriptions-item>
            </el-descriptions> -->

            <transition name="fade-table">
                <el-table
                    v-show="desc.isActive"
                    :data="state.tData.slice(47)"
                    style="margin-top: 20px;"
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
    .shipments-filters {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }

    .cards {
        margin-top: 20px;

        .descriptions {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            border: 1px solid var(--el-border-color);
            padding: 10px;
            border-radius: 4px;

            .descriptions-item {
                .descriptions-item__label {

                }

                .descriptions-item__value {

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