import wepy from 'wepy'
import userApi from '../api/userApi'
import request from '../api/request'

export default class Auth extends wepy.mixin {
  noLogin () {
    wepy.showModal({
      title: '',
      content: '您还没有登录，请登录!',
      showCancel: false
    }).then(() => {
      wepy.redirectTo({
        url: '/pages/login'
      })
    })
  }

  noAuth () {
    wepy.showModal({
      title: '',
      content: '无权限访问此功能，请联系管理员',
      showCancel: false
    }).then(() => {
      wepy.redirectTo({
        url: '/pages/index'
      })
    })
  }

  auth () {
    if (request.getToken()) {
      return Promise.resolve(request.getToken())
    }
    return wepy.login().then(res => {
      console.log(res)
      return res.code
    }).then(code => {
      return userApi.token(code)
    }).then(res => {
      console.log(res)
      request.setToken(res.token)
      return res.token
    }).catch(error => {
      this.noLogin();
      let p = Promise.reject(new Error(error));
      return p;
    })
  }
}
