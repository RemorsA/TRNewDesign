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
        table-layout="fixed"
    >
        <el-table-column label="В заказ" prop="">
            <template #default="{ row, index }">
                <el-checkbox
                    :model-value="row.isActive"
                ></el-checkbox>
            </template>
        </el-table-column>

        <el-table-column label="Наименование" prop="name"></el-table-column>

        <el-table-column label="Артикул" prop="guid"></el-table-column>

        <el-table-column label="Страна" prop="address"></el-table-column>

        <el-table-column label="Склад" prop="company"></el-table-column>

        <el-table-column label="Цена, руб." prop="balance"></el-table-column>

        <el-table-column label="Количество" prop="">
            <template #default>
                <el-input-number
                    :model-value="1"
                ></el-input-number>
            </template>
        </el-table-column>

        <el-table-column label="Сумма, руб." prop="balance"></el-table-column>

        <el-table-column label="Убрать" prop="">
            <template #default>
                <el-button
                    type="danger"
                    icon="Delete"
                    link
                    style="font-size: 20px;"
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
                type="primary"
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

<style lang="scss"></style>