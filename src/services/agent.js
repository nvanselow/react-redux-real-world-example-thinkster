import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import { API_ROOT } from '../constants/urls';

const superagent = superagentPromise(_superagent, global.Promise);

const responseBody = res => res.body;

const requests = {
  get: url => superagent.get(`${API_ROOT}${url}`).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).then(responseBody),
};

const Articles = {
  all: page => requests.get('/articles?limit=10'),
};

const Auth = {
  login: (email, password) =>
    requests.post('/users/login', { user: { email, password } }),
};

export default {
  Articles,
  Auth,
};
