<script setup>
    import store from '@/store/store'
    import router from '@/router';
    import { computed } from 'vue'

    const currentRouteParam = computed(() =>
        router.currentRoute.value.params.isMessages
    )

    const tableData = computed(() =>
        store.state.tData.slice(40).filter(el => {
            if (currentRouteParam.value === 'only_messages' && !el.isActive) {
                return el
            }

            if (currentRouteParam.value === 'all') {
                return el
            }
        })
    )

    const isOnlyMessage = computed(() => {
        if (currentRouteParam.value === 'only_messages') {
            return {
                hidden: true,
                text: 'Вся история',
                href: '/TRNewDesign/history_request/all',
                value: '0'
            }
        }
        else {
            return {
                hidden: false,
                text: 'Сообщения',
                href: '/TRNewDesign/history_request/only_messages',
                value: tableData.value.filter(el => el.isActive)?.length
            }
        }
    })
</script>

<template>
    <el-table
        :data="tableData"
        border
        stripe
        size="small"
    >
        <el-table-column
            type="expand"
            width="40"
            align="center"
        >
            <template #default="record">
                <div class="table-expand__content">
                    <MeasurementPictures :pictures="store.state.measutementsPictures"></MeasurementPictures>

                    <Descriptions
                        :descriptions="[
                            { label: 'Мощность (кВт)', value: '34' },
                            { label: 'Крутящий момент (об/мин)', value: '2500' },
                            { label: 'Тип топлива', value: 'Дизель' },
                            { label: 'Вес (Кг)', value: '252' },
                            { label: 'ширина 1', value: '252' },
                            { label: 'ширина 2', value: '252' },
                            { label: 'ширина 3', value: '252' },
                            { label: 'ширина 4', value: '252' },
                            { label: 'ширина 5', value: '252' },
                            { label: 'ширина 6', value: '252' },
                            { label: 'ширина 7', value: '252' },
                        ]"
                        :extra="`Ваш кат. номер 21389213819 / ${record.row.name}`"
                    >
                        <template #label="{ row }">
                            {{ row.label }}:
                        </template>

                        <template #value="{ row }">
                            {{ row.value }}
                        </template>
                    </Descriptions>

                    <el-table
                        :data="store.state.tData.slice(49)"
                        border
                        stripe
                        size="small"
                    >
                        <el-table-column
                            label="Комментарий"
                            prop="about"
                        >
                            <template #default="{ row }">
                                <TooltipText
                                    :content="row.about"
                                    :text="row.about"
                                ></TooltipText>
                            </template>
                        </el-table-column>

                        <el-table-column
                            label="Кол-во (запрошено)"
                            prop="age"
                        ></el-table-column>

                        <el-table-column
                            label="Ед. изм."
                            prop="eyeColor"
                        ></el-table-column>

                        <el-table-column
                            label="Склад"
                            prop="company"
                        ></el-table-column>

                        <el-table-column
                            label="Страна"
                            prop="name"
                        ></el-table-column>

                        <el-table-column
                            label="Вес (кг.)"
                            prop="age"
                        ></el-table-column>

                        <el-table-column
                            label="Кол-во (шт.)"
                            prop="age"
                        ></el-table-column>

                        <el-table-column
                            label="Цена, руб."
                            prop="balance"
                        ></el-table-column>

                        <el-table-column
                            label="Сумма, руб."
                            prop="balance"
                        ></el-table-column>

                        <el-table-column
                            label="РРЦ"
                            prop="balance"
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
                        >
                            <template #header>
                                <TableTooltip
                                    content="Заказать товар нельзя так как с момента проценки прошло 3 дня"
                                ></TableTooltip>
                            </template>

                            <template #default="{ row }">
                                <el-button
                                    icon="Lock"
                                    type="danger"
                                    link
                                    style="font-size: 20px;"
                                ></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
            </template>
        </el-table-column>

        <el-table-column
            label="Номер запроса"
            prop="latitude"
        ></el-table-column>

        <el-table-column
            label="Дата запроса"
            prop="registered"
        ></el-table-column>

        <el-table-column
            label="Ваша ссылка для запроса"
            prop="guid"
        ></el-table-column>

        <el-table-column
            label="Статус обработки"
            prop="isActive"
            sortable
        >
            <template #default="{ row }">
                <span :style="{
                    color: row.isActive ? 'var(--el-color-success)' : 'var(--el-color-info)'
                }">
                    {{ row.isActive ? 'В заказе' : 'Не активно' }}
                </span>
            </template>
        </el-table-column>

        <el-table-column
            label=""
            prop=""
            width="70"
            align="center"
        >
            <template #default="{ row }">
                <el-row justify="space-between" v-if="!row.isActive">
                    <el-button
                        icon="Message"
                        link
                        style="font-size: 20px;"
                        type="primary"
                    ></el-button>

                    <el-tag
                        type="danger"
                        effect="plain"
                        round
                    >
                        1
                    </el-tag>
                </el-row>
            </template>
        </el-table-column>
    </el-table>

    <BottomNavigationPanel
        :filters="[
            { key: 0, type: 'input', vModel: '', placeholder: 'Ссылка для запроса' },
            { key: 1, type: 'input', vModel: '', placeholder: 'Номер запроса' },
            { key: 2, type: 'select', vModel: '', placeholder: 'Тип запроса' },
            { key: 3, type: 'input', vModel: '', placeholder: 'Артикул' },
            { key: 4, type: 'select', vModel: '', placeholder: 'Статус запроса' },
            { key: 5, type: 'date', vModel: '', placeholder: 'Дата от' },
            { key: 6, type: 'date', vModel: '', placeholder: 'Дата до' },
        ]"
    >
        <el-badge
            :hidden="isOnlyMessage.hidden"
            :value="isOnlyMessage.value"
        >
            <el-link
                type="primary"
                :href="isOnlyMessage.href"
            >
                {{ isOnlyMessage.text }}
            </el-link>
        </el-badge>
    </BottomNavigationPanel>
</template>

<style lang="scss" scoped>
    .table-expand__content {
        margin: 4px 8px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>