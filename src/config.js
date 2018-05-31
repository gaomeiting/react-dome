import axios from 'axios'
import { Toast } from 'antd-mobile'
axios.interceptors.request.use(function(config) {
	Toast.loading("加载中")
	return config
}, function(error){
	return Promise.reject(error)
})
axios.interceptors.response.use(function(config) {
	Toast.hide()
	return config
}, function(error){
	return Promise.reject(error)
})
export default axios