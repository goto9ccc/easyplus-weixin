import request from './request';

const coptdApi = {
  getCoptdList (page = 1, limit = 10, td002 = '') {
    return request.get(`/coptd/list?td002=${td002}&page=${page}&limit=${limit}`);
  },
  getCoptdSearch (page = 1, limit = 10, td002 = '', td001 = '', td005 = '', td006 = '', ma003 = '', td016 = '', startYmd = '', endYmd = '', td013 = '') {
    return request.get(`/coptd/list?td002=${td002}&page=${page}&limit=${limit}&td001=${td001}&td005=${td005}&td005=${td006}&ma003=${ma003}&td016=${td016}&startYmd=${startYmd}&endYmd=${endYmd}&td013=${td013}`);
  }
};
export default coptdApi;
