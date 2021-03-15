const {
  getEditionHistory,
  getExhibitions,
  getGlobalHistory,
  getProfile,
  getSitewideActivity,
} = require("./index");

describe("nifty-data", () => {
  describe("activity", () => {
    it("can get all (defaults)", async () => {
      const activity = await getSitewideActivity({});
      expect(activity.length).toEqual(30);
    });
    it("can get all (non defaults)", async () => {
      const activity = await getSitewideActivity({
        size: 5,
        current: 1,
        timeout: 30000,
      });
      expect(activity.length).toEqual(5);
    });
  });
  describe("history", () => {
    it("can get global (all)", async () => {
      const q = {
        contractAddress: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
      };

      const history = await getGlobalHistory(q);
      expect(history.length).toBeGreaterThan(0);
    });
    it("can get global (sales only)", async () => {
      const q = {
        contractAddress: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
        salesOnly: true,
      };

      const history = await getGlobalHistory(q);
      expect(history.length).toBeGreaterThan(0);
    });
    it("can get local", async () => {
      const q = {
        contractAddress: "0xe9be55ffedb6c2a2f3f8eac31c60d7f122f79958",
        tokenId: "11400012315",
        size: 1,
      };

      const history = await getEditionHistory(q);
      expect(history.length).toBeGreaterThan(0);
    });
  });

  describe("profile", () => {
    it("can get profile", async () => {
      const q = {
        profileUrl: "trevorjonesart",
      };

      const profile = await getProfile(q);
      expect(profile.userProfileAndNifties.nifties.length).toBeGreaterThan(0);
    });
  });

  describe("getExhibitions", () => {
    it("can get", async () => {
      const exhibitions = await getExhibitions({});
      expect(exhibitions.length).toBeGreaterThan(0);
    });
  });
});
