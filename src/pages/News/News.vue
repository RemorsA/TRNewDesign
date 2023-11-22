<script setup>
    import { ref, computed, onMounted } from 'vue'
    import store from '@/store/store'
    import { ElNotification } from 'element-plus'

    onMounted(() => {
        for (let i = 0; i < 12; i++) {
            newsItems.value.push({
                id: `${i + 1}`,
                title: `Новость ${i + 1}`,
                description: `Описание новости ${i + 1}`,
                images: [
                    'https://media.istockphoto.com/id/1332478606/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D1%88%D0%B8%D0%BD%D0%B0-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%BD%D0%B0-%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%88%D0%B8%D0%BD-%D0%B2-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D1%83%D0%B4%D1%8C%D1%82%D0%B5-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B-%D0%BA.jpg?s=1024x1024&w=is&k=20&c=kx9_JEgjkoSgtSuDQksSNJTPkWEAIcXoRyCr-Cfn_OU=',
                    'https://media.istockphoto.com/id/1334499812/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B-%D0%B8-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81-%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA-%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%89%D0%B8%D0%B9-%D0%BD%D0%BE%D0%B2%D1%83%D1%8E-%D1%88%D0%B8%D0%BD%D1%83-%D0%BD%D0%B0-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B3%D0%B0%D1%80%D0%B0%D0%B6%D0%B0-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?s=1024x1024&w=is&k=20&c=c5rfRjiqMRhAt3EtechuSADd2CU0hejq10XJtF3Wi94=',
                    'https://media.istockphoto.com/id/1317641180/ru/%D1%84%D0%BE%D1%82%D0%BE/4-wd-suv-allroad-%D1%88%D0%B8%D0%BD%D1%8B-%D0%B2%D1%81%D0%B5-%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D1%88%D0%B8%D0%BD%D1%8B-%D1%81%D1%82%D0%B5%D0%BA-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8-%D0%B3%D1%80%D1%8F%D0%B7%D0%B8-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%B5%D1%80%D1%8B-%D0%BA%D0%BE%D0%BB%D0%B5%D1%81%D0%BE.jpg?s=1024x1024&w=is&k=20&c=2cCCOXsQCcj7imXlnHUAZQcDtRxHydtd3p0PEJgKld0=',
                    'https://media.istockphoto.com/id/1341247101/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%88%D0%B8%D0%BD%D1%8B-%D0%B2-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D1%85-%D1%81-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=Je15alZWgwadol4hcAaFunPXlnjKyg0ZhOVZ9pHwpu4='
                ],
                date: new Date(2021, i, 1),
                body: `<table class="detail-table"> <thead> <td>шапка</td> <td>шапка</td> <td>шапка</td> <td>шапка</td> </thead> <tbody> <td>тело</td> <td>тело</td> <td>тело</td> <td>тело</td> </tbody> <tbody> <td>тело</td> <td>тело</td> <td>тело</td> <td>тело</td> </tbody> </table> <br> <a class="detail-link" download href="/logo.png">Противоположная</a> точка зрения подразумевает, базовые сценарии поведения пользователей могут быть объективно рассмотрены соответствующими инстанциями. Кстати, многие известные личности представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть функционально разнесены на независимые элементы. А ещё сторонники тоталитаризма в науке, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут ассоциативно распределены по отраслям!`,
                hide: false,
                top: false,
                edit: false
            })
        }

        newsItems.value.push({
            id: '23322',
            title: `Новость TOP`,
            description: `Описание новости TOP`,
            images: [
                'https://media.istockphoto.com/id/1138429558/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%8F%D0%B4%D1%8B-%D0%BF%D0%BE%D0%BB%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=dBgDd4H3_TQy3r4P53oivjUYolmsRqa_24z5pME-b5w=',
                'https://media.istockphoto.com/id/1304746031/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9.jpg?s=1024x1024&w=is&k=20&c=gIPY6YdXH3hm7d3qQQ4V9LRcErEsM6WX79Jm2IbmsKg=',
                'https://media.istockphoto.com/id/897280394/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D1%81-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=_k01bCFuJA_4esH0z-d-Hd02JGczzkIdHGyZqb6ERYg=',
                'https://media.istockphoto.com/id/824351914/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4-%D1%81-%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%B2%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8.jpg?s=1024x1024&w=is&k=20&c=wJ9LyM2G7Hw05hhvhqLEntt8JKT2m0YLdNw0S2QjA48=',
                'https://media.istockphoto.com/id/513380472/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BD%D0%BE%D0%B3%D0%B8%D0%B5-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B8-%D0%B2-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4.jpg?s=1024x1024&w=is&k=20&c=oRegsLBFb0r4qfiQDlviDvpTqaOcl25iwHKX2e4TJrM='
            ],
            date: new Date(2021, 3, 1),
            body: `<table class="detail-table"> <thead> <td>шапка</td> <td>шапка</td> <td>шапка</td> <td>шапка</td> </thead> <tbody> <td>тело</td> <td>тело</td> <td>тело</td> <td>тело</td> </tbody> <tbody> <td>тело</td> <td>тело</td> <td>тело</td> <td>тело</td> </tbody> </table> <br> <a class="detail-link" download href="/logo.png">Противоположная</a> точка зрения подразумевает, базовые сценарии поведения пользователей могут быть объективно рассмотрены соответствующими инстанциями. Кстати, многие известные личности представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть функционально разнесены на независимые элементы. А ещё сторонники тоталитаризма в науке, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут ассоциативно распределены по отраслям!        <table class="detail-table"> <thead> <td>шапка</td> <td>шапка</td> <td>шапка</td> <td>шапка</td> </thead> <tbody> <td>тело</td> <td>тело</td> <td>тело</td> <td>тело</td> </tbody> <tbody> <td>тело</td> <td>тело</td> <td>тело</td> <td>тело</td> </tbody> </table> <br> <a class="detail-link" download href="/logo.png">Противоположная</a> точка зрения подразумевает, базовые сценарии поведения пользователей могут быть объективно рассмотрены соответствующими инстанциями. Кстати, многие известные личности представляют собой не что иное, как квинтэссенцию победы маркетинга над разумом и должны быть функционально разнесены на независимые элементы. А ещё сторонники тоталитаризма в науке, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут ассоциативно распределены по отраслям!`,
            hide: false,
            top: true,
            edit: false
        })
    })

    let newsItems = ref([])

    const filteredNewsItems = computed(() => {
        let top = {}
        let items = []

        newsItems.value.forEach((el, index) => {
            if (el.top) {
                top = el
            }
            else {
                items.push(el)
            }
        })

        items.unshift(top)

        return items
    })

    const state = computed(() => store.state).value

    function addNews() {
        newsItems.value.push({
            id: 'null',
            title: 'Название отсутствует',
            description: 'Описание отсутствует',
            images: [],
            date: new Date(),
            body: '',
            hide: false,
            top: false,
            edit: false
        })
    }

    function addInTop(row) {
        newsItems.value.forEach(el =>
            el.top = false
        )

        row.top = true
        row.edit = false
    }

    function deleteNews(id) {
        newsItems.value.forEach((el, index) => {
            if (el.id === id) {
                newsItems.value.splice(index, 1)
            }
        })
    }
</script>

<template>
    <div class="news-container">
        <el-card class="rows"
            v-for="(row, index) in filteredNewsItems"
            :key="row.id || index"
        >
            <template #header v-if="index === 0">
                Главная новость
            </template>

            <div class="row__content">
                <el-carousel class="carousel el-carousel-custom"
                    :autoplay="false"
                    arrow="never"
                    trigger="click"
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

                <section class="content">
                    <div v-if="!row.edit">
                        <span class="date">
                            <el-icon><Calendar></Calendar></el-icon>
                            <span>
                                {{ row.date ? row.date.toLocaleDateString() : 'Дата отсутствует' }}
                            </span>
                        </span>

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

                    <el-button-group class="actions-buttons"
                        v-show="state.isEditNews"
                    >
                        <el-button
                            :icon="!row.edit ? 'Edit' : 'Check'"
                            @click="row.edit = !row.edit"
                            :type="!row.edit ? 'primary' : 'success'"
                        >
                            {{ !row.edit ? 'Редактировать' : 'Сохранить' }}
                        </el-button>

                        <el-button
                            icon="Delete"
                            v-show="row.edit && !row.top"
                            @click="deleteNews(row.id)"
                        >
                            Удалить
                        </el-button>

                        <el-button
                            icon="Top"
                            v-show="row.edit && !row.top"
                            @click="addInTop(row)"
                        >
                            Сделать главной
                        </el-button>
                    </el-button-group>
                </section>
            </div>
        </el-card>

        <el-button class="add__news-button"
            v-show="state.isEditNews"
            icon="Plus"
            type="primary"
            text
            bg
            @click="addNews"
        >
            Добавить новость
        </el-button>
    </div>
</template>

<style lang="scss">
@import '@/styles/News/NewsEditClasses';
</style>

<style lang="scss" scoped>
@import '@/styles/News/News.scss';
</style>