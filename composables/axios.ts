import axios, { type AxiosInstance } from "axios";

const config = useRuntimeConfig()

const instance: AxiosInstance = axios.create({
  baseURL: config.public.apiBase,
});

export default instance;