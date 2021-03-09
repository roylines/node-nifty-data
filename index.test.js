const { history } = require("./index");

describe("nifty-data", () => {
  describe("history", () => {
    it("can get global (all)", async () => {
      const q = {
        nifty: {
          contract: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
        },
      };

      const ret = await history(q);
      expect(ret.length).toBeGreaterThan(0);
    });
    it("can get global (sales only)", async () => {
      const q = {
        nifty: {
          contract: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
        },
        salesOnly: true,
      };

      const ret = await history(q);
      expect(ret.length).toBeGreaterThan(0);
    });
    it("can get local", async () => {
      const q = {
        nifty: {
          contract: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
          token: "11400012315",
        },
        size: 1,
      };

      const ret = await history(q);
      expect(ret.length).toBeGreaterThan(0);
    });
  });
});
