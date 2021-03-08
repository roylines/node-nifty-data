const axios = require("axios");
const api = axios.create({
  baseURL: "https://api.niftygateway.com/market",
});

const globalHistory = async ({ contract, size = 10, onlySales = true }) => {
  const body = {
    contractAddress: contract,
    niftyType: 1,
    current: 1,
    size,
    onlySales: onlySales.toString(),
    cancelToken: { promise: {} },
    timeout: 30000,
  };

  const ret = await api.post("nifty-history-by-type/", body);
  return ret.data.data.results;
};

const editionHistory = async ({ contract, token, size = 10 }) => {
  const body = {
    contractAddress: contract,
    tokenId: token,
    current: 1,
    size,
  };
  const ret = await api.post("nifty-secondary-market/", body);
  return ret.data.data.results;
};

const history = async ({ token, ...rest }) => {
  if (token) {
    return await editionHistory({ token, ...rest });
  } else {
    return await globalHistory(rest);
  }
};

module.exports = {
  history,
};
