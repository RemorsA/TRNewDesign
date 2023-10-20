<script setup>
    import { ref, computed } from 'vue'
    import store from './store';

    const state = computed(() => store.state).value

    let isDetailNews = ref(false)
    let isDetailNewsData = ref({})
    let newsArr = ref([
        {
            pictures: [
                'https://shop.liftnet.ru/tr-lift/dealer.work/newsImagesAndFiles/msg5011511819-88316.jpg',
                'https://shop.liftnet.ru/tr-lift/dealer.work/newsImagesAndFiles/msg5011511819-88314.jpg',
                'https://shop.liftnet.ru/tr-lift/dealer.work/newsImagesAndFiles/msg5011511819-88315.jpg',
                'https://shop.liftnet.ru/tr-lift/dealer.work/newsImagesAndFiles/msg5011511819-88316.jpg'
            ],
            title: 'Акция на шины',
            description: 'Все в магазин',
            date: '10.07.1984',
            detail: `
<table border style='border-collapse: collapse; width: 100%;'>
<thead>
<td>10х10</td>
<td>10х60</td>
<td>10х30</td>
<td>10х20</td>
</thead>
<tbody>
<tr>
<td>a</td>
<td>b</td>
<td>c</td>
<td>d</td>
</tr>
<tr>
<td>a</td>
<td>b</td>
<td>c</td>
<td>d</td>
</tr>
<tr>
<td>a</td>
<td>b</td>
<td>c</td>
<td>d</td>
</tr>
</tbody>
</table>
<br>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non molestie libero. 
Phasellus id augue dapibus, convallis arcu id, vehicula nibh. Class aptent taciti 
sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed auctor 
finibus diam, sed ultrices ipsum vulputate dignissim. Praesent pharetra felis sed 
euismod fringilla. Morbi ultrices neque eu efficitur pretium. Nam et sodales orci. 
Phasellus a sem tortor. Fusce sit amet auctor mauris. Curabitur quam nulla, ultricies a 
consectetur at, egestas a magna. Praesent at rhoncus nulla.
            `,
            edit: false,
            main: false
        }
    ])

    function uploadPicture(record) {
        if (state.isAuth && state.isEditNews) {
            record.pictures.forEach((el, index) => {
                if (el === '') {
                    record.pictures.splice(index, 1)
                }
            })

            let input = document.createElement('input')
            input.setAttribute('type', 'file')
            input.setAttribute("accept", 'png, jpg, JPG, jpeg')
            input.type = 'file'

            input.onchange = async (event) => {
                const file = URL.createObjectURL(event.target.files[0])

                record?.pictures.push(file)
            }

            input.click()
        }
    }
    function deletePicture(record, index) {
        record.pictures.splice(index, 1)

        if (record.pictures?.length === 0) {
            record.pictures.push('')
        }
    }

    function addCardNews() {
        newsArr.value.push({
            pictures: [''],
            title: '',
            description: '',
            date: '',
            detail: '',
            edit: true,
        })
    }
    function deleteCardNews(index) {
        newsArr.value.splice(index, 1)
    }

    function inTopCardNews(record) {
        console.log(record)
    }
    function inOtherNews(record) {
        console.log(record)
    }

    function detailNews(record) {
        isDetailNewsData.value = record
        isDetailNews.value = true
    }
</script>

<template>
    <div class="news-container">
        <!-- <el-card class="card-top_news"
            :class="{
                'slide-is_auth': state.isAuth
            }"
        >
            <div class="news-carousel-desc">
                <el-carousel class="carousel"
                    indicator-position="none"
                    arrow="never"
                >
                    <el-carousel-item class="el-carousel-custom carousel-item"
                        v-for="(record, index) in pictures"
                        :key="index"
                    >
                        <el-image class="carousel-item__pictures"
                            :src="record"
                            fit="cover"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>

                <span class="desc-title">
                    <h3>Грандиозное снижение цен</h3>
                    <p>На все шины и вилочные погрузчики</p>
                </span>

                <div class="desc-nav">
                    <el-button class="desc-nav__button"
                        link
                        icon="Right"
                        color="currentColor"
                        @click="isDetailNews = true"
                        v-show="state.isAuth"
                    >
                        Подробнее
                    </el-button>

                    <span class="desc-nav__date">
                        <el-icon><Calendar></Calendar></el-icon>
                        16.10.2023
                    </span>
                </div>

                <div class="desc-nav-delete__edit">
                    <el-button
                        link
                        v-show="state.isEditNews && state.isAuth"
                        @click="router.push('/home/news_edit')"
                        icon="Edit"
                    >
                        Редактировать
                    </el-button>

                    <el-button
                        link
                        v-show="state.isEditNews && state.isAuth"
                        icon="Delete"
                    >
                        Удалить
                    </el-button>
                </div>
            </div>
        </el-card> -->

        <el-space class="cards_news"
            wrap
            :size="0"
            alignment="center"
        >
            <el-card class="card"
                v-for="(record, index) in newsArr"
                :key="index"
            >
                <template #header>
                    <el-carousel class="el-carousel-custom el-carousel-custom-this_page"
                        :autoplay="false"
                        :class="{
                            'is-hover': state.isAuth && state.isEditNews && record.edit
                        }"
                    >
                        <el-carousel-item
                            v-for="(pic, picIndex) in record.pictures"
                            :key="picIndex"
                        >
                            <el-image
                                :src="pic"
                                fit="scale-down"
                                style="width: 100%; height: 100%;"
                            ></el-image>

                            <div class="carousel-image-edit__nav">
                                <el-button
                                    link
                                    icon="Delete"
                                    title="Удалить это изображение"
                                    @click="deletePicture(record, picIndex)"
                                ></el-button>

                                <el-button
                                    title="Добавить изображение в общий список"
                                    link
                                    icon="Plus"
                                    @click="uploadPicture(record)"
                                ></el-button>
                            </div>
                        </el-carousel-item>
                    </el-carousel>
                </template>

                <div class="card-content">
                    <input class="card-content__title"
                        type="text"
                        v-model="record.title"
                        placeholder="Заголовок"
                        v-if="record.edit"
                    >

                    <h4 v-else>{{ record.title || 'Пусто' }}</h4>

                    <input class="card-content__description"
                        type="text"
                        v-model="record.description"
                        placeholder="Описание"
                        v-if="record.edit"
                    >

                    <p v-else>{{ record.description || 'Пусто' }}</p>

                    <el-date-picker class="date-picker-this_page_custom"
                        v-model="record.date"
                        placeholder="Дата"
                        format="DD.MM.YYYY"
                        v-if="record.edit"
                        :clearable="false"
                    ></el-date-picker>

                    <span v-else>
                        <el-icon><Calendar></Calendar></el-icon>
                        {{ new Date(record.date).toLocaleDateString() === 'Invalid Date' ? 'Пусто' : new Date(record.date).toLocaleDateString() }}
                    </span>

                    <el-button-group>
                        <el-button
                            v-show="state.isAuth"
                            icon="Right"
                            @click="detailNews(record)"
                        >
                            Подробнее
                        </el-button>

                        <el-button
                            v-show="state.isEditNews && state.isAuth"
                            :icon="record.edit ? 'Select' : 'Edit'"
                            @click="record.edit = !record.edit"
                            :title="record.edit ? 'Сохранить' : 'Редактировать новость'"
                        ></el-button>

                        <el-button
                            v-show="state.isEditNews && state.isAuth"
                            icon="Delete"
                            @click="deleteCardNews(index)"
                            title="Удалить новость"
                        ></el-button>

                        <el-button
                            v-show="state.isEditNews && state.isAuth"
                            icon="Top"
                            @click="inTopCardNews(record)"
                            title="Новость в топ"
                        ></el-button>
                    </el-button-group>
                </div>
            </el-card>

            <el-card class="card add"
                v-show="state.isAuth && state.isEditNews"
                @click="addCardNews"
            >
                <el-icon><Plus></Plus></el-icon>
                Добавить новость
            </el-card>
        </el-space>

        <el-drawer class="detail-news-drawer"
            v-model="isDetailNews"
            size="100%"
            direction="btt"
        >
            <el-row align="middle" :gutter="20">
                <el-col :xs="24" :sm="24" :md="10" :lg="7">
                    <el-carousel class="el-carousel-custom custom-carousel"
                        :autoplay="false"
                        arrow="always"
                    >
                        <el-carousel-item
                            v-for="(record, index) in isDetailNewsData.pictures"
                            :key="index"
                        >
                            <el-image
                                :src="record"
                                fit="scale-down"
                                :preview-src-list="isDetailNewsData.pictures"
                                hide-on-click-modal
                                preview-teleported
                                style="width: 100%; height: 100%;"
                            ></el-image>
                        </el-carousel-item>
                    </el-carousel> 
                </el-col>

                <el-col :xs="24" :sm="24" :md="14" :lg="17" class="detail-news-drawer__content">
                    <span class="detail-news-drawer__content-header">
                        <h4>{{ isDetailNewsData.title }}</h4>
                        <p>{{ isDetailNewsData.description }}</p>
                        <p>{{ isDetailNewsData.date }}</p>
                    </span>

                    <el-divider></el-divider>

                    <div v-html="isDetailNewsData.detail"></div>
                </el-col>
            </el-row>
        </el-drawer>
    </div>
</template>

<style lang="scss">
    .date-picker-this_page_custom {
        &.el-input {
            width: 100%;

            .el-input__wrapper {
                padding: 0;
                box-shadow: none;
            }
        }
    }
</style>

<style lang="scss" scoped>
    .news-container {

        .card-top_news {
            --el-card-padding: 0px;
            user-select: none;
            pointer-events:visibleFill;

            &.slide-is_auth:hover {
                .desc-nav .desc-nav__button {
                    transform: translateY(0px) !important;
                }
                .desc-nav__date {
                    transform: translateX(0) !important;
                }

                .desc-nav-delete__edit {
                    transform: translateY(0);
                }
            }

            .news-carousel-desc {
                position: relative;
                z-index: 0;

                .carousel {
                    height: 300px;

                    .carousel-item {
                        .carousel-item__pictures {
                            width: 100%;
                            height: 100%;
                            filter: blur(2px) brightness(0.3);
                        }
                    }
                }

                .desc-title {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    line-height: 30px;
                    color: var(--el-color-white);
                }

                .desc-nav {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    justify-content: center;
                    display: flex;
                    align-items: center;
                    gap: 50px;
                    bottom: 20px;

                    .desc-nav__button {
                        transition: all .5s;
                        transform: translateY(100px);
                    }

                    .desc-nav__date {
                        transition: all .5s;
                        display: inherit;
                        gap: 5px;
                        align-items: inherit;
                        font-size: 14px;

                        transform: translateX(-75px);
                    }
                }

                .desc-nav-delete__edit {
                    position: absolute;
                    bottom: 0;
                    right: 20px;
                    text-align: center;
                    bottom: 20px;
                    transition: all .5s;
                    transform: translateY(100px);
                }
            }
        }

        .cards_news {
            margin-top: 20px;
            justify-content: center;
            gap: 20px;

            .card {
                --el-card-padding: 0px;
                height: 100%;
                width: 400px;

                &.add {
                    height: 465px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px dashed transparent;
                    cursor: pointer;

                    &:hover {
                        border-color: var(--el-color-primary);
                        color: var(--el-color-primary)
                    }
                }

                @media screen and (max-width: 425px) {
                    width: 300px;
                }

                .el-carousel-custom-this_page {
                    position: relative;

                    .carousel-image-edit__nav {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        background: rgba(0, 0, 0, 0.8);
                        top: 0;
                        left: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        transition: all .5s;
                        visibility: hidden;

                        button {
                            font-size: 20px;
                            color: white;

                            &:hover {
                                color: var(--el-color-primary)
                            }
                        }
                    }

                    &.is-hover:hover {
                        .carousel-image-edit__nav {
                            visibility: visible;
                            opacity: 1;
                        }
                    }
                }

                .card-content {
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    word-break: keep-all;

                    input {
                        color: var(--el-text-color-primary);
                        border: 0;
                        background: none;
                        outline: none;
                        border-bottom: 1px solid var(--el-color-info);
                    }

                    .card-content__title {
                        font-size: 16px;
                        font-weight: bold;
                    }

                    .card-content__description {
                        font-size: 14px;
                    }
                }
            }
        }

        .detail-news-drawer {
            .detail-news-drawer__content {
                @media screen and (max-width: 1200px) {
                    margin-top: 20px;
                }

                .detail-news-drawer__content-header {
                    display: block;
                    line-height: 25px;
                    color: currentColor;
                }
            }
        }
    }
</style>