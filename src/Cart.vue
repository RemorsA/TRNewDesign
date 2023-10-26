<script setup>
    import store from './store'
    import { computed } from 'vue'

    const state = computed(() => store.state).value
</script>

<template>
    <el-table class="el-table-custom__this_page"
        :data="state.tData.slice(45)"
        show-summary
        sum-text="Итого: 1000, руб."
        stripe
    >
        <el-table-column
            label="В заказ"
            prop="a"
            min-width="120"
        >
            <template #default>
                <el-checkbox></el-checkbox>
            </template>
        </el-table-column>

        <el-table-column
            label="Наименование"
            prop="name"
            min-width="150"
        ></el-table-column>

        <el-table-column
            label="Артикул"
            prop="guid"
            min-width="100"
        ></el-table-column>

        <el-table-column
            label="Страна"
            prop="address"
            min-width="100"
        ></el-table-column>

        <el-table-column
            label="Склад"
            prop="company"
            min-width="100"
        ></el-table-column>

        <el-table-column
            label="Цена, руб."
            prop="balance"
            min-width="100"
        ></el-table-column>

        <el-table-column
            label="Количество"
            prop=""
            min-width="180"
        >
            <template #default>
                <el-input-number
                    :model-value="1"
                ></el-input-number>
            </template>
        </el-table-column>

        <el-table-column
            label="Сумма, руб."
            prop="balance"
            min-width="180"
        ></el-table-column>

        <el-table-column
            label="Убрать"
            prop=""
            min-width="100"
        >
            <template #default>
                <el-button
                    icon="Delete"
                ></el-button>
            </template>
        </el-table-column>
    </el-table>

    <el-row align="middle" style="gap: 20px; margin-top: 20px;">
        <el-col :span="3" :xs="24" :sm="8" :md="6" :lg="5" :xl="3">
            Ваша ссылка для заказа:
        </el-col>

        <el-col :span="18" :xs="24" :sm="15" :md="13" :lg="14" :xl="17">
            <el-input placeholder="Ссылка"></el-input>
        </el-col>

        <el-col :span="3" :xs="24" :sm="24" :md="3" :lg="3" :xl="3">
            <el-button
                icon="Right"
            >
                Оформить заказ
            </el-button>
        </el-col>
    </el-row>

    <el-row justify="center" style="margin-top: 20px;">
        <el-pagination
            :pager-count="11"
            layout="sizes, prev, pager, next"
            :total="state.tData.slice(45)?.length"
            :page-sizes="[10, 20, 40, 60, 80, 100]"
        ></el-pagination>
    </el-row>
</template>

<style lang="scss">

</style>