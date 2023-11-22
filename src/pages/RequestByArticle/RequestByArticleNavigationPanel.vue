<script setup>
    import { ref } from 'vue'

    let isAttach = ref(true)
</script>

<template>
    <div class="request-by-article__navigation_panel"
        :class="{
            'is-unpin': !isAttach
        }"
    >
        <header class="navigation __header">
            <el-button
                link
                :icon="!isAttach ? 'Paperclip' : 'Bottom'"
                @click="isAttach = !isAttach"
            >
                {{ isAttach ? 'Открепить' : 'Прикрепить' }}
            </el-button>
        </header>

        <section class="navigation __actions">
            <el-input-number class="number-input"
                style="width: 100%"
                :model-value="1"
            ></el-input-number>

            <el-input class="article-input"
                placeholder="Артикул запчасти"
            ></el-input>

            <el-button class="action-button"
                type="primary"
                icon="Search"
            >
                Поиск
            </el-button>

                <el-button class="action-button"
                type="primary"
                icon="Plus"
            >
                Добавить
            </el-button>

            <el-button class="action-button"
                type="primary"
                icon="Document"
            >
                Загрузить из excel
            </el-button>
        </section>
    </div>
</template>

<style lang="scss" scoped>
    .request-by-article__navigation_panel {
        position: sticky;
        bottom: 5px;
        left: 0;
        width: 100%;
        background: var(--el-color-info-light-7);
        padding: 8px 12px;
        border-radius: 4px;
        z-index: 99;
        transition: all .5s;
        overflow: hidden;

        &.is-unpin {
            bottom: -400px;
        }

        .navigation {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;

            &.__header {
                justify-content: end;
            }

            &.__actions {
                margin-top: 10px;
                .number-input {
                    flex: 1 1 200px;
                }

                .article-input {
                    flex: 1 1 1000px;
                }

                .action-button {
                    flex: 0 1 auto;
                    margin: 0;

                    @media screen and (width <= 425px) {
                        flex: 1 1 auto
                    }
                }
            }
        }
    }
</style>