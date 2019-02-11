import request from './request';

const moctaApi = {
  getMoctaList (page = 1, limit = 10, ta002 = '') {
    return request.get(`/mocta/list?ta002=${ta002}&page=${page}&limit=${limit}`);
  },
  getMoctaSearch(page = 1, limit = 10, ta002 = '', ta001 = '', ta034 = '', ta035 = '', ta011 = '', startymd = '', endymd = '') {
    return request.get(`/mocta/list?ta002=${ta002}&page=${page}&limit=${limit}&ta001=${ta001}&ta034=${ta034}&ta035=${ta035}&ta011=${ta011}&startymd=${startymd}&endymd=${endymd}`);
  },
  getMoctaDetail(ta001 = '', ta002 = '') {
    return request.get(`/sfcta/sfclist?ta002=${ta002}&ta001=${ta001}`);
  },
  getMoctaCoptdDetail(td001 = '', td002 = '', td003 = '') {
    return request.get(`/sfcta/coptdsfctalist?td001=${td001}&td002=${td002}&td003=${td003}`);
  }
};
export default moctaApi;
