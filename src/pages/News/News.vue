<script setup>
    import { computed, onMounted } from 'vue'
    import store from '@/store/store'
    import router from '@/router'

    onMounted(async () => {
        await store.dispatch('News/fetchAllNews')
    })

    const state = computed(() => store.state)
</script>

<template>
    <div class="news__card-top">
        <div class="date-action_button">
            <span>
                <el-icon><Calendar></Calendar></el-icon>
                {{ new Date(store.getters['News/filteredTopFeed'].top.date).toLocaleDateString() }}
            </span>

            <el-link
                v-show="store.getters['News/filteredTopFeed'].top.body"
                icon="TopRight"
                type="primary"
                @click="router.push({
                    name: 'about',
                    params: {
                        id: store.getters['News/filteredTopFeed'].top.id,
                        mode: 'reed'
                    }
                })"
            >
                Подробнее
            </el-link>
        </div>

        <section class="content__text">
            <h4>
                {{ store.getters['News/filteredTopFeed'].top.title }}
            </h4>

            <p>
                {{ store.getters['News/filteredTopFeed'].top.description }}
            </p>
        </section>

        <el-carousel class="carousel__pictures"
            arrow="never"
            trigger="click"
        >
            <el-carousel-item
                v-for="(pic, index) in store.getters['News/filteredTopFeed'].top.images"
                :key="index"
            >
                <el-image class="carousel__item-picture"
                    :src="pic"
                    fit="cover"
                ></el-image>
            </el-carousel-item>
        </el-carousel>
    </div>

    <div class="news__cards-other-wrapper">
        <div class="card"
            v-for="(card, index) in store.getters['News/filteredTopFeed'].items"
            :key="card.id || index"
        >
            <div class="card__header">
                <el-carousel class="carousel el-carousel-custom"
                    :autoplay="false"
                    arrow="never"
                    trigger="click"
                >
                    <el-carousel-item
                        v-for="(pic, idx) in card.images"
                        :key="idx"
                    >
                        <el-image class="carousel__items-picture"
                            :src="pic"
                            :alt="idx"
                            fit="cover"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>
            </div>

            <div class="card__body">
                <h4>{{ card.title }}</h4>

                <p>{{ card.description }}</p>
            </div>

            <div class="card__footer">
                <span>
                    <el-icon><Calendar></Calendar></el-icon>
                    {{ card.date.toLocaleDateString() }}
                </span>

                <el-link
                    v-show="card.body"
                    type="primary"
                    icon="TopRight"
                    @click="router.push({
                        name: 'about',
                        params: {
                            id: card.id,
                            mode: 'reed'
                        }
                    })"
                >
                    Подробнее
                </el-link>
            </div>
        </div>
    </div>

    <el-row justify="end" class="add__news-button">
        <el-button
            v-show="state.isEditNews"
            icon="Plus"
            type="primary"
            @click="router.push({
                name: 'about',
                params: {
                    id: 'null',
                    mode: 'write'
                }
            })"
        >
            Добавить новость
        </el-button>
    </el-row>
</template>

<style lang="scss">
@import '@/styles/News/NewsEditClasses';
</style>

<style lang="scss" scoped>
@import '@/styles/News/News.scss';
</style>