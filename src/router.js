import Vue from 'vue';
import Router from 'vue-router';
// import store from './store/index';

import Home from './views/Home.vue';

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// const About = () => import(/* webpackChunkName: 'about' */ './views/About.vue');

Vue.use(Router);

const router = new Router({
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		let position = { x: 0, y: 0 };
		if (savedPosition) {
			position = savedPosition;
		} else if (to.hash) {
			position.selector = to.hash;
		}
		return new Promi(resolve => {
			setTimeout(() => {
				resolve(position);
			}, 500);
		});
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		}
	]
});

router.beforeEach((to, from, next) => {
	// store.commit('resetSidebar');
	next();
});

export default router;
