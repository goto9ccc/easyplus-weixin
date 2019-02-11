import request from './request';

const echartsApi = {
  getTopTen () {
    return request.get(`/chart/topten`);
  },
  getInvmaSale () {
    return request.get(`/chart/invmasale`);
  }
};
export default echartsApi;
