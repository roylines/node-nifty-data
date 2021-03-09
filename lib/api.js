const axios = require("axios");
const toCamelCase = require("camelcase-keys");

const api = axios.create({
  baseURL: "https://api.niftygateway.com/market",
});

const post = async (path, body) => {
  const ret = await api.post(path, body);
  const results = ret.data.data.results;
  return toCamelCase(results);
};

module.exports = { post };
