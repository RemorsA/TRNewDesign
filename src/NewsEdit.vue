<script setup>
    import { ref, computed } from 'vue'

    let isNews = ref(false)
    let otherPictures = ref([])
    let form = ref({
        title: '',
        description: '',
        date: ''
    })

    const changeButton = computed(() => {
        let type = ''
        let text = ''
        let icon = ''

        if (form.value.title && form.value.description && form.value.date) {
            type = 'success'
            text = 'Создать'
            icon = 'Select'
        }
        else {
            text = 'Подробнее'
        }

        return { type, text, icon }
    })

    function addOtherPicture(file) {
        file.url = URL.createObjectURL(file.raw)
        otherPictures.value.push(file)
    }
</script>

<template>
    <div class="edit_news-container">
        <el-radio-group v-model="isNews">
            <el-radio-button :label="false">Новость</el-radio-button>
            <el-radio-button :label="true">Главная новость</el-radio-button>
        </el-radio-group>

        <el-card v-if="isNews" style="margin-top: 20px;">
            Главная новость
        </el-card>

        <div
            v-else
            style="
                max-width: 500px;
                margin: 20px auto 0 auto;
            "
        >
            <el-card
                :style="{
                    '--el-card-padding': '0px'
                }"
            >
                <template #header>
                    <el-upload
                        :file-list="otherPictures"
                        action="#"
                        :auto-upload="false"
                        :on-change="addOtherPicture"
                        drag
                    >
                        <el-carousel class="el-carousel-custom"
                            :autoplay="false"
                        >
                            <el-carousel-item
                                v-for="(record, index) in otherPictures"
                                :key="index"
                            >
                                <el-image
                                    style="
                                        width: 100%;
                                        height: 100%;
                                    "
                                    :src="record.url"
                                    fit="scale-down"
                                ></el-image>
                            </el-carousel-item>
                        </el-carousel>
                    </el-upload>
                </template>

                <div style="
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: 20px;
                ">
                    <input
                        type="text"
                        style="
                            background: none;
                            outline: none;
                            border: none;
                            font-size: 14px;
                            padding: 5px 0;
                        "
                        v-model="form.title"
                        placeholder="Заголовок"
                    >

                    <input
                        type="text"
                        style="
                            background: none;
                            outline: none;
                            border: none;
                            font-size: 14px;
                            padding: 5px 0;
                        "
                        v-model="form.description"
                        placeholder="Краткое описание"
                    >

                    <el-date-picker class="date-picker-this_page_custom"
                        v-model="form.date"
                        placeholder="Дата"
                        clearable
                        format="DD.MM.YYYY"
                    ></el-date-picker>

                    <el-button
                        :type="changeButton.type"
                        :icon="changeButton.icon"
                    >
                        {{ changeButton.text }}
                    </el-button>
                </div>

                <!-- <div style="padding: 0 20px 20px 20px;">
                    <span>Подробная новость</span>
                </div> -->
            </el-card>
        </div>
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
    .edit_news-container {

    }
</style>