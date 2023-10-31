<script setup>
    import store from './store';
</script>

<template>
    <el-card>
        <div class="filters">
            <span class="title">
                <el-icon><Filter></Filter></el-icon>
                Фильтр
            </span>

            <div class="fields">
                <el-input
                    v-for="(filter, index) in 2"
                    :key="index"
                    :placeholder="(index === 0) ? 'Номер отгрузки' : (index === 1) ? 'Ссылка для отгрузки' : ''"
                    clearable
                ></el-input>

                <el-date-picker
                    v-for="(filter, index) in 2"
                    :key="index"
                    style="width: 100%;"
                    :placeholder="(index === 0) ? 'Период от - ?' : (index === 1) ? 'Период до - ?' : ''"
                ></el-date-picker>
            </div>

            <div class="navigations">
                <el-button
                    icon="Close"
                    type="primary"
                >
                    Очистить поиск
                </el-button>

                <el-radio-group :model-value="'Все'">
                    <el-radio-button label="Все"></el-radio-button>
                    <el-radio-button label="Активные"></el-radio-button>
                    <el-radio-button label="Не активные"></el-radio-button>
                </el-radio-group>
            </div>
        </div>
    </el-card>

    <div
        v-for="(order, index) in store.state.tData.slice(40)"
        :key="index"
    >
        <el-divider content-position="left">
            {{ order.name }}
        </el-divider>

        <el-card></el-card>
    </div>

    <el-row justify="center" style="margin-top: 20px;">
        <el-pagination
            :pager-count="11"
            layout="sizes, prev, pager, next"
            :total="store.state.tData.slice(45)?.length"
            :page-sizes="[10, 20, 40, 60, 80, 100]"
        ></el-pagination>
    </el-row>
</template>

<style lang="scss" scoped>
    .filters {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .title {
            font-size: 16px;
            font-weight: bold;
            display: block;
        }
        .fields {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .navigations {
            display: inherit;
            align-items: center;
            gap: inherit;
            flex-wrap: wrap;
        }
    }
</style>