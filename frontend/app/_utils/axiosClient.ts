const { default: axios } = require("axios");

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const axiosClient = axios.create({
  baseURL: apiUrl,
});

export default axiosClient;
