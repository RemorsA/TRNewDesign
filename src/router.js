import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'index',
			redirect: '/home',
			component: () => import('./App.vue'),
			children: [
				{
					path: '/home',
					name: 'home',
					redirect: '/home/news',
					component: () => import('./Home.vue'),
					children: [
						{
							path: '/home/news',
							name: 'news',
							meta: {
								title: 'Новости',
								icon: 'House',
								isShowMenu: false
							},
							component: () => import('./News.vue'),
						},
						{
							path: '/home/account',
							name: 'account',
							meta: {
								title: 'Учетная запись',
								icon: 'User',
								isShowMenu: true,
							},
							component: () => import('./Account.vue'),
						},
						{
							path: '/home/orders',
							name: 'orders',
							meta: {
								title: 'Заказы',
								icon: 'List',
								isShowMenu: true,
							},
						},
						{
							path: '/home/shipments',
							name: 'shipments',
							meta: {
								title: 'Отгрузки',
								icon: 'Van',
								isShowMenu: true,
							},
						},
						{
							path: '/home/cart',
							name: 'cart',
							meta: {
								title: 'Корзина',
								icon: 'ShoppingCart',
								isShowMenu: true,
							},
						},
						{
							path: '/home/messages',
							name: 'messages',
							meta: {
								title: 'Сообщения',
								icon: 'Message',
								isShowMenu: true,
							},
						},
						{
							path: '/home/request_by_article',
							name: 'requestByArticle',
							meta: {
								title: 'Запрос по артикулу',
								isShowMenu: true,
							},
						},
						{
							path: '/home/selection_request',
							name: 'selectionRequest',
							meta: {
								title: 'Запрос на подбор',
								isShowMenu: true,
							},
						},
						{
							path: '/home/product_catalog',
							name: 'productCatalog',
							meta: {
								title: 'Каталог номенклатуры',
								isShowMenu: true,
							},
						},
						{
							path: '/home/history_request',
							name: 'historyRequest',
							meta: {
								title: 'История запросов',
								isShowMenu: true,
							},
						},
						{
							path: '/home/catalogs',
							name: 'catalogs',
							meta: {
								title: 'Каталоги',
								isShowMenu: true,
							},
						},
						{
							path: '/home/tires',
							name: 'tires',
							meta: {
								title: 'Шины',
								isShowMenu: true,
							},
						},
						{
							path: '/home/forks',
							name: 'forks',
							meta: {
								title: 'Вилы',
								isShowMenu: true,
							},
						},
						{
							path: '/home/engines',
							name: 'engines',
							meta: {
								title: 'Двигатели',
								isShowMenu: true,
							},
						},
						{
							path: '/home/attachments',
							name: 'attachments',
							meta: {
								title: 'Навесное оборудование',
								isShowMenu: true,
							},
						},
						{
							path: '/home/batteries',
							name: 'batteries',
							meta: {
								title: 'Аккумуляторы',
								isShowMenu: true,
							},
						},
					]
				}
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