<script setup>
    import { ref, computed } from 'vue'
    import store from './store';

    let isEditDialog = ref(false)
    let form = ref({
        id: Math.floor(Math.random() * 100) + 1,
        pictures: [
            'https://media.istockphoto.com/id/1138429558/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%8F%D0%B4%D1%8B-%D0%BF%D0%BE%D0%BB%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=dBgDd4H3_TQy3r4P53oivjUYolmsRqa_24z5pME-b5w=',
            'https://media.istockphoto.com/id/1304746031/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9.jpg?s=1024x1024&w=is&k=20&c=gIPY6YdXH3hm7d3qQQ4V9LRcErEsM6WX79Jm2IbmsKg=',
            'https://media.istockphoto.com/id/897280394/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D1%81-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=_k01bCFuJA_4esH0z-d-Hd02JGczzkIdHGyZqb6ERYg=',
            'https://media.istockphoto.com/id/824351914/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4-%D1%81-%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%B2%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8.jpg?s=1024x1024&w=is&k=20&c=wJ9LyM2G7Hw05hhvhqLEntt8JKT2m0YLdNw0S2QjA48=',
            'https://media.istockphoto.com/id/513380472/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BD%D0%BE%D0%B3%D0%B8%D0%B5-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B8-%D0%B2-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4.jpg?s=1024x1024&w=is&k=20&c=oRegsLBFb0r4qfiQDlviDvpTqaOcl25iwHKX2e4TJrM=',
            'https://media.istockphoto.com/id/1138429558/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%8F%D0%B4%D1%8B-%D0%BF%D0%BE%D0%BB%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=dBgDd4H3_TQy3r4P53oivjUYolmsRqa_24z5pME-b5w=',
            'https://media.istockphoto.com/id/1304746031/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9.jpg?s=1024x1024&w=is&k=20&c=gIPY6YdXH3hm7d3qQQ4V9LRcErEsM6WX79Jm2IbmsKg=',
            'https://media.istockphoto.com/id/897280394/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D1%81-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=_k01bCFuJA_4esH0z-d-Hd02JGczzkIdHGyZqb6ERYg=',
            'https://media.istockphoto.com/id/824351914/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4-%D1%81-%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%B2%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8.jpg?s=1024x1024&w=is&k=20&c=wJ9LyM2G7Hw05hhvhqLEntt8JKT2m0YLdNw0S2QjA48=',
            'https://media.istockphoto.com/id/513380472/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BD%D0%BE%D0%B3%D0%B8%D0%B5-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B8-%D0%B2-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4.jpg?s=1024x1024&w=is&k=20&c=oRegsLBFb0r4qfiQDlviDvpTqaOcl25iwHKX2e4TJrM=',
        ],
        title: 'Только граница обучения кадров стала доступной ширнармассам',
        description: 'Как бы то ни было, крепость духовных «скреп» расставила все точки над i',
        date: '10.11.1970',
        detail: `<table class="detail-table">
<thead>
<td>шапка</td>
<td>шапка</td>
<td>шапка</td>
<td>шапка</td>
</thead>

<tbody>
<td>тело</td>
<td>тело</td>
<td>тело</td>
<td>тело</td>
</tbody>

<tbody>
<td>тело</td>
<td>тело</td>
<td>тело</td>
<td>тело</td>
</tbody>
</table>
<br>
<a class="detail-link" download href="/logo.png">Противоположная</a> точка зрения подразумевает, что базовые сценарии поведения 
пользователей могут быть объективно рассмотрены соответствующими инстанциями. 
Кстати, многие известные личности представляют собой не что иное, как квинтэссенцию 
победы маркетинга над разумом и должны быть функционально разнесены на независимые 
элементы. А ещё сторонники тоталитаризма в науке, которые представляют собой 
яркий пример континентально-европейского типа политической культуры, 
будут ассоциативно распределены по отраслям!`,
        main: false,
    })
    let isDetailDialog = ref(false)

    let newsItems = ref(6)

    const pictures1 = ref([
        'https://media.istockphoto.com/id/1138429558/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D1%8F%D0%B4%D1%8B-%D0%BF%D0%BE%D0%BB%D0%BE%D0%BA.jpg?s=1024x1024&w=is&k=20&c=dBgDd4H3_TQy3r4P53oivjUYolmsRqa_24z5pME-b5w=',
        'https://media.istockphoto.com/id/1304746031/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%83%D0%BB%D1%83%D1%87%D1%88%D0%B5%D0%BD%D0%B8%D0%B5-%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D1%8F-%D1%81-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C%D1%8E-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D0%B9.jpg?s=1024x1024&w=is&k=20&c=gIPY6YdXH3hm7d3qQQ4V9LRcErEsM6WX79Jm2IbmsKg=',
        'https://media.istockphoto.com/id/897280394/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BD%D0%B8%D0%BA-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B0-%D1%81-%D0%BF%D0%BE%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=_k01bCFuJA_4esH0z-d-Hd02JGczzkIdHGyZqb6ERYg=',
        'https://media.istockphoto.com/id/824351914/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%80%D0%B0%D1%81%D0%BF%D1%80%D0%B5%D0%B4%D0%B5%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4-%D1%81-%D0%B3%D1%80%D1%83%D0%B7%D0%BE%D0%B2%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D0%BE%D0%B9-%D0%B2%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8.jpg?s=1024x1024&w=is&k=20&c=wJ9LyM2G7Hw05hhvhqLEntt8JKT2m0YLdNw0S2QjA48=',
        'https://media.istockphoto.com/id/513380472/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%BD%D0%BE%D0%B3%D0%B8%D0%B5-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B8-%D0%B2-%D1%81%D0%BA%D0%BB%D0%B0%D0%B4.jpg?s=1024x1024&w=is&k=20&c=oRegsLBFb0r4qfiQDlviDvpTqaOcl25iwHKX2e4TJrM=',
    ])
    const pictures2 = ref([
        'https://media.istockphoto.com/id/1332478606/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F-%D1%88%D0%B8%D0%BD%D0%B0-%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%89%D0%B0%D0%B5%D1%82%D1%81%D1%8F-%D0%BD%D0%B0-%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%B0%D0%B6%D0%B5-%D0%B4%D0%BB%D1%8F-%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D1%88%D0%B8%D0%BD-%D0%B2-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%BE%D0%B9-%D0%B1%D1%83%D0%B4%D1%8C%D1%82%D0%B5-%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D1%8B-%D0%BA.jpg?s=1024x1024&w=is&k=20&c=kx9_JEgjkoSgtSuDQksSNJTPkWEAIcXoRyCr-Cfn_OU=',
        'https://media.istockphoto.com/id/1334499812/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%88%D0%B8%D0%BD%D1%8B-%D0%B8-%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81-%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA-%D0%B4%D0%B5%D1%80%D0%B6%D0%B0%D1%89%D0%B8%D0%B9-%D0%BD%D0%BE%D0%B2%D1%83%D1%8E-%D1%88%D0%B8%D0%BD%D1%83-%D0%BD%D0%B0-%D1%84%D0%BE%D0%BD%D0%B5-%D0%B3%D0%B0%D1%80%D0%B0%D0%B6%D0%B0-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE-%D0%B4%D0%BB%D1%8F-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.jpg?s=1024x1024&w=is&k=20&c=c5rfRjiqMRhAt3EtechuSADd2CU0hejq10XJtF3Wi94=',
        'https://media.istockphoto.com/id/1317641180/ru/%D1%84%D0%BE%D1%82%D0%BE/4-wd-suv-allroad-%D1%88%D0%B8%D0%BD%D1%8B-%D0%B2%D1%81%D0%B5-%D0%BC%D0%B5%D1%81%D1%82%D0%BD%D0%BE%D1%81%D1%82%D0%B8-%D1%88%D0%B8%D0%BD%D1%8B-%D1%81%D1%82%D0%B5%D0%BA-%D1%81%D1%82%D1%80%D0%BE%D0%BA%D0%B8-%D0%B3%D1%80%D1%8F%D0%B7%D0%B8-%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%B5%D1%80%D1%8B-%D0%BA%D0%BE%D0%BB%D0%B5%D1%81%D0%BE.jpg?s=1024x1024&w=is&k=20&c=2cCCOXsQCcj7imXlnHUAZQcDtRxHydtd3p0PEJgKld0=',
        'https://media.istockphoto.com/id/1341247101/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%88%D0%B8%D0%BD%D1%8B-%D0%B2-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D1%85-%D1%81-%D0%BA%D0%BE%D0%BF%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%BC-%D0%BF%D1%80%D0%BE%D1%81%D1%82%D1%80%D0%B0%D0%BD%D1%81%D1%82%D0%B2%D0%BE%D0%BC.jpg?s=1024x1024&w=is&k=20&c=Je15alZWgwadol4hcAaFunPXlnjKyg0ZhOVZ9pHwpu4=',
    ])

    const state = computed(() => store.state).value
</script>

<template>
<!-- ГЛАВНАЯ -->
    <div class="top-news-card">
        <el-carousel class="top-news-card__header-carousel el-carousel-custom"
            indicator-position="none"
            arrow="never"
        >
            <el-carousel-item
                v-for="(pic, idx) in pictures1"
                :key="idx"
            >
                <img :src="pic" :alt="idx">
            </el-carousel-item>
        </el-carousel>

        <span class="top-news-card__text">
            <h4>Никто не вправе осуждать треск разлетающихся скреп</h4>

            <p>В провинции никого не пугает печальный плач оппозиции</p>
        </span>

        <div class="top-news-card__date">
            <span>
                <el-icon><Calendar></Calendar></el-icon>
                10.10.1984
            </span>
        </div>

        <div class="top-news-card__navigation">
            <el-button
                icon="Right"
                v-show="state.isAuth"
                link
                color="currentColor"
                @click="isDetailDialog = true"
            >
                Подробнее
            </el-button>

            <el-button
                v-show="state.isEditNews && state.isAuth"
                icon="Edit"
                title="Редактировать новость"
                link
                color="currentColor"
                @click="isEditDialog = true"
            >
                Редактор
            </el-button>
        </div>
    </div>
<!-- ОСТАЛЬНЫЕ -->
    <div class="other-news-cards"
        :class="[ newsItems > 5 ? 'more' : 'less' ]"
    >
        <el-card class="news-card"
            v-for="(card, index) in newsItems"
            :key="card"
            :style="{
                width: newsItems > 5 ? '100%' : '300px'
            }"
        >
            <template #header>
                <el-carousel class="el-carousel-custom"
                    height="400"
                    trigger="click"
                    :autoplay="false"
                    arrow="never"
                >
                    <el-carousel-item
                        v-for="(pic, idx) in pictures2"
                        :key="idx"
                    >
                        <el-image
                            style="width: 100%; height: 100%"
                            :src="pic"
                            fit="cover"
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>
            </template>

            <div class="news-card__content">
                <h4>Завоз новых шин на склад</h4>

                <p>Новый и БУ</p>

                <span>
                    <el-icon><Calendar></Calendar></el-icon>
                    14.12.1994
                </span>

                <el-button-group>
                    <el-button
                        icon="Right"
                        v-show="state.isAuth"
                        @click="isDetailDialog = true"
                    >
                        Подробнее
                    </el-button>

                    <el-button
                        v-show="state.isEditNews && state.isAuth"
                        icon="Edit"
                        title="Редактировать новость"
                        @click="isEditDialog = true"
                    >
                        Редактор
                    </el-button>
                </el-button-group>
            </div>
        </el-card>
    </div>
<!-- РЕДАКТОР -->
    <el-dialog
        v-model="isEditDialog"
        align-center
        append-to-body
        title="Редактор"
        draggable
        width="800px"
    >
        <el-row>
            <el-col>
                <div class="edit-form__pictures">
                    <div class="pictures"
                        v-for="(pic, index) in form.pictures"
                        :key="index"
                    >
                        <el-image class="pictures__item"
                            :src="pic"
                            fit="cover"
                            :preview-src-list="form.pictures"
                            :initial-index="index"
                            hide-on-click-modal
                            preview-teleported
                        ></el-image>

                        <el-button class="pictures__delete-button"
                            plain
                            icon="Delete"
                            type="danger"
                            circle
                        ></el-button>
                    </div>
                </div>

                <el-form label-position="top">
                    <el-form-item label="Тема:">
                        <el-input
                            v-model="form.title"
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="Кратко:">
                        <el-input
                            v-model="form.description"
                            clearable
                        ></el-input>
                    </el-form-item>

                    <el-form-item label="Дата:">
                        <el-date-picker
                            v-model="form.date"
                            placeholder="Дата"
                            format="DD.MM.YYYY"
                        ></el-date-picker>
                    </el-form-item>

                    <el-form-item label="Редактор контента:">
                        <el-input
                            type="textarea"
                            v-model="form.detail"
                            autosize
                            resize="none"
                            style="word-break: break-all;"
                        ></el-input>
                    </el-form-item>
                </el-form>

                <div v-html="form.detail"></div>
            </el-col>
        </el-row>

        <template #footer>
            <el-button-group>
                <el-button
                    icon="Delete"
                    v-show="!form.main"
                    @click="newsItems--, isEditDialog = false"
                >
                    Удалить
                </el-button>

                <el-button
                    icon="Top"
                    v-show="!form.main"
                >
                    Сделать главной
                </el-button>

                <el-button
                    icon="Close"
                    @click="isEditDialog = false"
                >
                    Закрыть редактор
                </el-button>

                <el-button
                    icon="Right"
                    @click="isEditDialog = false"
                >
                    Сохранить
                </el-button>
            </el-button-group>
        </template>
    </el-dialog>
<!-- ДЕТАЛЬНО -->
    <el-drawer
        direction="btt"
        v-model="isDetailDialog"
        size="95%"
        :title="form.title"
    >
        <el-row :gutter="20">
            <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-carousel class="el-carousel-custom drawer-form__pictures"
                    indicator-position="none"
                    arrow="never"
                    height="40vh"
                >
                    <el-carousel-item
                        v-for="(pic, idx) in form.pictures"
                        :key="idx"
                    >
                        <el-image
                            style="width: 100%; height: 100%"
                            :src="pic"
                            fit="cover"
                            preview-teleported
                            :preview-src-list="form.pictures"
                            hide-on-click-modal
                        ></el-image>
                    </el-carousel-item>
                </el-carousel>
            </el-col>

            <el-col class="drawer-form__detail"
                :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12"
            >
                <p>{{ form.description }}</p>

                <el-divider content-position="left">
                    <el-icon><Calendar></Calendar></el-icon>
                    {{ form.date }}
                </el-divider>

                <div v-html="form.detail"></div>
            </el-col>
        </el-row>
    </el-drawer>
<!-- ДОБАВИТЬ -->
    <el-button class="add-button"
        icon="Plus"
        @click="newsItems++"
        type="primary"
        round
        v-show="state.isAuth && state.isEditNews"
    >
        Добавить новость
    </el-button>
</template>

<style lang="scss">
    .detail-link {
        color: var(--el-color-primary);
        text-decoration: none;
        border-bottom: 1px solid var(--el-color-primary);
        transition: all .5s;

        &:hover {
            opacity: 0.5;
        }
    }

    .detail-table {
        border-collapse: collapse;
        width: 100%;
        border-color: var(--el-table-border-color);

        thead {
            border-bottom: 1px solid var(--el-border-color);
            background: var(--el-table-header-bg-color);
            user-select: none;
            font-weight: 600;
            color: var(--el-text-color-secondary);
        }

        tbody {
            color: var(--el-text-color-regular);
            transition: all .5s;
            border-bottom: 1px solid var(--el-border-color);

            &:hover {
                background: var(--el-fill-color-light);
            }
        }

        td {
            padding: 8px 12px;
            
        }
    }
</style>

<style lang="scss" scoped>
    .top-news-card {
        border-radius: 4px;
        overflow: hidden;
        position: relative;
        width: 100%;
        background: black;

        &:hover {
            .top-news-card__text {
                transform: translateX(0);
            }

            .top-news-card__navigation {
                transform: translateX(0);
            }

            .top-news-card__date::before {
                width: 0%;
            }
        }

        .top-news-card__header-carousel img {
            width: 100%;
            height: 100%;
            filter: blur(2px) brightness(0.5);
            object-fit: cover;
        }

        .top-news-card__text {
            position: absolute;
            top: 0;
            left: 0;
            padding: 20px;
            color: white;
            line-height: 30px;
            transition: all .5s;
            transform: translateX(-500px);
            max-width: 500px;
            word-break: keep-all;

            @media screen and (max-width: 425px) {
                max-width: 300px;
            }

            h4 {
                font-size: 25px;
            }
        }

        .top-news-card__date {
            position: absolute;
            bottom: 0;
            left: 0;
            color: white;
            padding: 20px;
            width: 100%;
            font-size: 14px;
            display: flex;
            align-items: center;

            span {
                display: flex;
                align-items: center;
                gap: 5px;
                justify-content: center;
                border: 1px solid white;
                padding: 2px 5px;
                border-radius: 10px;
            }

            &::after {
                content: '';
                height: 1px;
                width: 100%;
                background: white;
            }

            &::before {
                content: '';
                height: 1px;
                width: 100%;
                background: white;
                transition: all .5s;
            }
        }

        .top-news-card__navigation {
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 0 20px 60px 0;
            color: white;
            gap: 10px;
            transition: all 1.5s;
            transform: translateX(500px);
        }
    }

    .other-news-cards {
        margin-top: 20px;
        gap: 20px;

        &.more {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        }

        &.less {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .news-card {
            --el-card-padding: 0px;

            .news-card__content {
                display: flex;
                flex-direction: column;
                gap: 20px;
                padding: 20px;
            }
        }
    }

    .add-button {
        position: absolute;
        bottom: 20px;
        right: 40px;
        z-index: 1000;
    }

    .edit-form__pictures {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
        padding-bottom: 20px;

        .pictures {
            position: relative;

            .pictures__item {
                width: 100%;
                height: 100%;
                min-width: 100px;
                min-height: 100px;
            }

            .pictures__delete-button {
                position: absolute;
                bottom: 0px;
                right: 0px;
            }
        }
    }

    .drawer-form__pictures {
        transition: all .5s;
        padding: 2px 0;

        &:hover {
            background: var(--el-color-primary);
        }
    }
    .drawer-form__detail {
        h4, p {
            line-height: 25px;
        }

        @media screen and (width < 992px) {
            margin-top: 20px;
        }
    }
</style>