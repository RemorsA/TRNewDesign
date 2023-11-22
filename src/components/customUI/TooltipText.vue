<script setup>
    const props = defineProps({
        content: {
            required: false,
            type: String,
            default: ''
        },
        text: {
            required: false,
            type: String,
            default: ''
        }
    })
</script>

<template>
    <el-tooltip
        :content="content"
        :show-arrow="false"
        trigger="click"
        popper-style="width: 50vw"
        placement="bottom-end"
    >
        <span class="text__row" v-html="text"></span>
    </el-tooltip>
</template>

<style lang="scss" scoped>
    .text__row {
        white-space: nowrap;
        max-width: 200px;
        cursor: pointer;

        &:hover {
            color: var(--el-color-primary);
            text-decoration: underline
        }
    }
</style>