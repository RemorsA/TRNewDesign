<script setup>
    import { ref, computed } from 'vue'
    import store from '@/store/store';

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

    let newsItems = ref(7)

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
    <div class="card-top">
        <el-carousel class="carousel el-carousel-custom"
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

        <span class="title">
            <h4>Никто не вправе осуждать треск разлетающихся скреп</h4>

            <p>В провинции никого не пугает печальный плач оппозиции</p>
        </span>

        <div class="date">
            <span>
                <el-icon><Calendar></Calendar></el-icon>
                10.10.1984
            </span>
        </div>

        <div class="navigation">
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
    <div class="cards-other">
        <el-card class="card"
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

            <div class="card__content">
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

    <el-button class="add__news-button"
        icon="Plus"
        type="primary"
        @click="newsItems++"
        v-show="state.isAuth && state.isEditNews"
    >
        Добавить новость
    </el-button>
<!-- РЕДАКТОР -->
    <el-dialog
        v-model="isEditDialog"
        align-center
        append-to-body
        title="Редактор"
        width="800px"
    >
        <el-row>
            <el-col>
                <div class="edit-pictures">
                    <div class="edit-pictures__item"
                        v-for="(pic, index) in form.pictures"
                        :key="index"
                    >
                        <el-image class="edit-pictures__pic"
                            :src="pic"
                            fit="cover"
                            :preview-src-list="form.pictures"
                            :initial-index="index"
                            hide-on-click-modal
                            preview-teleported
                        ></el-image>

                        <el-button class="delete-picture"
                            icon="Delete"
                            type="danger"
                            link
                            style="font-size: 20px;"
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
                    type="danger"
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
                    type="primary"
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
        size="80%"
        :title="form.title"
    >
        <el-row :gutter="20">
            <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                <el-carousel class="el-carousel-custom drawer__carousel"
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

            <el-col class="drawer__detail"
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
</template>

<style lang="scss">
@import '@/styles/News/NewsEditClasses';
</style>

<style lang="scss" scoped>
@import '@/styles/News/News.scss';
</style>