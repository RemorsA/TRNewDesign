<script setup>
    const props = defineProps({
        text: {
            required: true,
            type: String,
            default: ''
        }
    })
</script>

<template>
    <el-tooltip
        :content="text"
        placement="top"
        raw-content
    >
        <span>
            <el-icon><QuestionFilled></QuestionFilled></el-icon>
            <slot></slot>
        </span>
    </el-tooltip>
</template>

<style lang="scss" scoped></style>