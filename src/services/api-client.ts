import axios, { AxiosRequestConfig } from "axios";
export interface FecthData<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosinstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "baec8e7cbe62405f92a0655a48721d08",
  },
});
class ApiClient<T> {
  endPoint: string;
  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  getAll = (config: AxiosRequestConfig) => {
    return axiosinstance
      .get<FecthData<T>>(this.endPoint, config)
      .then((res) => res.data);
  };
}

export default ApiClient;
