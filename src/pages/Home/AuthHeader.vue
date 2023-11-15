<script setup>
    import store from '@/store/store'
    import routerGo from '@/store/helpers/RouterGo'
</script>

<template>
    <el-card class="auth-page__header"
        body-style="background: rgb(63,107,183);"
        v-show="!store.state.isAuth"
    >
        <div class="auth-page__header-content">
            <el-image
                src="/TRNewDesign/logo.png"
                fit="scale-down"
            ></el-image>

            <el-button class="auth-page__header-content--button"
                link
                icon="User"
                @click="routerGo('/auth')"
            >
                Войти
            </el-button>
        </div>
    </el-card>
</template>

<style lang="scss" scoped>
    .auth-page__header {
        margin: 20px 20px 0 20px;

        @media screen and (max-width: 1024px) {
            margin: 10px 10px 0 10px;
        }

        .auth-page__header-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;

            .auth-page__header-content--button {
                color: white;

                &:hover {
                    color: var(--el-color-primary)
                }
            }
        }
    }
</style>