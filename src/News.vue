<script setup>
    import { ref } from 'vue'
    import store from './store';

    const pictures = ref([
        'https://shop.liftnet.ru/tr-lift/dealer.work/newsImagesAndFiles/%D0%90%D0%BA%D1%86%D0%B8%D1%8F.jpg',
        'https://media.istockphoto.com/id/1138429558/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%8F%D0%B4%D1%8B-%D0%BF%D0%BE%D0%BB%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=dBgDd4H3_TQy3r4P53oivjUYolmsRqa_24z5pME-b5w=',
        'https://media.istockphoto.com/id/1256284390/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D0%B2%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B0%D0%B7%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D1%85-%D0%BF%D0%BE%D0%B4%D0%B4%D0%BE%D0%BD%D0%BE%D0%B2-%D0%BE%D1%82-%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%B2%D0%B8%D0%BA%D0%B0-%D0%B4%D0%BE.jpg?s=1024x1024&w=is&k=20&c=piefUnA6zAi3X9O21-m7NTRemZJ4eOuozRBxXGLQhlU=',
        'https://media.istockphoto.com/id/897280394/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D1%81-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=_k01bCFuJA_4esH0z-d-Hd02JGczzkIdHGyZqb6ERYg=',
        
    ])

    let isDetailNews = ref(false)
</script>

<template>
    <div class="news-container">
        <el-card class="card-top_news" :class="{
            'slide-is_auth': store.state.isAuth
        }">
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
                        v-show="store.state.isAuth"
                    >
                        Подробнее
                    </el-button>

                    <span class="desc-nav__date">
                        <el-icon><Calendar></Calendar></el-icon>
                        16.10.2023
                    </span>
                </div>
            </div>
        </el-card>

        <div class="cards_news">
            <el-card class="card"
                v-for="(record, index) in 14"
                :key="index"
            >
                <template #header>
                    <el-carousel class="el-carousel-custom card-carousel"
                        :autoplay="false"
                    >
                        <el-carousel-item
                            v-for="(record, index) in pictures"
                            :key="index"
                        >
                            <el-image class="card-carousel--picture"
                                :src="record"
                                fit="fill"
                            ></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </template>

                <div class="card-content">
                    <h4>Акция на шины</h4>

                    <p>Все в магазин</p>

                    <div class="card-content-nav">
                        <el-button
                            link
                            icon="Right"
                        >
                            Подробнее
                        </el-button>

                        <span>
                            <el-icon><Calendar></Calendar></el-icon>
                            10.08.1999
                        </span>
                    </div>
                </div>
            </el-card>
        </div>

        <el-drawer class="detail-news-drawer"
            v-model="isDetailNews"
            size="100%"
            direction="btt"
        >
            <template #header>
                <span class="detail-news-drawer__header">
                    <h4>Грандиозное снижение цен</h4>
                    <p>На все шины и вилочные погрузчики</p>
                    <p>16.10.2023</p>
                </span>
            </template>

            <div class="detail-news-drawer__content">
                <div v-html="`<table border style='border-collapse: collapse; width: 100%;'><thead><td>10х10</td><td>10х60</td><td>10х30</td><td>10х20</td></thead><tbody><tr><td>a</td><td>b</td><td>c</td><td>d</td></tr><tr><td>a</td><td>b</td><td>c</td><td>d</td></tr><tr><td>a</td><td>b</td><td>c</td><td>d</td></tr></tbody></table><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non molestie libero. Phasellus id augue dapibus, convallis arcu id, vehicula nibh. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed auctor finibus diam, sed ultrices ipsum vulputate dignissim. Praesent pharetra felis sed euismod fringilla. Morbi ultrices neque eu efficitur pretium. Nam et sodales orci. Phasellus a sem tortor. Fusce sit amet auctor mauris. Curabitur quam nulla, ultricies a consectetur at, egestas a magna. Praesent at rhoncus nulla.`"></div>

                <el-carousel class="el-carousel-custom content-carousel">
                    <el-carousel-item
                        v-for="(record, index) in pictures"
                        :key="index"
                    >
                        <el-image class="content-carousel__pictures"
                            :src="record"
                            fit="scale-down"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel> 
            </div>
        </el-drawer>
    </div>
</template>

<style lang="scss">
    .content-carousel .el-carousel__indicators .el-carousel__indicator .el-carousel__button{
        @media screen and (max-width: 425px) {
            background-color: var(--el-color-info) !important;
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
                    color: var(--el-color-white);
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
            }
        }

        .cards_news {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 20px;
            margin-top: 20px;

            .card {
                width: 100%;
                height: 100%;
                --el-card-padding: 0px;

                .card-carousel {
                    .card-carousel--picture {
                        width: 100%;
                        height: 100%;
                    }
                }

                .card-content {
                    padding: 20px;

                    p {
                        margin-top: 10px;
                    }

                    .card-content-nav {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        margin-top: 10px;

                        span {
                            display: inherit;
                            align-items: inherit;
                            gap: 5px;
                        }
                    }
                }
            }
        }

        .detail-news-drawer {
            .detail-news-drawer__header {
                line-height: 25px;
            }

            .detail-news-drawer__content {
                display: flex;
                align-items: flex-start;
                gap: 20px;

                @media screen and (max-width: 1024px) {
                    flex-wrap: wrap-reverse;
                    justify-content: center;
                    gap: 10px;
                }

                .content-carousel {
                    min-width: 500px;
                    border-radius: 4px;

                    @media screen and (max-width: 1024px) {
                        min-width: 100%;
                    }

                    .content-carousel__pictures {
                        width: 100%;
                        height: 100%
                    }
                }
            }
        }
    }
</style>