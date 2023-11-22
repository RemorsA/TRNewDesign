<script setup>
    import store from '@/store/store'
    import router from '@/router'
    import { computed } from 'vue'

    const homeStore  = computed(() => store.state.Home)
    const links = computed(() => store.getters['Home/menuLinks'])

    function sendRequest() {
        store.commit('Home/sendRequest')
    }
</script>

<template>
	<el-drawer class="el-drawer-custom"
        v-model="homeStore.isMobileMenu"
		direction="ltr"
		title="Меню"
		style="
			min-width: 300px;
			--el-drawer-padding-primary: 10px
		"
    >
		<template #header>
			<a href="/TRNewDesign/news_page">
				<el-image src="/TRNewDesign/logo-stroke.png"></el-image>
			</a>
		</template>

		<div class="drawer-content">
			<div class="drawer-content__field">
				<el-input
					placeholder="Введите артикул"
					v-model="homeStore.fastReqField"
					@keyup.enter="sendRequest"
				></el-input>

				<el-button
					icon="Search"
					@click="sendRequest"
				></el-button>
			</div>

            <a class="drawer-content__link"
				v-for="(record, index) in links.main"
				:key="index"
				:href="'/TRNewDesign' + record.path"
				v-show="record.meta.isShowMenu"
				:style="{
					color: record.path === router.currentRoute.value.path ? 'var(--el-color-primary)' : 'currentcolor'
				}"
			>
				<el-icon v-show="record.meta.icon">
					<component :is="record.meta.icon"></component>
				</el-icon>

				{{ record.meta.title }}
			</a>

			<el-divider>
				<el-row align="middle" style="gap: 5px;">
					<el-icon><Folder></Folder></el-icon>
					Разделы
				</el-row>
			</el-divider>

			<a class="drawer-content__link"
				v-for="(record, index) in links.other"
				:key="index"
				:href="'/TRNewDesign' + record.path"
				v-show="record.meta.isShowMenu"
				:style="{
					color: record.path === router.currentRoute.value.path ? 'var(--el-color-primary)' : 'currentcolor'
				}"
			>
				<el-icon v-show="record.meta.icon">
					<component :is="record.meta.icon"></component>
				</el-icon>

				{{ record.meta.title }}
			</a>
		</div>
    </el-drawer>
</template>

<style lang="scss" scoped>
    .el-drawer-custom {
		.drawer-content {
			display: flex;
			align-items: flex-start;
			flex-direction: column;

			.drawer-content__link {
				width: 100%;
				text-decoration: none;
				color: currentColor;
				padding: 10px;
				display: inherit;
				gap: 5px;
				align-items: center;
				cursor: pointer;
				user-select: none;

				&:hover {
					background: var(--el-border-color);
					border-radius: var(--el-border-radius-base);
				}
			}

			.drawer-content__field {
				display: inherit;
				gap: 5px;
				align-items: center;
				padding: 10px;
				width: 100%
			}
		}
	}
</style>