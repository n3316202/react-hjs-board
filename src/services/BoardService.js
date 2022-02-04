import http from './http-common';

const getAll = () => {
  return http.get('/rboard/list');
};

const get = (id) => {
  return http.get(`/rboard/${id}`);
};

const write = (data) => {
  return http.post(`/rboard/write`, data);
};

const update = (id, data) => {
  return http.put(`/rboard/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/rboard/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = (title) => {
  return http.get(`/tutorials?title=${title}`);
};

const getPagingList = (path = '/rboard/list2', search = '') => {
  return http.get(path + search);
};

export default {
  getAll,
  get,
  write,
  update,
  remove,
  removeAll,
  findByTitle,
  getPagingList,
};
