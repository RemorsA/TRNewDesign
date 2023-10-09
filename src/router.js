import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'index',
			redirect: '/news',
			children: [
				{
					path: '/news',
					name: 'news',
					meta: {
						title: 'Новости'
					},
					component: () => import('./News.vue'),
				},
				{
					path: '/account',
					name: 'account',
					meta: {
						title: 'Учетная запись'
					},
					component: () => import('./Account.vue'),
				}
			]
		},
		{
			path: '/:pathMatch(.*)*',
			name: '404',
			component: () => import('./404.vue')
		},
	]
})

export default router
