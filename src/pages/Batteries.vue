<script setup>
    import DeliveryForm from '@/components/DeliveryForm.vue'
    import store from '@/store/store';
    import { ref } from 'vue'

    let isDeliveryForm = ref(false)
    let popperContent = ref(`
        <span class='popper__content'>
            <h4>Сумма товаров:</h4>
            519 450
        </span>

        <span class='popper__content'>
            <h4>Общий вес (кг):</h4>
            900
        </span>

        <span class='popper__content'>
            <h4>Стоимость доставки:</h4>
            7 981
        </span>

        <span class='popper__content'>
            <h4>Итого:</h4>
            527 431
        </span>
    `)
</script>

<template>
    <el-alert
        title="Информация"
        type="info"
        show-icon
        style="line-height: 20px;"
        :closable="false"
    >
        АКБ Union - собран из элементов Union, страна производства Индия. Сборка аккумуляторов: Россия
        <br>
        АКБ EnPOWER - собран из элементов Hawker Perfect Plus, производства EnerSys EMEA EH Europe Gmb. Сборка аккумуляторов: Россия
        <br>
        Аккумуляторы залитые и заряженные, на гибких перемычках.
        <br>
        Гарантия: 18 месяцев.
    </el-alert>

    <el-table
        :data="store.state.tData.slice(40)"
        border
        stripe
        style="margin-top: 20px;"
        size="small"
    >
        <el-table-column
            label=""
            prop=""
            width="40"
            align="center"
        >
            <template #default="{ row }">
                <el-checkbox
                    :id="String(row._id)"
                ></el-checkbox>
            </template>
        </el-table-column>

        <el-table-column
            label="Бренд техники"
            prop="name"
        ></el-table-column>

        <el-table-column
            label="Модель техники"
            prop="favoriteFruit"
        ></el-table-column>

        <el-table-column
            label="Бренд АКБ"
            prop="company"
        ></el-table-column>

        <el-table-column
            label="Наименование АКБ"
            prop="friends[0].name"
        ></el-table-column>

        <el-table-column
            label="Размер АКБ"
            prop="longitude"
            sortable
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            sortable
        >
            <template #header>
                <TableTooltip
                    content="Ваша цена"
                    text="Цена, руб."
                ></TableTooltip>
            </template>
        </el-table-column>

        <el-table-column
            label="Срок доставки"
            prop="registered"
        ></el-table-column>
    </el-table>

    <DeliveryForm
        v-model="isDeliveryForm"
    ></DeliveryForm>

    <BottomNavigationPanel
        :filters="[
            { key: 0, type: 'select', vModel: '', placeholder: 'Бренд' },
            { key: 1, type: 'select', vModel: '', placeholder: 'Модель' },
        ]"
    >
        <el-tooltip
            raw-content
            :content="popperContent"
            popper-style="font-size: 14px;"
        >
            <el-badge value="10">
                <el-button
                    type="primary"
                    @click="isDeliveryForm = true"
                >
                    Открыть форму
                </el-button>
            </el-badge>
        </el-tooltip>
    </BottomNavigationPanel>
</template>

<style lang="scss" scoped></style>