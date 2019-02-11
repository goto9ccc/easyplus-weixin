import request from './request';

const copmaApi = {
  getCopmaList (page = 1, limit = 10, ma002 = '') {
    return request.get(`/copma/list?ma002=${ma002}&page=${page}&limit=${limit}`);
  },

  getCopmaWxList (page = 1, limit = 100, ma017 = '14') {
    return request.get(`/copma/list?ma017=${ma017}&page=${page}&limit=${limit}`);
  }
};
export default copmaApi;
