import axios from 'axios'
import {
  Toast,
  Indicator
}
from 'mint-ui'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: config.BASE_API, // api 的 base_url
  timeout: 7000 // 请求超时时间
})


// request拦截器
service.interceptors.request.use(
  config => {
    Indicator.open({
      text: '请求中...',
      spinnerType: 'fading-circle'
    });
    config.headers['Content-Type'] = 'application/json'
    if (store.getters.token) {
      config.headers['APIToken'] = 'test';
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    Indicator.close();
    return response.data
  },
  error => {
    console.log('err' + error) // for debug
    Toast({
      message: error.message,
      iconClass: 'icon icon-success',
      duration: 5000
    });
    Indicator.close();
    return Promise.reject(error)
  }
)

export default service
