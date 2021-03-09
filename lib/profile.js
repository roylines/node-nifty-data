const { get } = require("./api");

const profile = async ({ profile }) => {
  //https://api.niftygateway.com//user/profile-and-offchain-nifties-by-url/?profile_url=royters
  return await get(
    `user/profile-and-offchain-nifties-by-url/?profile_url=${profile}`
  );
};

module.exports = { profile };
