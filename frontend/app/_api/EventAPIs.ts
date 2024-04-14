const { default: axiosClient } = require("./../_utils/axiosClient");

const getPaginatedEvents = (page: number, limit: number) =>
  axiosClient.get(`events?page=${page}&limit=${limit}`);

export default { getPaginatedEvents };
