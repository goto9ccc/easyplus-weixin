import request from './request';

const messageApi = {
  getList(pageIndex = 1, pageSize = 10, keyword = '') {
    return request.get(`/message/list?page=${pageIndex}&limit=${pageSize}`);
  },
  getDetail(id = -1) {
    return request.get(`/message/list/${id}`);
  },
  readerDetail(id = -1) {
    return request.get(`/message/update/${id}`);
  }
};

export default messageApi;
