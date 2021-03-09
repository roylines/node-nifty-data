const { post } = require("./api");

const getGlobalHistory = async ({
  contractAddress,
  size = 10,
  onlySales = true,
}) => {
  const body = {
    contractAddress,
    onlySales: onlySales.toString(),
    niftyType: 1,
    current: 1,
    size,
  };

  return await post("market/nifty-history-by-type/", body);
};

const getEditionHistory = async ({ contractAddress, tokenId, size = 10 }) => {
  const body = {
    contractAddress,
    tokenId,
    current: 1,
    size,
  };

  return await post("market/nifty-secondary-market/", body);
};

module.exports = { getGlobalHistory, getEditionHistory };
