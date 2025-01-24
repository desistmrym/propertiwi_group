import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://propertiwigroup.co.id/cms/wp-json/wp/v2',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;