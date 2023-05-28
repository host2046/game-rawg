import axios from "axios";
export interface FecthData<T> {
  count: number;
  results: T[];
}



export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "baec8e7cbe62405f92a0655a48721d08",
  },
});
