<script setup>
    import Menu from './Menu.vue'

    defineProps({ modelValue: Boolean })

    defineEmits([ 'update:modelValue' ])
</script>

<template>
    <el-drawer class="el-drawer-custom"
        :model-value="modelValue"
        @close="$emit('update:modelValue', false)"
        size="100%"
    >
        <!-- <Menu></Menu> -->
    </el-drawer>
</template>

<style lang="scss">
    .el-drawer-custom {

    }
</style>