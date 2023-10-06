<script setup>
    import router from './router'
    import { ref } from 'vue'

    const emits = defineEmits([
        'isFastRequest',
        'isAccount'
    ])

    const subMenuArr = ref([
        { label: 'Запчасти', index: 'spareParts' },
        { label: 'Запрос по артикулу', index: 'requestByArticle' },
        { label: 'Запрос на подбор', index: 'selectionRequest' },
        { label: 'Каталог номенклатуры', index: 'productCatalog' },
        { label: 'История запросов', index: 'queryHistory' },
        { label: 'Каталоги', index: 'catalogs' },
        { label: 'Шины', index: 'tires' },
        { label: 'Вилы', index: 'pitchfork' },
        { label: 'Двигатели', index: 'engines' },
        { label: 'Навесное оборудование', index: 'attachments' },
        { label: 'Аккумуляторы', index: 'batteries' },
    ])

    function handleSelect(value) {
        if (value !== 'none') {
            router.push({ name: value })
        }
    }
</script>

<template>
    <el-menu class="el-menu-custom"
        :default-active="router.currentRoute.value.name"
        text-color="white"
        active-text-color="var(--el-color-info-light-3)"
        background-color="rgb(63,107,183)"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="news">
            <el-image class="menu__item-logo-picture"
                src="/logo.png"
                fit="scale-down"
            ></el-image>
        </el-menu-item>

        <el-menu-item index="none" @click="emits('isAccount')">
            <el-icon><User></User></el-icon>
            <span>Усманов Олег Игоревич</span>
        </el-menu-item>

        <el-menu-item index="" @click="emits('isFastRequest')">
            <el-icon><Search></Search></el-icon>
            <span>Быстрый запрос</span>
        </el-menu-item>

        <el-sub-menu index="1">
            <template #title>
                <el-icon><Grid></Grid></el-icon>
                <span>Разделы</span>
            </template>

            <el-menu-item-group>
                <el-menu-item
                    v-for="(subItem, index) in subMenuArr"
                    :key="index"
                    :index="subItem.index"
                >
                    {{ subItem.label }}
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>

        <el-menu-item index="orders">
            <el-icon><List></List></el-icon>
            <span>Заказы</span>
        </el-menu-item>

        <el-menu-item index="shipments">
            <el-icon><Van></Van></el-icon>
            <span>Отгрузки</span>
        </el-menu-item>

        <el-menu-item index="cart">
            <el-icon><ShoppingCart></ShoppingCart></el-icon>
            <span>Корзина</span>
        </el-menu-item>

        <el-menu-item index="message">
            <el-icon><Message></Message></el-icon>
            <span>Сообщения</span>
        </el-menu-item>
    </el-menu>
</template>

<style lang="scss" scoped>
    .el-menu-custom {
        &.el-menu {
            --el-menu-border-color: none;
        }

        .menu__item-logo-picture {
            width: 100%;
            height: 100%;
        }
    }
</style>