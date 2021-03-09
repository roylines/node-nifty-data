const history = require("./lib/history");
const profile = require("./lib/profile");

module.exports = {
  ...history,
  ...profile,
};
