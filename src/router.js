import Vue from 'vue';
import Router from 'vue-router';
// import store from './store/index';

// Home
import Home from './views/Home.vue';

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.

// Error
const Error404 = () => import(/* webpackChunkName: 'error' */ './views/Error/404.vue');

//H2H
const H2H = () => import(/* webpackChunkName: 'h2h' */ './views/H2H/Index.vue');
const Overview = () => import(/* webpackChunkName: 'overview' */ './views/H2H/Overview.vue');
const Matches = () => import(/* webpackChunkName: 'matches' */ './views/H2H/Matches.vue');
const Tables = () => import(/* webpackChunkName: 'tables' */ './views/H2H/Tables.vue');

//NavTree
const NavTree = () => import(/* webpackChunkName: 'navtree' */ './views/NavTree/Index.vue');

Vue.use(Router);

const router = new Router({
	mode: 'history',
	routes: [
		{
			path: '*',
			name: 'Error404',
			component: Error404
		},
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/find-matches',
			name: 'navtree',
			component: NavTree
		},
		{
			path: '/H2H',
			name: 'H2H',
			component: H2H,
			children: [
				{
					path: 'overview',
					name: 'Overview',
					component: Overview
				},
				{
					path: 'matches',
					name: 'Matches',
					component: Matches
				},
				{
					path: 'tables',
					name: 'Tables',
					component: Tables
				}
			]
		}
	]
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
