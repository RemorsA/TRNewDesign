<script setup>
    import { ref } from 'vue'

    const pictures = ref([
        { src: 'https://media.istockphoto.com/id/1138429558/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%8F%D0%B4%D1%8B-%D0%BF%D0%BE%D0%BB%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=dBgDd4H3_TQy3r4P53oivjUYolmsRqa_24z5pME-b5w=' },
        { src: 'https://media.istockphoto.com/id/1256284390/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D0%B9-%D0%B2%D0%BE%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%B8-%D1%80%D0%B0%D0%B7%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B8-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D1%8B%D1%85-%D0%BF%D0%BE%D0%B4%D0%B4%D0%BE%D0%BD%D0%BE%D0%B2-%D0%BE%D1%82-%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%B2%D0%B8%D0%BA%D0%B0-%D0%B4%D0%BE.jpg?s=1024x1024&w=is&k=20&c=piefUnA6zAi3X9O21-m7NTRemZJ4eOuozRBxXGLQhlU=' },
        { src: 'https://media.istockphoto.com/id/897280394/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D1%81-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=_k01bCFuJA_4esH0z-d-Hd02JGczzkIdHGyZqb6ERYg=' },
        { src: 'https://shop.liftnet.ru/tr-lift/dealer.work/newsImagesAndFiles/%D0%90%D0%BA%D1%86%D0%B8%D1%8F.jpg' },
    ])
</script>

<template>
    <div class="news-container">
        <el-card class="card-top_news"
            body-style="
                padding: 0px;
                position: relative;
                user-select: none;
            "
        >
            <!-- <el-carousel
                :style="{
                    '--el-carousel-arrow-background': 'var(--el-color-info)',
                    '--el-carousel-arrow-hover-background': 'var(--el-color-primary)',
                }"
                :interval="10000"
                height="300px"
            >
                <el-carousel-item
                    v-for="(record, index) in pictures"
                    :key="index"
                >
                    <el-image
                        style="width: 100%; height: 100%;"
                        :src="record.src"
                        fit="cover"
                        preview-teleported
                        :preview-src-list="[ record.src ]"
                        hide-on-click-modal
                    ></el-image>
                </el-carousel-item>
            </el-carousel> -->

            <!-- <div style="
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
                gap: 10px;
                padding: 20px;
            ">
                <span>
                    <h4>Новая вилочная техника</h4>
                    <p>На всю технику</p>
                </span>

                <span>
                    <el-icon><Calendar></Calendar></el-icon>
                    13.10.2023
                </span>

                <el-button
                    link
                    type="primary"
                >
                    Подробнее
                </el-button>
            </div> -->

            <!-- <span style="
                color: white;
                position: absolute;
                bottom: 20px;
                left: 20px;
                text-shadow: 1px 1px 1px black;
                font-size: 20px;
                display: flex;
                align-items: center;
                gap: 5px
            ">
                13.10.2023
            </span>

            <span style="
                color: white;
                position: absolute;
                top: 20px;
                left: 20px;
                text-shadow: 1px 1px 1px black;
                font-size: 20px;
            ">
                <h4>Новая вилочная техника</h4>
                <p>На всю технику</p>
            </span>

            <el-button
                style="
                    position: absolute;
                    bottom: 20px;
                    right: 20px;
                "
                type="primary"
            >
                Подробнее
            </el-button> -->
        </el-card>

        <!-- <div class="cards_news">
            <el-card class="card"
                shadow="hover"
                v-for="(record, index) in 11"
                :key="index"
            >
                <template #header>
                    <el-carousel class="card-carousel"
                        :autoplay="false"
                        height="200px"
                    >
                        <el-carousel-item
                            v-for="(record, index) in pictures"
                            :key="index"
                        >
                            <el-image class="card-carousel--picture"
                                :src="record.src"
                                fit="cover"
                            ></el-image>
                        </el-carousel-item>
                    </el-carousel>
                </template>

                <div class="card-content">

                </div>
            </el-card>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
    .news-container {

        // .card-top_news {
        //     --el-card-padding: 0px;

        //     .card-top_news--header-carousel {
        //         --el-carousel-arrow-background: var(--el-color-info);
        //         --el-carousel-arrow-hover-background: var(--el-color-primary);

        //         .card-top_news--header-carousel__picture {
        //             width: 100%;
        //             height: 100%;
        //         }
        //     }

        //     .card-top_news-content {
        //         padding: 20px;
        //     }
        // }

        // .card {
        //     --el-card-padding: 0px;

        //     .card-header-carousel {
        //         --el-carousel-arrow-background: var(--el-color-info);
        //         --el-carousel-arrow-hover-background: var(--el-color-primary); 

        //         .card-header-carousel__picture {
        //             width: 100%;
        //             height: 100%;
        //         }
        //     }

        //     &.top_news {

        //     }
        // }
        // .top_news {
        //     --el-card-padding: 0px;

        //     .top_news-content {
        //         display: grid;
        //         grid-template-columns: 450px 1fr;
        //         gap: 20px;
        //         padding: 20px;
        //     }
        // }

        // .cards_news {
        //     display: grid;
        //     grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        //     gap: 20px;
        //     margin-top: 20px;

        //     // .card {
        //     //     width: 100%;
        //     //     height: 400px;
        //     //     --el-card-padding: 0px;

        //     //     .card-carousel {
        //     //         --el-carousel-arrow-background: var(--el-color-info);
        //     //         --el-carousel-arrow-hover-background: var(--el-color-primary); 

        //     //         .card-carousel--picture {
        //     //             width: 100%;
        //     //             height: 100%;
        //     //         }
        //     //     }
        //     // }
        // }

        
    }
</style>