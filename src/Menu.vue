<script setup>
    import router from './router'
    import { ref } from 'vue'
    import { ElNotification } from 'element-plus'

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

    let requestInput = ref('')
    let isCollapse = ref(false)

    function handleSelect(value) {
        if (value === 'fastRequest') return

        let tagA = document.createElement('a')
        tagA.setAttribute('href', '/' + value)
        tagA.click()
    }

    function sendRequest() {
		if (requestInput.value) {
            alert('in development')
        }
        else {
            ElNotification({
                type: 'warning',
                title: 'Внимание',
                message: 'Вы не ввели артикул',
                duration: 5000,
                showClose: true
            })
        }
	}
</script>

<template>
    <el-menu class="el-menu-custom"
        :default-active="router.currentRoute.value.name"
        text-color="white"
        :default-openeds="[ '1' ]"
        active-text-color="var(--el-color-primary)"
        background-color="rgb(63,107,183)"
        :ellipsis="false"
        :collapse="true"
        @select="handleSelect"
    >
        <el-menu-item index="news">
            <el-image class="menu__item-logo-picture"
                v-if="isCollapse"
                src="/logo.png"
                fit="scale-down"
            ></el-image>

            <el-icon v-else><House></House></el-icon>
        </el-menu-item>

        <el-menu-item index="account">
            <el-icon><User></User></el-icon>
            <span>Усманов Олег Игоревич</span>
        </el-menu-item>

        <el-menu-item index="fastRequest">
            <el-input class="el-input-menu__custom"
                placeholder="Введите артикул"
                v-model="requestInput"
                @keyup.enter="sendRequest"
            ></el-input>

            <el-button
                icon="Search"
                link
                style="color: white;"
                @click="sendRequest"
            ></el-button>
        </el-menu-item>

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
    </el-menu>
</template>

<style lang="scss" scoped>
    .el-menu-custom {
        &.el-menu {
            --el-menu-border-color: none;
        }

        .el-input-menu__custom {
            --el-input-bg-color: transparent;
            --el-input-border-color: transparent;
            --el-input-placeholder-color: white;
            --el-input-text-color: white;
            --el-input-border: none;
            --el-input-hover-border-color: transparent;
            --el-input-focus-border-color: transparent;
            border-bottom: 1px solid white !important;
        }

        .menu__item-logo-picture {
            width: 100%;
            height: 100%;
        }
    }
</style>