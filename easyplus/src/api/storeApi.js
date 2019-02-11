import request from './request';

const storeApi = {
  getStoreList (page = 1, limit = 10, mb002 = '') {
    return request.get(`/invmc/list?mb002=${mb002}&page=${page}&limit=${limit}`);
  },
  getStoreType () {
    return request.get(`/invmc/stores`);
  },
  getStoreSearch (page = 1, limit = 10, mb002 = '', mb003 = '', mc002 = '') {
    return request.get(`/invmc/list?mb002=${mb002}&page=${page}&limit=${limit}&mb003=${mb003}&mc002=${mc002}`);
  }
};
export default storeApi;
