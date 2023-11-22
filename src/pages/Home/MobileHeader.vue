<script setup>
    import store from '@/store/store'
    import router from '@/router'
    import { computed } from 'vue'

    const homeStore = computed(() => store.state.Home)
</script>

<template>
    <el-page-header class="mobile-page__header"
        title="Меню"
        icon="Expand"
        @back="homeStore.isMobileMenu = !homeStore.isMobileMenu"
        v-show="store.state.isAuth"
    >
        <template #content>
            <span class="route__title">
                {{ router.currentRoute.value.meta.title }}
            </span>
        </template>

        <template #extra>
            <a href="/TRNewDesign/news_page">
                <el-image class="page__header-logo-picture"
                    src="/TRNewDesign/logo.png"
                ></el-image>
            </a>
        </template>
    </el-page-header>
</template>

<style lang="scss" scoped>
    .mobile-page__header {
        display: none;
        z-index: 5;

        @media screen and (max-width: 1024px) {
            display: block;
            position: sticky;
            top: 0;
            left: 0;
            padding: 10px;
            box-shadow: var(--el-box-shadow-light);
            background: rgb(63,107,183);
            color: white;
        }

        .page__header-logo-picture {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 20px;
            min-width: 100px;
        }

        .route__title {
            font-size: 14px;
            color: var(--el-color-white);

            @media screen and (width < 768px) {
                font-size: 13px;
            }

            @media screen and (width < 425px) {
                display: none;
            }
        }
    }
</style>