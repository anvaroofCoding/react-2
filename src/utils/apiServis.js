import axios from 'axios'

export const apiCleint = axios.create({
	baseURL: 'https://dummyjson.com',
})

apiCleint.interceptors.response.use(
	res => {
		return {
			data: res?.data,
			is_seccess: res.status == 200 ? true : false,
		}
	},
	err => {
		console.log(err)
	}
)

apiCleint.interceptors.request.use(
	conf => {
		conf.headers.set('Authorition:', 'beazerUrl')
		return conf
	},
	err => {
		console.log(err)
	}
)

// ho'o bu yerda nimarlar bolyapdi
