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
								icon: 'House'
							},
							component: () => import('./News.vue'),
							children: [
								{
									path: '/home/news/edit',
									name: 'newsEdit',
									meta: {
										title: 'Редактирование новости',
									},
									component: () => import('./NewsEdit.vue')
								}
							]
						},
						{
							path: '/home/account',
							name: 'account',
							meta: {
								title: 'Учетная запись',
								icon: 'User'
							},
							component: () => import('./Account.vue'),
						},
						{
							path: '/home/orders',
							name: 'orders',
							meta: {
								title: 'Заказы',
								icon: 'List'
							},
						},
						{
							path: '/home/shipments',
							name: 'shipments',
							meta: {
								title: 'Отгрузки',
								icon: 'Van'
							},
						},
						{
							path: '/home/cart',
							name: 'cart',
							meta: {
								title: 'Корзина',
								icon: 'ShoppingCart'
							},
						},
						{
							path: '/home/messages',
							name: 'messages',
							meta: {
								title: 'Сообщения',
								icon: 'Message'
							},
						},
						{
							path: '/home/request_by_article',
							name: 'requestByArticle',
							meta: {
								title: 'Запрос по артикулу',
							},
						},
						{
							path: '/home/selection_request',
							name: 'selectionRequest',
							meta: {
								title: 'Запрос на подбор',
							},
						},
						{
							path: '/home/product_catalog',
							name: 'productCatalog',
							meta: {
								title: 'Каталог номенклатуры',
							},
						},
						{
							path: '/home/history_request',
							name: 'historyRequest',
							meta: {
								title: 'История запросов',
							},
						},
						{
							path: '/home/catalogs',
							name: 'catalogs',
							meta: {
								title: 'Каталоги',
							},
						},
						{
							path: '/home/tires',
							name: 'tires',
							meta: {
								title: 'Шины',
							},
						},
						{
							path: '/home/forks',
							name: 'forks',
							meta: {
								title: 'Вилы',
							},
						},
						{
							path: '/home/engines',
							name: 'engines',
							meta: {
								title: 'Двигатели',
							},
						},
						{
							path: '/home/attachments',
							name: 'attachments',
							meta: {
								title: 'Навесное оборудование',
							},
						},
						{
							path: '/home/batteries',
							name: 'batteries',
							meta: {
								title: 'Аккумуляторы',
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