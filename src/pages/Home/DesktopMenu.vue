<script setup>
    import store from '@/store/store';
    import router from '@/router'
    import { computed } from 'vue'

    const homeStore = computed(() => store.state.Home)
    const links = computed(() => store.getters['Home/menuLinks'])
    const settings = computed(() => store.state.settings)

    function handleSelect(value) {
        store.commit('Home/handleSelect', value)
    }

    function sendRequest() {
        store.commit('Home/sendRequest')
    }
</script>

<template>
    <el-menu class="el-menu-custom"
        v-show="store.state.isAuth"
        :default-active="router.currentRoute.value.path"
        :ellipsis="false"
        :collapse="settings.collapse"
        @select="handleSelect"
    >
        <el-menu-item
            index="news"
            title="Новости"
        >
            <el-image class="menu__item-logo-picture"
                v-if="!settings.collapse"
                src="/TRNewDesign/logo.png"
                fit="scale-down"
            ></el-image>

            <el-icon v-else><House></House></el-icon>
        </el-menu-item>

        <el-menu-item
            index="fastRequest"
            v-if="!settings.collapse"
        >
            <el-input class="el-input-menu__custom"
                placeholder="Быстрый запрос"
                v-model="homeStore.fastReqField"
                @keyup.enter="sendRequest"
            ></el-input>

            <el-button class="menu__item-fast_request-button"
                icon="Search"
                link
                @click="sendRequest"
            ></el-button>
        </el-menu-item>

        <el-menu-item
            index="fastRequest"
            v-else
            @click="homeStore.isFastRequestDialog = true"
            title="Быстрый запрос"
        >
            <el-icon><Search></Search></el-icon>
        </el-menu-item>

        <el-menu-item
            v-for="(record, index) in links.main"
            :key="index"
            :index="record.path"
            v-show="record.meta.isShowMenu"
            :title="settings.collapse ? record.meta.title : ''"
        >
            <el-icon v-show="record.meta.icon">
                <component :is="record.meta.icon"></component>
            </el-icon>

            <span>{{ record.meta.title }}</span>
        </el-menu-item>

        <el-sub-menu index="1">
            <template #title>
                <el-icon><Folder></Folder></el-icon>
                <span>Запросы</span>
            </template>

            <el-menu-item-group>
                <el-menu-item
                    v-for="(subItem, index) in links.request"
                    :key="index"
                    :index="subItem.path"
                >
                    {{ subItem.meta.title }}
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
            <template #title>
                <el-icon><Setting></Setting></el-icon>
                <span>Запчасти</span>
            </template>

            <el-menu-item-group>
                <el-menu-item
                    v-for="(subItem, index) in links.parts"
                    :key="index"
                    :index="subItem.path"
                >
                    {{ subItem.meta.title }}
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="3">
            <template #title>
                <el-icon><Collection></Collection></el-icon>
                <span>Каталоги</span>
            </template>

            <el-menu-item-group>
                <el-menu-item
                    v-for="(subItem, index) in links.catalog"
                    :key="index"
                    :index="subItem.path"
                >
                    {{ subItem.meta.title }}
                </el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
    </el-menu>

    <el-dialog
		v-model="homeStore.isFastRequestDialog"
		align-center
		append-to-body
		width="400"
		title="Быстрый запрос по артикулу"
	>
		<el-input
			placeholder="Введите артикул"
			v-model="homeStore.fastReqField"
			@keyup.enter="sendRequest"
		></el-input>

		<el-button
			icon="Search"
			style="width: 100%; margin-top: 10px;"
			@click="sendRequest"
		>
			Запросить
		</el-button>
	</el-dialog>
</template>

<style lang="scss" scoped>
    .el-menu-custom {
        --el-menu-text-color: white;
        --el-menu-bg-color: rgb(63,107,183);
        --el-menu-hover-bg-color: rgb(50, 86, 146);
        --el-menu-active-color: var(--el-color-primary);
        --el-menu-border-color: none;
        min-height: 100vh;
        max-width: 250px;
        background: rgb(63,107,183);

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

        .menu__item-fast_request-button {
            color: white !important;

            &:hover {
                color: var(--el-color-primary) !important;
            }
        }
    }
</style>