<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        sticky: {
            type: Boolean,
            required: false,
            default: true
        },
        filters: {
            required: false,
            type: Array,
            default: []
        },
        filterable: {
            required: false,
            type: Boolean,
            default: true
        },
        indentTop: {
            required: false,
            type: Boolean,
            default: true
        }
    })

    const emits = defineEmits([
        'clear'
    ])

    let isFilter = ref(false)
</script>

<template>
    <div class="navigation__panel"
        :class="{
            'is-sticky-default': sticky,
            'is-indent-top': indentTop
        }"
    >
        <transition name="is-filter">
            <div class="card card__filters"
                v-show="isFilter"
            >
                <div class="filters">
                    <span class="title__navigations">
                        <span>
                            <el-icon><Filter></Filter></el-icon>
                            Фильтр
                        </span>

                        <el-button
                            icon="Close"
                            link
                            @click="isFilter = false"
                        >
                            Закрыть
                        </el-button>
                    </span>

                    <div class="fields">
                        <div
                            v-for="(filter, index) in filters"
                            :key="filter.key || index"
                        >
                            <section v-show="filter.type === 'select'">
                                <el-select
                                    v-model="filter.vModel"
                                    :placeholder="filter.placeholder"
                                    clearable
                                    style="width: 100%;"
                                >
                                </el-select>
                            </section>

                            <section v-show="filter.type === 'input'">
                                <el-input
                                    v-model="filter.vModel"
                                    :placeholder="filter.placeholder"
                                    clearable
                                ></el-input>
                            </section>

                            <section v-show="filter.type === 'date'">
                                <el-date-picker
                                    v-model="filter.vModel"
                                    :placeholder="filter.placeholder"
                                    clearable
                                    style="width: 100%;"
                                ></el-date-picker>
                            </section>
                        </div>
                    </div>

                    <el-button class="clear__field-button"
                        icon="Close"
                        type="primary"
                        @click="emits('clear')"
                    >
                        Очистить поиск
                    </el-button>
                </div>
            </div>
        </transition>

        <div class="card card__pagination">
            <div class="pagination__row">
                <el-pagination class="pagination"
                    :pager-count="5"
                    layout="sizes, prev, pager, next"
                    :total="1000"
                    :page-sizes="[10, 20, 40, 60, 80, 100]"
                    small
                    background
                ></el-pagination>

                <el-button
                    type="primary"
                    :icon="!isFilter ? 'Filter' : 'Bottom'"
                    @click="isFilter = !isFilter"
                    v-show="filterable"
                >
                    Фильтр
                </el-button>

                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    // TODO: Объеденить пагинацию с фильтрами
    // TODO: Доделать мобильную версию

    .navigation__panel {
        &.is-indent-top {
            margin-top: 20px;
        }

        &.is-sticky-default {
            position: sticky;
            left: 0;
            bottom: 0;
            z-index: 4;

            @media screen and (width < 768px) {
                position: unset;
            }
        }

        .is-filter-enter-active, .is-filterleave-active {
            transition: .4s;
            transform: translateY(0);
        }

        .is-filter-enter-from, .is-filter-leave-to {
            opacity: 0;
            transition: .4s;
            transform: translateY(100px);
        }

        .card {
            padding: 8px 12px;
            background: var(--el-fill-color-dark);
            // border-radius: 4px;

            &__filters {
                border-radius: 4px 4px 0 0;

                .filters {
                    .title__navigations {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 5px;

                        span {
                            font-size: 16px;
                            font-weight: bold;
                        }
                    }

                    .fields {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 20px;
                        margin-top: 10px;

                        @media screen and (width <= 768px) {
                            gap: 10px;
                        }
                    }

                    .clear__field-button {
                        margin-top: 10px;
                    }
                }
            }

            &__pagination {
                .pagination__row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    flex-wrap: wrap-reverse;

                    .pagination {
                        --el-pagination-bg-color: var(--el-color-fill);
                        --el-pagination-button-disabled-bg-color: transparent;
                        --el-pagination-item-gap: 5px;
                    }
                }
            }
        }
    }
</style>