import { createRouter, createWebHistory } from 'vue-router'

import Home from './Home.vue'
import Shipments from './Shipments.vue'
import News from './News.vue'
import Account from './Account.vue'
import Cart from './Cart.vue'
import Orders from './Orders.vue'
import Tires from './Tires.vue'
import Pitchforks from './Pitchforks.vue'
import Engines from './Engines.vue'
import Batteries from './Batteries.vue'
import Attachments from './Attachments.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'index',
			redirect: '/news',
			component: Home,
			children: [
				{
					path: '/news',
					name: 'news',
					meta: {
						title: 'Новости',
						icon: 'House',
						isShowMenu: false
					},
					component: News,
				},
				{
					path: '/account',
					name: 'account',
					meta: {
						title: 'Учетная запись',
						icon: 'User',
						isShowMenu: true,
					},
					component: Account,
				},
				{
					path: '/orders',
					name: 'orders',
					meta: {
						title: 'Заказы',
						icon: 'List',
						isShowMenu: true,
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
					},
					component: Cart
				},
				{
					path: '/messages',
					name: 'messages',
					meta: {
						title: 'Сообщения / Удалить',
						icon: 'Message',
						isShowMenu: true,
					},
				},
				{
					path: '/request_by_article',
					name: 'requestByArticle',
					meta: {
						title: 'Запрос по артикулу',
						isShowMenu: true,
					},
				},
				{
					path: '/selection_request',
					name: 'selectionRequest',
					meta: {
						title: 'Запрос на подбор',
						isShowMenu: true,
					},
				},
				{
					path: '/product_catalog',
					name: 'productCatalog',
					meta: {
						title: 'Каталог номенклатуры',
						isShowMenu: true,
					},
				},
				{
					path: '/history_request',
					name: 'historyRequest',
					meta: {
						title: 'История запросов',
						isShowMenu: true,
					},
				},
				{
					path: '/catalogs',
					name: 'catalogs',
					meta: {
						title: 'Каталоги',
						isShowMenu: true,
					},
				},
				{
					path: '/tires',
					name: 'tires',
					meta: {
						title: 'Шины',
						isShowMenu: true,
					},
					component: Tires,
				},
				{
					path: '/pitchforks',
					name: 'pitchforks',
					meta: {
						title: 'Вилы',
						isShowMenu: true,
					},
					component: Pitchforks
				},
				{
					path: '/engines',
					name: 'engines',
					meta: {
						title: 'Двигатели',
						isShowMenu: true,
					},
					component: Engines
				},
				{
					path: '/attachments',
					name: 'attachments',
					meta: {
						title: 'Навесное оборудование',
						isShowMenu: true,
					},
					component: Attachments
				},
				{
					path: '/batteries',
					name: 'batteries',
					meta: {
						title: 'Аккумуляторы',
						isShowMenu: true,
					},
					component: Batteries
				},
			]
		},
		{
			path: '/auth',
			name: 'auth',
			component: () => import('./Auth.vue')
		},
		{
			path: '/:pathMatch(.*)*',
			name: '404',
			component: () => import('./404.vue')
		},
	]
})

export default router