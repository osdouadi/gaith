const { default: axiosClient } = require("./../_utils/axiosClient");

const createSubscription = (userName, userEmail) =>
  axiosClient.post(`subscriptions`, {userName, userEmail });

export default { createSubscription };
