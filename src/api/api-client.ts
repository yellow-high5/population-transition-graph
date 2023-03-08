import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_RESAS_API_ENDPOINT,
});
axiosInstance.defaults.headers.common['X-API-KEY'] = process.env.NEXT_PUBLIC_RESAS_API_KEY;
axiosInstance.interceptors.response.use((res) => res.data);

export const apiClient = axiosInstance;

export const apiParallelClient = <T>(urls: string[]) => {
  return Promise.all<T>(urls.map((url) => apiClient(url)));
};
