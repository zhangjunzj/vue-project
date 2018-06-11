import Vue from 'vue'
import env from '../config/env'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mockService from '../service/mockService'

Vue.use(VueAxios, axios)

const http = {
	run: function(serverName, params, retryFlag, callBack) {
		let option = mockService[serverName]
		let url = ''
		if (!option) {
			console.log('no serverName')
			return false
		}
		if (option.type === 'get') {
			let m = option.moduleName ? ('/' + option.moduleName) : ''
			let s = option.serverName ? ('/' + option.serverName) : ''
			let p = []
			Object.keys(params).forEach(function(val, key) {
				p.push(val + '=' + params[val])
			})
			p = '?' + p.join('&');
			url = env.baseUrl + m + s + p
			console.log('serviceUrl:' + url)
			Vue.axios.get(url).then(function(resp) {
				callBack && callBack(resp)
			}).catch(function(err) {
				console.log(err)
			})

		} else if(option.type = 'post') {
			// todo
			let m = option.moduleName ? ('/' + option.moduleName) : ''
			let s = option.serverName ? ('/' + option.serverName) : ''
			url = env.baseUrl + m + s
			console.log('serviceUrl:' + url)
			Vue.axios.post(url, params, function(resp) {
				callBack && callBack(resp)
			}).catch(function(err) {
				console.log(err)
			})
		}
	},
	retry: function() {

	}
}


export default http