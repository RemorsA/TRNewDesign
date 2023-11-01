<script setup>
    import store from '@/store'

    const props = defineProps({
        sticky: {
            type: Boolean,
            required: false,
            default: true
        }
    })

    const emits = defineEmits([])
</script>

<template>
    <el-card class="pagination__card"
        :class="{
            'is-default-sticky': sticky
        }"
    >
        <el-row class="navigation__row"
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

            <slot></slot>
        </el-row>
    </el-card>
</template>

<style lang="scss" scoped>
    .pagination__card {
        // max-width: clamp(min(300px), 360px, max(100%));
        display: block;
        margin: 20px auto 0 auto;
        --el-card-padding: 8px 12px;
        --el-card-bg-color: var(--el-fill-color) !important;

        .navigation__row {
            gap: 10px;
            flex-wrap: wrap-reverse;

            .pagination {
                --el-pagination-bg-color: var(--el-color-fill);
                --el-pagination-button-disabled-bg-color: transparent;
                --el-pagination-item-gap: 0px;
            }
        }

        &.is-default-sticky {
            position: sticky;
            bottom: 0;
            left: 0;
            z-index: 4;
        }
    }
</style>