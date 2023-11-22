<script setup>
    import { computed, onMounted } from 'vue'
    import store from '@/store/store'
    import router from '@/router'

    onMounted(async () => {
        await store.dispatch('News/fetchAllNews')
    })

    // const state = computed(() => store.state)
</script>

<template>
    <div class="news__card-top">
        <div class="date-action_button">
            <span>
                <el-icon><Calendar></Calendar></el-icon>
                {{ new Date(store.getters['News/filteredTopFeed'].top.date).toLocaleDateString() }}
            </span>

            <el-link
                icon="TopRight"
                type="primary"
                @click="router.push({
                    name: 'about',
                    params: {
                        id: store.getters['News/filteredTopFeed'].top.id
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
            indicator-position="none"
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

    <div></div>

    <!-- <el-timeline>
        <el-timeline-item
            v-for="(row, index) in store.getters['News/filteredTopFeed']"
            :key="row.id || index"
            :timestamp="parseDate(row.date).value"
            placement="top"
            color="var(--el-color-primary)"
        > -->
            <!-- <div class="rows">
                <span class="is-top-news" v-if="index === 0">
                    Главная новость
                </span>

                <div class="row__content">
                    <el-carousel class="carousel el-carousel-custom"
                        :autoplay="false"
                        arrow="never"
                        trigger="click"
                        v-if="!row.edit"
                    >
                        <el-carousel-item
                            v-for="(pic, idx) in row.images"
                            :key="idx"
                        >
                            <el-image class="picture picture__cover-hover"
                                :src="pic"
                                :alt="idx"
                                fit="scale-down"
                                hide-on-click-modal
                                preview-teleported
                                :initial-index="idx"
                                :preview-src-list="row.images"
                            ></el-image>
                        </el-carousel-item>
                    </el-carousel>

                    <div class="edit__carousel-pictures" v-else>
                        <section class="pictures__wrapper"
                            v-for="(pic, idx) in row.images"
                            :key="idx"
                        >
                            <el-image class="picture picture__cover-hover"
                                fit="cover"
                                :src="pic"
                                hide-on-click-modal
                                preview-teleported
                                :initial-index="idx"
                                :preview-src-list="row.images"
                            ></el-image>

                            <el-button class="add__picture"
                                type="danger"
                                link
                                icon="Delete"
                                @click="row.images.splice(idx, 1)"
                            ></el-button>
                        </section>

                        <el-button
                            icon="Plus"
                            link
                            type="primary"
                            @click="row.images.push('https://media.istockphoto.com/id/1332478606/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D1%88%D0%B8%D0%BD%D0%B0-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%BD%D0%B0-%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%88%D0%B8%D0%BD-%D0%B2-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D1%83%D0%B4%D1%8C%D1%82%D0%B5-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B-%D0%BA.jpg?s=1024x1024&w=is&k=20&c=kx9_JEgjkoSgtSuDQksSNJTPkWEAIcXoRyCr-Cfn_OU=')"
                        >
                            Добавить
                        </el-button>
                    </div>

                    <section class="content">
                        <div v-if="!row.edit">
                            <h4 class="title">
                                {{ row.title }}
                            </h4>

                            <p class="description">
                                {{ row.description }}
                            </p>

                            <div class="detail"
                                v-html="row.body"
                            ></div>
                        </div>

                        <div v-else>
                            <el-date-picker
                                v-model="row.date"
                            ></el-date-picker>

                            <el-input
                                v-model="row.title"
                                clearable
                            ></el-input>

                            <el-input
                                v-model="row.description"
                                clearable
                            ></el-input>

                            <el-input
                                v-model="row.body"
                                type="textarea"
                                autosize
                            ></el-input>
                        </div>

                        <div class="actions-buttons" v-show="state.isEditNews">
                            <el-button
                                :icon="!row.edit ? 'Edit' : 'Check'"
                                @click="row.edit = !row.edit"
                                :type="!row.edit ? '' : 'success'"
                            >
                                {{ !row.edit ? 'Редактировать' : 'Сохранить' }}
                            </el-button>

                            <el-button
                                icon="Delete"
                                v-show="row.edit && !row.top"
                                @click="store.commit('News/deleteItem', row.id)"
                            >
                                Удалить
                            </el-button>

                            <el-button
                                icon="Top"
                                v-show="row.edit && !row.top"
                                @click="store.commit('News/setInTop', row)"
                            >
                                Сделать главной
                            </el-button>
                        </div>
                    </section>
                </div>
            </div> -->
        <!-- </el-timeline-item>
    </el-timeline>

    <el-row justify="end" class="add__news-button">
        <el-button
            v-show="state.isEditNews"
            icon="Plus"
            type="primary"
            text
            bg
            @click="store.commit('News/addItem')"
        >
            Добавить новость
        </el-button>
    </el-row> -->
</template>

<style lang="scss">
@import '@/styles/News/NewsEditClasses';
</style>

<style lang="scss" scoped>
@import '@/styles/News/News.scss';
</style>