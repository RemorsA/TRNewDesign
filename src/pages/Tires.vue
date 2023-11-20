<script setup>
    import store from '@/store/store';
    import OrderProductTable from '@/components/OrderProductTable.vue'
    import { ref } from 'vue'

    let isOrderDialog = ref(false)
</script>

<template>
    <el-row class="links__row" align="middle">
        <el-link
            v-for="(link, index) in 5"
            :key="index"
        >
            Ссылка {{ index }}
        </el-link>
    </el-row>

    <el-table
        :data="store.state.tData.slice(40)"
        border
        stripe
        style="margin-top: 20px;"
        size="small"
    >
        <el-table-column
            type="expand"
            align="center"
            width="40"
        >
            <template #default="props">
                <div class="table-expand__content">
                    <el-image class="picture picture__cover-hover"
                        src="https://media.istockphoto.com/id/860093394/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D1%88%D0%B8%D0%BD%D1%8B-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.webp?s=2048x2048&w=is&k=20&c=qahqvWOpUQqVFbWkZwD-eB23zJaG9n9xUjHRR-s71vU="
                        fit="scale-down"
                        hide-on-click-modal
                        :preview-src-list="[ 'https://media.istockphoto.com/id/860093394/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BD%D0%BE%D0%B2%D1%8B%D0%B5-%D1%88%D0%B8%D0%BD%D1%8B-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D1%8B-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.webp?s=2048x2048&w=is&k=20&c=qahqvWOpUQqVFbWkZwD-eB23zJaG9n9xUjHRR-s71vU=' ]"
                        preview-teleported
                    ></el-image>

                    <Descriptions class="count_on_store"
                        :descriptions="[
                            'Набережные Челны', 'Москва', 'Санкт-Петербург',
                            'Екатеринбург', 'Новосибирск', 'Уфа',
                            'Пермь', 'Нижний новгород', 'Самара',
                            'Челябинск', 'Краснодар', 'Казань'
                        ]"
                        extra="Количество на складе"
                        extra-icon="OfficeBuilding"
                    >
                        <template #label="{ row }">
                            {{ row }}:
                        </template>

                        <template #value>
                            {{ props.row.age }}
                        </template>
                    </Descriptions>

                    <Descriptions class="detail__description"
                        :descriptions="[
                            'Производитель', 'Тип', 'Исполнение',
                            'Размер', 'Вес (кг)', 'Сегмент',
                            'Эксплуатация', 'Нагрузка (кг)', 'Гарантия (лет)',
                        ]"
                        extra="Описание"
                    >
                        <template #label="{ row }">
                            {{ row }}:
                        </template>

                        <template #value>
                            {{ props.row.greeting }}
                        </template>
                    </Descriptions>
                </div>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop=""
            width="40"
            align="center"
        >
            <template #header>
                <TableTooltip
                    content="Выбрать из списка для сравнения"
                ></TableTooltip>
            </template>

            <template #default="{ row, index }">
                <el-checkbox
                    :model-value="row.isActive"
                    :id="String(row._id)"
                ></el-checkbox>
            </template>
        </el-table-column>

        <el-table-column
            label="Типоразмер"
            prop="latitude"
            sortable
        ></el-table-column>

        <el-table-column
            label="Слойность / Исполнение"
            prop="company"
            sortable
        ></el-table-column>

        <el-table-column
            label="Модель"
            prop="favoriteFruit"
            sortable
        ></el-table-column>

        <el-table-column
            label="Производитель"
            prop="company"
            sortable
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            sortable
        ></el-table-column>

        <el-table-column
            label="РРЦ, руб."
            prop="balance"
            sortable
        >
            <template #header>
                <TableTooltip
                    content="Рекомендовано розничная цена"
                    text="РРЦ, руб."
                ></TableTooltip>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop=""
            width="120"
        >
            <template #default>
                <el-button
                    icon="Top"
                    link
                    type="primary"
                    @click="isOrderDialog = true"
                >
                    Заказать
                </el-button>
            </template>
        </el-table-column>
    </el-table>

    <BottomNavigationPanel
        :filters="[
            { key: 0, type: 'select', vModel: '', placeholder: 'Категория' },
            { key: 1, type: 'select', vModel: '', placeholder: 'Размер' },
            { key: 2, type: 'select', vModel: '', placeholder: 'Исполнение' },
            { key: 3, type: 'select', vModel: '', placeholder: 'Бренд' },
        ]"
    >
        <el-badge value="5">
            <el-button
                type="primary"
                icon="Histogram"
            >
                Сравнить
            </el-button>
        </el-badge>
    </BottomNavigationPanel>

    <OrderProductTable
        v-model="isOrderDialog"
    ></OrderProductTable>
</template>

<style lang="scss" scoped>
    .links__row {
        white-space: nowrap;
        gap: 20px;
    }

    .table-expand__content {
        display: flex;
        gap: 10px;
        align-items: start;
        flex-wrap: wrap-reverse;
        margin: 4px 8px;

        .picture {
            flex: 1 2 250px;
            background: white;
            border-radius: 4px;
        }

        .count_on_store, .detail__description {
            flex: 1 1 calc(100% - 10px - 250px);
        }
    }
</style>