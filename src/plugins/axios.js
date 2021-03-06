import Vue from 'vue'
import axios from 'axios'
import {
	Message
} from 'element-ui'
import {
	MessageBox
} from 'element-ui';
var Qs = require('qs')

const http = {}

const instance = axios.create({
	timeout: 30000,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	},

})

// 请求拦截
instance.interceptors.request.use(config => {
	// var token = localStorage.getItem('token');
	// if (token) {
	// 	config.headers.common['token'] = `${token}`
	// }
	return config
}, err => {
	return Promise.reject(err)
})

// 响应拦截
instance.interceptors.response.use(res => {
	if (res.status === 200) {
		return res.data
	}
}, err => {
	// if (err) {
	// 	Message.warning({
	// 		message: err
	// 	})
	// }
	console.log(err);
	return Promise.reject(err.response)
})

http.get = function(url, data = {}) {
	return new Promise((resolve, reject) => {
		instance.get(url, {
			params: data
		}).then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err);
		})
	})
}


http.del = function(url, data = {}) {
	return new Promise((resolve, reject) => {
		instance.delete(url, {
			params: data
		}).then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err);
		})
	})
}

http.post = function(url, data) {
	return new Promise((resolve, reject) => {
		instance.post(url, Qs.stringify(data)).then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err);
		})
	})
}

http.put = function(url, data) {
	return new Promise((resolve, reject) => {
		instance.put(url, Qs.stringify(data)).then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err);
		})
	})
}

// 导出表格用
http.getExcel = function(url, data = {}) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
			params: data
		}).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err);
		})
	})
}



export default http

