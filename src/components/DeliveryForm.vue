<script setup>
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
</script>

<template>
    <el-drawer
        :model-value="modelValue"
        @close="emits('update:modelValue', false)"
        size="300px"
    >
        <el-form
            label-position="top"
        >
            <el-form-item>
                <el-row align="middle" justify="space-between" style="width: 100%">
                    <p>Сумма товаров:</p>
                    <p>519 450</p>
                </el-row>

                <el-row align="middle" justify="space-between" style="width: 100%">
                    <p>Общий вес (кг):</p>
                    <p>900</p>
                </el-row>
            </el-form-item>

            <el-form-item
                label="Способ доставки"
                prop=""
                ref=""
            >
                <el-select
                    style="width: 100%"
                ></el-select>
            </el-form-item>

            <el-form-item
                label="Адрес доставки"
                prop=""
                ref=""
            >
                <el-select
                    style="width: 100%"
                ></el-select>
            </el-form-item>

            <el-form-item
                label="Служба доставки"
                prop=""
                ref=""
            >
                <el-select
                    style="width: 100%"
                ></el-select>
            </el-form-item>

            <el-form-item
                label="Контактное лицо"
                prop=""
                ref=""
            >
                <el-select
                    style="width: 100%"
                ></el-select>
            </el-form-item>

            <el-form-item
                label="Ваша ссылка для отгрузки"
                prop=""
                ref=""
            >
                <el-input
                    placeholder="Ввести"
                ></el-input>
            </el-form-item>

            <el-form-item>
                <el-row align="middle" justify="space-between" style="width: 100%">
                    <span>Стоимость доставки:</span>
                    <span>7 981</span>
                </el-row>

                <el-row align="middle" justify="space-between" style="width: 100%">
                    <span>Итого:</span>
                    <span>527 431</span>
                </el-row>

                <span>
                    Ориентировочный срок доставки
                    <el-icon><InfoFilled></InfoFilled></el-icon>
                    : до "8 ноября"
                </span>
            </el-form-item>

            <el-form-item>
                <el-button
                    type="success"
                    icon="Right"
                    style="width: 100%"
                >
                    Отправить
                </el-button>
            </el-form-item>
        </el-form>
    </el-drawer>
</template>

<style lang="scss" scoped>
    .delivery__form {
        --el-card-padding: 10px;
        position: fixed;
        right: 20px;
        bottom: 50px;
        width: 300px;
        height: 500px;
        z-index: 4;
    }
</style>