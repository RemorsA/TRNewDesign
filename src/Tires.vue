<script setup>
    import store from './store';
    import Filter from './components/Filter.vue';
    import Pagination from './components/Pagination.vue';
</script>

<template>
    <Filter :filters="[
        {
            key: 0,
            type: 'select',
            vModel: '',
            placeholder: 'Категория'
        },
        {
            key: 1,
            type: 'select',
            vModel: '',
            placeholder: 'Размер'
        },
        {
            key: 2,
            type: 'select',
            vModel: '',
            placeholder: 'Исполнение'
        },
        {
            key: 3,
            type: 'select',
            vModel: '',
            placeholder: 'Бренд'
        },
    ]"></Filter>

    <el-table
        :data="store.state.tData.slice(40)"
        style="margin-top: 20px;"
    >
        <el-table-column
            type="expand"
            align="center"
            width="40"
        >
            <template #default="props">
                <div class="table__expand-content">
                    <div class="content__item"
                        v-for="(r, i) in [
                            'Набережные Челны', 'Москва', 'Санкт-Петербург',
                            'Екатеринбург', 'Новосибирск', 'Уфа',
                            'Пермь', 'Нижний новгород', 'Самара',
                            'Челябинск', 'Краснодар', 'Казань'
                        ]"
                        :key="i"
                    >
                        <h4 class="content__item-title">{{ r }}:</h4>

                        <span class="content__item-value">{{ props.row.age }}</span>
                    </div>
                </div>
            </template>
        </el-table-column>

        <el-table-column
            type="selection"
            align="center"
        ></el-table-column>

        <el-table-column
            label="Типоразмер"
            prop="latitude"
            min-width="110"
            width=""
        ></el-table-column>

        <el-table-column
            label="Слойность / Исполнение"
            prop="company"
            min-width="120"
            width=""
        ></el-table-column>

        <el-table-column
            label="Модель"
            prop="favoriteFruit"
            min-width="100"
            width=""
        ></el-table-column>

        <el-table-column
            label="Производитель"
            prop="company"
            min-width="140"
            width=""
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            min-width="120"
            width=""
        ></el-table-column>

        <el-table-column
            label="РРЦ, руб."
            prop="balance"
            min-width="120"
            width=""
        ></el-table-column>

        <el-table-column
            label=""
            prop=""
            min-width="120"
            width="120"
        >
            <template #default>
                <el-button
                    icon="ShoppingCart"
                    link
                    type="primary"
                >
                    Заказать
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <Pagination>
        <el-button
            type="primary"
            icon="Histogram"
        >
            Сравнить / <el-tag style="margin-left: 5px;" type="danger">2</el-tag>
        </el-button>
    </Pagination>
</template>

<style lang="scss" scoped>
    .table__expand-content {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 10px 50px;
        background: var(--el-fill-color);
        padding: 8px 12px;

        .content__item {
            display: flex;
            align-items: center;
            gap: 10px;
            white-space: nowrap;

            .content__item-title {
                width: 100%;
                display: flex;
                align-items: flex-end;
                gap: 5px;

                &::after {
                    content: '';
                    width: 100%;
                    display: block;
                    height: 1px;
                    border-bottom: 1px dashed currentColor;
                }
            }
        }
    }
</style>