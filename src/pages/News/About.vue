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

    const pageState = computed(() => store.state)
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

    <el-button
        style="margin-top: 20px;"
        v-show="pageState.isEditNews"
        :icon="!findFeed?.edit ? 'Edit' : 'Check'"
        :type="!findFeed?.edit ? 'primary' : 'success'"
        @click="findFeed.edit = !findFeed?.edit"
        text
        bg
    >
        {{ !findFeed?.edit ? 'Редактировать новость' : 'Сохранить' }}
    </el-button>

    <div class="about-container">
        <el-carousel class="carousel-content__left el-carousel-custom"
            :autoplay="false"
            trigger="click"
            height="100%"
            arrow="never"
            v-if="findFeed?.edit"
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

        <div v-else>edit</div>

        <div class="content__right">
            <el-divider>
                <section class="date__divider-inside-content">
                    <span class="date-icon"
                        v-if="!findFeed?.edit"
                    >
                        <el-icon><Calendar></Calendar></el-icon>
                        {{ findFeed?.date ? findFeed?.date.toLocaleDateString() : 'Дата отсутствует' }}
                    </span>

                    <el-date-picker
                        v-else
                        v-model="findFeed.date"
                        :clearable="false"
                    ></el-date-picker>
                </section>
            </el-divider>

            <el-row class="title-wrapper">
                <h4 v-if="!findFeed?.edit">
                    {{ findFeed?.title }}
                </h4>

                <el-input
                    v-else
                    v-model="findFeed.title"
                ></el-input>
            </el-row>

            <el-row class="description-wrapper">
                <p v-if="!findFeed?.edit">
                    {{ findFeed?.description }}
                </p>

                <el-input
                    v-else
                    v-model="findFeed.description"
                ></el-input>
            </el-row>

            <el-row class="body__content-wrapper">
                <div
                    v-if="!findFeed?.edit"
                    v-html="findFeed?.body"
                ></div>

                <el-input
                    v-else
                    type="textarea"
                    autosize
                    v-model="findFeed.body"
                ></el-input>
            </el-row>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '@/styles/News/About.scss';
</style>