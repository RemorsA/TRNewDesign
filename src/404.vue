<script setup>
    import router from './router';
</script>

<template>
    <el-result class="page-not-found"
        sub-title="Страница не найдена"
    >
        <template #icon>
            <el-image
                src="../../public/notfound.png"
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

<style lang="scss" scoped>
    .page-not-found {
        width: 100%;
        height: 90vh
    }
</style>