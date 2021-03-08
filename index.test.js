const { history } = require("./index");

describe("nifty-data", () => {
  describe("history", () => {
    it("can get global", async () => {
      const q = {
        contract: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
      };

      const ret = await history(q);
    });
    it("can get local", async () => {
      const q = {
        contract: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
        token: "11400012315",
      };

      const ret = await history(q);
    });
  });
});
