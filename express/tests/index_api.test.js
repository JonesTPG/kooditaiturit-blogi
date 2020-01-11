const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

describe("index router", () => {
  test("can get data from test route", () => {
    api
      .get("/test")
      .expect(200)
      .expect("Content-Type", /application\/json/)
      .end((err, res) => {
        if (err) throw err;
      });
  });
});
