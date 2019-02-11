import request from './request';
import config from '../config';

const indexApi = {
  taskList (pageIndex = 1, pageSize = 10, keyword = '') {
    return request.get(`/task?keyword=${keyword}&pageindex=${pageIndex}&pageSize=${pageSize}`, config.apiUrlPrefix);
  },

  gettechfield () {
    return request.get('/techCount', config.apiUrlPrefix);
  },
  getIndexCount() {
    return request.get('/index/getcount');
  },
  getYearsale() {
    return request.get('/index/yearsale');
  }
};

export default indexApi;
