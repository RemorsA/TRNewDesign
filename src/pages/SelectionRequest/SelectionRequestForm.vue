<script setup>
    import { ref } from 'vue'

    let isAttach = ref(true)
</script>

<template>
    <div class="selection__request-form"
        :class="{
            'is-unpin': !isAttach
        }"
    >
        <el-button class="unpin-button"
            link
            :icon="!isAttach ? 'Paperclip' : 'Bottom'"
            @click="isAttach = !isAttach"
        >
            {{ isAttach ? 'Открепить' : 'Прикрепить' }}
        </el-button>

        <el-form class="form"
            label-position="top"
            label-width=""
        >
            <div class="form-content">
                <el-form-item
                    label="Бренд техники:"
                >
                    <el-select
                        style="width: 100%"

                    ></el-select>
                </el-form-item>

                <el-form-item
                    label="Модель техники:"
                >
                    <el-input
                        
                    ></el-input>
                </el-form-item>

                <el-form-item
                    label="Серийный номер техники:"
                >
                    <el-input

                    ></el-input>
                </el-form-item>

                <el-form-item
                    label="Наименование запчасти:"
                >
                    <el-input
                        
                    ></el-input>
                </el-form-item>

                <el-form-item
                    label="Количество и единица измерения:"
                >
                    <el-row align="middle" style="gap: 10px;">
                        <el-input-number
                            style="width: 50%;"
                            :model-value="1"
                        ></el-input-number>

                        <el-select
                            placeholder=" "
                            style="width: calc(50% - 10px)"
                        ></el-select>
                    </el-row>
                </el-form-item>

                <el-form-item
                    label="Дата выпуска техники:"
                >
                    <el-date-picker
                        style="width: 100%"
                    ></el-date-picker>
                </el-form-item>

                <el-form-item
                    label="Комментарий к позиции:"
                >
                    <el-input
                        type="textarea"
                        autosize
                    ></el-input>
                </el-form-item>

                <el-form-item
                    label="Прикрепить фото:"
                >
                    <el-input></el-input>
                </el-form-item>
            </div>
        </el-form>

        <el-row align="middle" style="gap: 20px;">
            <el-button
                icon="Plus"
                type="primary"
            >
                Добавить
            </el-button>

            <el-input
                style="width: clamp(300px, 100%, 500px)"
                placeholder="Ваша ссылка для запроса"
                :disabled="false"
            >
                <template #append>
                    <el-button
                        title="Отправить"
                        type="primary"
                        icon="Right"
                    >
                        Отправить
                    </el-button>
                </template>
            </el-input>
        </el-row>
    </div>
</template>

<style lang="scss" scoped>
    .selection__request-form {
        background: var(--el-color-info-light-7);
        width: 100%;
        padding: 8px 12px;
        border-radius: 4px;
        position: sticky;
        box-shadow: var(--el-box-shadow-light);
        bottom: 5px;
        left: 0;
        z-index: 99;
        transition: all .5s;

        @media screen and (width <= 1024px) {
            position: unset;
            z-index: 1;
        }

        &.is-unpin {
            bottom: -400px;
        }

        .unpin-button {
            position: absolute;
            top: 5px;
            right: 5px;

            @media screen and (width <= 1024px) {
                display: none;
            }
        }

        .form {
            margin-top: 20px;

            @media screen and (width <= 1024px) {
                margin-top: 0;
            }

            .form-content {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                gap: 0 20px;
            }
        }
    }
</style>