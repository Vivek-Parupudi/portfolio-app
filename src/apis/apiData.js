import axios from 'axios';

const instance = axios.create({
  baseURL:'http://localhost:8000/',
});

export default {
  getData:() =>
  instance({
    'method': 'GET',
    'url': '/projects',
  })
};