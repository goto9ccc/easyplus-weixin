import request from './request';

const contactsApi = {
  getContactList(pageIndex = 1, pageSize = 10, keyword = '') {
    return request.get(`/cmsmv/list?name=${keyword}&page=${pageIndex}&limit=${pageSize}`);
  }
};

export default contactsApi;
