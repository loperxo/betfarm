/* eslint no-shadow: ["error", { "allow": ["state"] }]	*/
import api from '../../utils/api';

const state = {
	isLoggedIn: false,
	loggedUser: {},
	loginSuccess: null,
	refreshingToken: false,
	error: ''
};

const getters = {
	getLoggedUser: state => state.loggedUser,
	isLoggedIn: state => state.isLoggedIn,
	getError: state => state.error,
	refreshingToken: state => state.refreshingToken
};

const mutations = {
	logout: (state) => {
		state.loggedUser = {};
		state.isLoggedIn = false;
	},
	setLoggedUser: (state, user) => {
		state.loggedUser = user;
	},
	loginSuccess: (state, data) => {
		state.loggedUser = data;
		state.isLoggedIn = true;
	},
	updateLoggedUser: (state, data) => {
		state.loggedUser = { ...state.loggedUser, ...data };
	},
	updateTokenStatus: (state, data) => {
		state.refreshingToken = data;
	}
};

const actions = {
	login: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post('login', data)
			.then((response) => {
				if (response.status === 200 && 'token' in response.data) {
					const user = response.data.data;
					user.token = response.data.token;
					user.refreshToken = response.data.refreshToken;
					commit('loginSuccess', user);
					commit('reqSuccess', null, { root: true });
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit(
					'logError',
					{
						type: 'login',
						...(error.response.data || 'Authentication Error, Please Try Again.')
					},
					{ root: true }
				);
				return error;
			});
		return true;
	},
	forgotPassword: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post('password', data)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit(
					'logError',
					{ type: 'forgot-password', message: error.response.data.message },
					{ root: true }
				);
				return error;
			});
		return true;
	},
	registerUser: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post('register', data)
			.then((response) => {
				if (response.status === 201) {
					commit('reqSuccess', null, { root: true });
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit('logError', { ...error.response.data, type: 'register' }, { root: true });
				return error;
			});
		return true;
	},
	changePassword: ({ commit }, data) => {
		commit('resetReq', null, { root: true });
		commit('reqInit', null, { root: true });
		api.post('password/change', data)
			.then((response) => {
				if (response.status === 200) {
					commit('reqSuccess', null, { root: true });
					return true;
				}
				commit('reqError', null, { root: true });
				return false;
			})
			.catch((error) => {
				commit('reqError', null, { root: true });
				commit(
					'logError',
					{ ...error.response.data, type: 'change-password' },
					{ root: true }
				);
				return error;
			});
		return true;
	},
	doTokenRefresh: () => {
		const { email, refreshToken } = auth.loggedUser;
		api.post('token', { email, refreshToken })
			.then((response) => {
				if (response.status === 200) {
					const user = response.data.data;
					user.token = response.data.token;
					user.refreshToken = response.data.refreshToken;
					commit('updateLoggedUser', user);
					commit('updateTokenStatus', true);
					restartSession(user);
				}
			})
			.catch((error) => {
				return error;
			})
			.finally(() => {
				commit('updateTokenStatus', false);
			});
		return true;
	}
};

export default {
	actions,
	state,
	mutations,
	getters
};
