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
								title: 'Новости'
							},
							component: () => import('./News.vue'),
						},
						{
							path: '/home/account',
							name: 'account',
							meta: {
								title: 'Учетная запись'
							},
							component: () => import('./Account.vue'),
						}
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