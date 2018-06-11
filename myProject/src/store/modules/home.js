import Vue from 'vue'
import { SET_FORECASTDATA } from '../mutations-types.js'

const state = {
	// 3~7天天气预报
	forecastData: null
}

const getters = {

}

const mutations = {
	[SET_FORECASTDATA] (state, payload) {
		state.forecastData = payload
		alert(1)
	}
}

const actions = {
	queryForecastData ({ commit }) {
		let params = {
			location: '上海',
			key: 'cd3d61a4afe04a9eb2bb82d92d800cf4'
		}
		return new Promise(function(resolve, reject) {
			Vue.Http.run('getForecast', params, false, (resp) => {
				if (resp.status === 200) {
					resolve(resp)
				} else {
					reject(resp)
				}
			})
		})
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}

