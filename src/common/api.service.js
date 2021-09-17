import axios from "axios";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL;
    axios.defaults.headers.common["token"] = "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv";
  },

  get(resource, slug = "") {
    return axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(error);
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },
};

export default ApiService;
