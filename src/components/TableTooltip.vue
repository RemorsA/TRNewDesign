<script setup>
    const props = defineProps({
        text: {
            required: false,
            type: String,
            default: ''
        },
        content: {
            required: false,
            type: String,
            default: ''
        }
    })
</script>

<template>
    <el-tooltip
        :content="content"
        placement="top"
        raw-content
    >
        <span>
            <el-icon><QuestionFilled></QuestionFilled></el-icon>
            <span v-html="text"></span>
        </span>
    </el-tooltip>
</template>

<style lang="scss" scoped></style>