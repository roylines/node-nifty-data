const { post } = require("./api");

const getSitewideActivity = async ({
  size = 30,
  current = 1,
  timeout = 30000,
}) => {
  const body = {
    current,
    size,
    cancelToken: { promise: {} },
    timeout,
  };

  return await post("market/all-data/", body);
};

module.exports = { getSitewideActivity };
