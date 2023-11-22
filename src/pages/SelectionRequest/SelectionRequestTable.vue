<script setup>
    import store from '@/store/store'
    import TooltipText from '@/components/customUI/TooltipText.vue'
    import { ref } from 'vue'

    let picture = ref("https://media.istockphoto.com/id/1367224125/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BA%D0%B8-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B0%D0%BA%D0%BA%D1%83%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-%D0%BA%D0%BB%D0%B5%D0%BC%D0%BC%D1%8B-%D0%B0%D0%B2%D1%82%D0%BE%D0%BC%D0%BE%D0%B1%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%B0%D0%BA%D0%BA%D1%83%D0%BC%D1%83%D0%BB%D1%8F%D1%82%D0%BE%D1%80%D0%B0-12%D0%B2-%D0%B7%D0%B0%D1%80%D1%8F%D0%B4%D0%BD%D0%BE%D0%B5.jpg?s=2048x2048&w=is&k=20&c=LEAfdlMiZh-4KSdgFEhSlrvlOxkLPh6BNwwQ6ywW9hk=")
</script>

<template>
    <el-table
        :data="store.state.tData.slice(40)"
        size="small"
        border
    >
        <el-table-column
            label="Бренд"
            prop="name"
        ></el-table-column>

        <el-table-column
            label="Модель"
            prop="company"
        ></el-table-column>

        <el-table-column
            label="Серийный номер"
            prop="latitude"
        ></el-table-column>

        <el-table-column
            label="Наименование"
            prop="name"
        ></el-table-column>

        <el-table-column
            label="Кол-во"
            prop="age"
        ></el-table-column>

        <el-table-column
            label="Ед. изм."
            prop="eyeColor"
        ></el-table-column>

        <el-table-column
            label="Дата выпуска техники"
            prop="registered"
        ></el-table-column>

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
            label="Фото"
        >
            <template #default="{ row }">
                <el-image class="picture__cover-hover"
                    :src="picture"
                    preview-teleported
                    :preview-src-list="[picture]"
                    hide-on-click-modal
                    style="width: 100%; height: 50px;"
                    fit="cover"
                ></el-image>
            </template>
        </el-table-column>

        <el-table-column width="60" align="center">
            <template #default="{ row }">
                <el-button
                    link
                    icon="Delete"
                    type="danger"
                    style="font-size: 20px;"
                ></el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<style lang="scss" scoped>

</style>