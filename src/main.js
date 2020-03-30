import Vue from 'vue';
import VueProgressBar from 'vue-progressbar';

import App from './App.vue';
import router from './router';
// import store from './store/index';

import './assets/styles/tailwind.css';

const progressbarOptions = {
	thickness: '4px',
	transition: {
		speed: '0.2s',
		opacity: '0.6s',
		termination: 300
	},
	autoRevert: true,
	location: 'top',
	inverse: false,
	color: '#DE4A09',
	failedColor: 'red'
};

Vue.use(VueProgressBar, progressbarOptions);

Vue.config.productionTip = false;

new Vue({
	router,
	// store,
	render: h => h(App)
}).$mount('#app');
