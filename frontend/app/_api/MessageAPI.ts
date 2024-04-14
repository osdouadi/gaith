const { default: axiosClient } = require("./../_utils/axiosClient");

const createMessage = (fullName, email, phone, message) =>
  axiosClient.post(`messages`, { fullName, email, phone, message });

export default { createMessage };
