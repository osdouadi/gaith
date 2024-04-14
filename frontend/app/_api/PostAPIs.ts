const { default: axiosClient } = require("./../_utils/axiosClient");

const getPaginatedPosts = (page: number, limit: number) =>
  axiosClient.get(`posts?page=${page}&limit=${limit}`);

const getPostById = (id: number) => axiosClient.get(`posts/${id}`);

const addPost = () => axiosClient.post(`posts`);
const deletePost = (id: number) => axiosClient.delete(`posts/${id}`);


const postLike = (id: number, userId: string) =>
  axiosClient.post(`posts/${id}/toggle-like`, userId);




export default {
  getPaginatedPosts,
  getPostById,
  postLike,
  deletePost,
  addPost,
};
