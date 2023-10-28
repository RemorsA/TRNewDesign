<script setup>
    import router from './router';
</script>

<template>
    <el-result sub-title="Страница не найдена">
        <template #icon>
            <el-image
                src="/TRNewDesign/notfound.png"
            ></el-image>
        </template>

        <template #extra>
            <el-link
                icon="Back"
                @click="router.back()"
                style="gap: 5px"
            >
                Вернуться назад
            </el-link>
        </template>
    </el-result>
</template>

<style lang="scss" scoped></style>