const { get } = require("./api");

const getExhibitions = async () => {
  return await get(`exhibition/open/`);
};

module.exports = { getExhibitions };
