import wepy from 'wepy'
import config from '../config.js'

let token = ''

const request = {
  get (url, prefix = config.apiUrlPrefix) {
    return wepy.request({
      url: `${prefix}${url}`,
      method: 'GET',
      header: {
        token
      }
    }).then(res => res.data)
  },
  post (url, data, prefix = config.apiUrlPrefix) {
    return wepy.request({
      url: `${prefix}${url}`,
      method: 'POST',
      header: {
        token
      },
      data: data
    }).then(res => res.data)
  },
  setToken (_token) {
    token = _token
  },
  getToken () {
    return token
  }
}

export default request
