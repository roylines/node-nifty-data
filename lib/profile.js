const { get } = require("./api");

const getProfile = async ({ profileUrl }) => {
  return await get(
    `user/profile-and-offchain-nifties-by-url/?profile_url=${profileUrl}`
  );
};

module.exports = { getProfile };
