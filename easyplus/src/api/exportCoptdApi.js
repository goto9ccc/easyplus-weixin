import request from './request';

const exportCoptdApi = {
  getCoptdList (page = 1, limit = 10, tc003 = '', td016 = '') {
    return request.get(`/coptd/listexport?tc003=${tc003}&page=${page}&limit=${limit}&td016=${td016}`);
  }
};
export default exportCoptdApi;
