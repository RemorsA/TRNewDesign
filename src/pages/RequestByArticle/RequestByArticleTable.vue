<script setup>
    import store from '@/store/store'
</script>

<template>
    <el-table
        border
        size="small"
        :data="store.state.tData.slice(0)"
    >
        <el-table-column label="daw" prop="about"></el-table-column>
    </el-table>
</template>

<style lang="scss" scoped>

</style>