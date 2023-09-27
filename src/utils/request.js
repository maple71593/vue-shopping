import store from '@/store'
import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://cba.itlike.com/public/index.php?s=/api/',
  timeout: 3000
})
// 添加請求攔截器
instance.interceptors.request.use(function (config) {
  // 在發送請求之前做些什麼

  const token = store.getters.token
  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }

  return config
}, function (error) {
  // 對請求錯誤做些什麼
  return Promise.reject(error)
})

// 添加回應攔截器
instance.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status !== 200) {
    alert(res.message)
    return Promise.reject(res.message)
  }
  // 2xx 範圍內的狀態碼都會觸發該函數。
  // 對回應資料做點什麼
  return res
}, function (error) {
  // 超出 2xx 範圍的狀態碼都會觸發該函數。
  // 對回應錯誤做點什麼
  return Promise.reject(error)
})

export default instance
