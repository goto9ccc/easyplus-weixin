import request from './request';
import config from '../config';

const exportIndexApi = {
  taskList (pageIndex = 1, pageSize = 10, keyword = '') {
    return request.get(`/task?keyword=${keyword}&pageindex=${pageIndex}&pageSize=${pageSize}`, config.apiUrlPrefix);
  },

  gettechfield () {
    return request.get('/techCount', config.apiUrlPrefix);
  },
  getIndexCount() {
    return request.get('/exportsale/count');
  },
  getYearsale() {
    return request.get('/index/yearsale');
  }
};

export default exportIndexApi;
