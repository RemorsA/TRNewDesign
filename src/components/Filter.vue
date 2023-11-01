<script setup>
    import store from '@/store'

    const props = defineProps({
        filters: {
            required: true,
            type: Array,
            default: []
        }
    })

    const emits = defineEmits([
        'clear'
    ])

    function handleClickSticky() {
        store.state.settings.stickyFilter = !store.state.settings.stickyFilter
        store.dispatch('setSettings')
    }
</script>

<template>
    <el-card class="filters__card"
        :class="{
            'is-default-sticky': store.state.settings.stickyFilter
        }"
    >
        <div class="filters">
            <span class="title__navigations">
                <span>
                    <el-icon><Filter></Filter></el-icon>
                    Фильтр
                </span>

                <el-button
                    link
                    :icon="store.state.settings.stickyFilter ? 'Close' : 'Paperclip'"
                    @click="handleClickSticky"
                    title="Закрепить фильтр или открепить"
                >
                    {{ store.state.settings.stickyFilter ? 'Открепить' : 'Закрепить'}}
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

            <div class="navigations">
                <el-button
                    icon="Close"
                    type="primary"
                    @click="emits('clear')"
                >
                    Очистить поиск
                </el-button>

                <slot></slot>
            </div>
        </div>
    </el-card>
</template>

<style lang="scss" scoped>
    .filters__card {
        --el-card-padding: 8px 12px;
        --el-card-bg-color: var(--el-fill-color) !important;

        &.is-default-sticky {
            position: sticky;
            top: 0;
            left: 0;
            z-index: 4;

            @media screen and (max-width: 1024px) {
                top: 45px;
            }
        }

        .filters {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .title__navigations {
                display: inherit;
                align-items: center;
                justify-content: space-between;
                gap: 5px;
                flex-wrap: wrap;

                span {
                    display: inherit;
                    gap: inherit;
                    align-items: inherit;
                    font-size: 16px;
                    font-weight: bold;
                }
            }

            .fields {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;

                @media screen and (width <= 768px) {
                    gap: 10px;
                }
            }

            .navigations {
                display: inherit;
                align-items: center;
                gap: inherit;
                flex-wrap: wrap;
            }
        }
    }
</style>