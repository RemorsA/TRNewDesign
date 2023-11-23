<script setup>
    import router from "@/router"
    import store from '@/store/store'
    import { computed, onMounted } from 'vue'

    onMounted(() => {
        store.dispatch('News/fetchAllNews')
    })

    const findFeed = computed(() => {
        return store.state.News.items.find(el =>
            router.currentRoute.value.params.mode === 'reed' &&
            el.id === router.currentRoute.value.params.id
        )
    })
</script>

<template>
    <el-breadcrumb>
        <el-breadcrumb-item
            :to="{ name: 'news' }"
        >
            Все новости
        </el-breadcrumb-item>

        <el-breadcrumb-item>
            {{ findFeed?.title }}
        </el-breadcrumb-item>
    </el-breadcrumb>

    <div class="about-container">
        <el-carousel class="carousel-content__left el-carousel-custom"
            :autoplay="false"
            trigger="click"
            height="100%"
        >
            <el-carousel-item
                v-for="(pic, index) in findFeed?.images"
                :key="index"
            >
                <el-image class="carousel__items-picture"
                    :src="pic"
                    fit="scale-down"
                ></el-image>
            </el-carousel-item>
        </el-carousel>

        <div class="content__right">
            <el-divider>
                <el-icon><Calendar></Calendar></el-icon>

                {{ findFeed?.date.toLocaleDateString() }}
            </el-divider>

            <h4>{{ findFeed?.title }}</h4>

            <p>{{ findFeed?.description }}</p>

            <div v-html="findFeed?.body"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/News/About.scss';
</style>