const { default: axiosClient } = require("./../_utils/axiosClient");

const getPaginatedPosts = (page:number, limit:number) => axiosClient.get(`posts?page=${page}&limit=${limit}`);

export default { getPaginatedPosts };
