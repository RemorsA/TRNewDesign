<script setup>
    import store from '@/store/store'

    const props = defineProps({
        modelValue: {
            required: true,
            type: Boolean,
            default: false
        }
    })

    const emits = defineEmits([
        'update:modelValue'
    ])

    function addInCart(row) {
        row.loading = true

        setTimeout(() => {
            row.loading = false
            row.isBasket = true
        }, 2000);
    }
</script>

<template>
    <el-drawer
        :model-value="modelValue"
        title="Заказать"
        direction="btt"
        size="80%"
        @close="emits('update:modelValue', false)"
    >
        <el-table
            :data="store.state.tData.slice(38)"
            border
            stripe
            size="small"
        >
            <el-table-column
                label="Город"
                prop="address"
                min-width="150"
                width=""
            ></el-table-column>

            <el-table-column
                label="На складе, шт."
                prop="age"
                min-width="130"
                width=""
                sortable
            ></el-table-column>

            <el-table-column
                label="Цена, руб."
                prop="balance"
                min-width="130"
                width=""
                sortable
            ></el-table-column>

            <el-table-column
                label="Купить"
                prop=""
                min-width="280"
                width=""
            >
                <template #default="{ row }">
                    <el-row
                        style="gap: 10px;"
                        v-if="!row?.isBasket"
                    >
                        <el-input-number
                            :model-value="1"
                            :disabled="row?.loading"
                            size="small"
                        ></el-input-number>

                        <el-button
                            link
                            type="primary"
                            icon="ShoppingCart"
                            @click="addInCart(row)"
                            :loading="row?.loading"
                        >
                            В корзину
                        </el-button>
                    </el-row>

                    <el-link
                        v-else
                        type="primary"
                        icon="Guide"
                    >
                        Перейти в корзину
                    </el-link>
                </template>
            </el-table-column>
        </el-table>
    </el-drawer>
</template>

<style lang="scss" scoped></style>