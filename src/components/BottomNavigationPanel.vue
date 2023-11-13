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
            <el-card class="card__filters"
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
            </el-card>
        </transition>

        <el-card class="card__pagination">
            <el-row class="pagination__row"
                justify="center"
                align="middle"
            >
                <el-pagination class="pagination"
                    :pager-count="5"
                    layout="sizes, prev, pager, next"
                    :total="1000"
                    :page-sizes="[10, 20, 40, 60, 80, 100]"
                    small
                ></el-pagination>

                <el-button
                    link
                    type="primary"
                    :icon="!isFilter ? 'Filter' : 'Bottom'"
                    @click="isFilter = !isFilter"
                    v-show="filterable"
                >
                    Фильтр
                </el-button>

                <slot></slot>
            </el-row>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
    .navigation__panel {
        overflow: hidden;

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

        .card__filters, .card__pagination {
            --el-card-padding: 8px 12px;
            --el-card-bg-color: var(--el-fill-color-dark) !important;
            // --el-card-border-color: var(--el-color-info-light-3);
        }

        .is-filter-enter-active, .is-filterleave-active {
            transition: all .5s ease;
            transform: translateY(0);
        }

        .is-filter-enter-from, .is-filter-leave-to {
            opacity: 0;
            transform: translateY(100px);
        }

        .card {
            &__filters .filters {
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

            &__pagination {
                margin-top: 10px;

                .pagination__row {
                    gap: 10px;
                    flex-wrap: wrap-reverse;

                    .pagination {
                        --el-pagination-bg-color: var(--el-color-fill);
                        --el-pagination-button-disabled-bg-color: transparent;
                        --el-pagination-item-gap: 0px;
                    }
                }
            }
        }
    }
</style>