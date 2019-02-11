import wepy from 'wepy'
import config from '../config.js'
import request from './request'

const userApi = {
  token(code) {
    return wepy.request(`${config.apiUrlPrefix}/user/sendcode?code=${code}`).then(res => {
      if (res.statusCode !== 200) {
        return Promise.reject(new Error('获取失败！'))
      }
      if (!res.data.status) {
        return Promise.reject(res.data.message)
      }
      return res.data
    })
  },
  login (username, password, jsCode) {
    return wepy.request({
      url: `${config.apiUrlPrefix}/user/login`,
      method: 'POST',
      data: {
        username: username,
        password: password,
        jsCode: jsCode
      }
    }).then(res => {
      if (res.statusCode !== 200) {
        console.log(res)
        return Promise.reject(new Error('登录失败！'))
      }
      if (!res.data.status) {
        return Promise.reject(res.data.message)
      }
      return res.data
    })
  },
  getUser () {
    return request.get('/index/getuser', config.apiUrlPrefix)
  }
}

export default userApi
