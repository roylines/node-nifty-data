const { post } = require("./api");

const globalHistory = async ({
  nifty: { contract: contractAddress },
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

const editionHistory = async ({
  nifty: { contract: contractAddress, token: tokenId },
  size = 10,
}) => {
  const body = {
    contractAddress,
    tokenId,
    current: 1,
    size,
  };

  return await post("market/nifty-secondary-market/", body);
};

const history = async ({ nifty, ...rest }) => {
  if (nifty.token) {
    return await editionHistory({ nifty, ...rest });
  } else {
    return await globalHistory({ nifty, ...rest });
  }
};

module.exports = { history };
