import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home/Home.vue'

import PageNotFound from '@/pages/404.vue'
import Auth from '@/pages/Auth.vue'

import Shipments from '@/pages/Shipments.vue'
import IndexNewsPage from '@/pages/News/IndexNewsPage.vue'
import News from '@/pages/News/News.vue'
import About from '@/pages/News/About.vue'
import Account from '@/pages/Account.vue'
import Cart from '@/pages/Cart.vue'
import Orders from '@/pages/Orders.vue'
import Tires from '@/pages/Tires.vue'
import Pitchforks from '@/pages/Pitchforks.vue'
import Engines from '@/pages/Engines.vue'
import Batteries from '@/pages/Batteries.vue'
import Attachments from '@/pages/Attachments.vue'
import HistoryRequest from '@/pages/HistoryRequest.vue'
import ProductCatalog from '@/pages/ProductCatalog.vue'
import Catalog from '@/pages/Catalog.vue'
import SelectionRequest from '@/pages/SelectionRequest/SelectionRequest.vue'
import RequestByArticle from '@/pages/RequestByArticle/RequestByArticle.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'index',
			redirect: '/news_page',
			component: Home,
			children: [
				// MAIN:
				{
					path: '/news_page',
					name: 'newsIndexPage',
					redirect: '/news_page/news',
					meta: {
						title: 'Новости',
						icon: 'House',
						isShowMenu: false,
					},
					component: IndexNewsPage,
					children: [
						{
							path: '/news_page/news',
							name: 'news',
							component: News
						},
						{
							path: '/news_page/about/:id',
							name: 'about',
							component: About,
							meta: {
								title: 'Детально',
							},
						},
					]
				},
				{
					path: '/account',
					name: 'account',
					meta: {
						title: 'Учетная запись',
						icon: 'User',
						isShowMenu: true,
						main: true,
					},
					component: Account,
				},
				{
					path: '/messages',
					name: 'messages',
					redirect: '/history_request/only_messages',
					meta: {
						title: 'Сообщения',
						icon: 'Message',
						isShowMenu: true,
						main: true,
					},
				},
				{
					path: '/orders',
					name: 'orders',
					meta: {
						title: 'Заказы',
						icon: 'List',
						isShowMenu: true,
						main: true,
					},
					component: Orders
				},
				{
					path: '/shipments',
					name: 'shipments',
					meta: {
						title: 'Отгрузки',
						icon: 'Van',
						isShowMenu: true,
						main: true,
					},
					component: Shipments
				},
				{
					path: '/cart',
					name: 'cart',
					meta: {
						title: 'Корзина',
						icon: 'ShoppingCart',
						isShowMenu: true,
						main: true,
					},
					component: Cart
				},
				// OTHER
				{
					path: '/tires',
					name: 'tires',
					meta: {
						title: 'Шины',
						isShowMenu: true,
						other: true,
					},
					component: Tires,
				},
				{
					path: '/pitchforks',
					name: 'pitchforks',
					meta: {
						title: 'Вилы',
						isShowMenu: true,
						other: true,
					},
					component: Pitchforks
				},
				{
					path: '/engines',
					name: 'engines',
					meta: {
						title: 'Двигатели',
						isShowMenu: true,
						other: true,
					},
					component: Engines
				},
				{
					path: '/attachments',
					name: 'attachments',
					meta: {
						title: 'Навесное оборудование',
						isShowMenu: true,
						other: true,
					},
					component: Attachments
				},
				{
					path: '/batteries',
					name: 'batteries',
					meta: {
						title: 'Аккумуляторы',
						isShowMenu: true,
						other: true,
					},
					component: Batteries
				},
				{
					path: '/history_request/:isMessages',
					name: 'historyRequest',
					meta: {
						title: 'История запросов',
						isShowMenu: true,
						other: true,
					},
					component: HistoryRequest
				},
				{
					path: '/request_by_article',
					name: 'requestByArticle',
					meta: {
						title: 'Запрос по артикулу',
						isShowMenu: true,
						other: true,
					},
					component: RequestByArticle
				},
				{
					path: '/selection_request',
					name: 'selectionRequest',
					meta: {
						title: 'Запрос на подбор',
						isShowMenu: true,
						other: true,
					},
					component: SelectionRequest
				},
				{
					path: '/product_catalog',
					name: 'productCatalog',
					meta: {
						title: 'Каталог номенклатуры',
						isShowMenu: true,
						other: true,
					},
					component: ProductCatalog
				},
				{
					path: '/catalogs',
					name: 'catalogs',
					meta: {
						title: 'Каталоги',
						isShowMenu: true,
						other: true,
					},
					component: Catalog
				},
			]
		},
		{
			path: '/auth',
			name: 'auth',
			component: Auth
		},
		{
			path: '/:pathMatch(.*)*',
			name: '404',
			component: PageNotFound
		},
	]
})

export default router