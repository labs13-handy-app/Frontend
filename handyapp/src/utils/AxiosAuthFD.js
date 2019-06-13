import axios from 'axios';

export default () => {
  const token = localStorage.getItem('token');
  return axios.create({
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`
    }
  });
};
