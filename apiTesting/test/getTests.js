const expect = require('chai').expect;
const { getAll, getById } = require('../userService/get');

describe('User Api Tests', () => {
  describe('Get endpoint testing', () => {

    it("Should return a user using the firstName filter", done => {
      getAll({ firstName: "Tim" }).then(result => {
        expect(result.length).to.eq(1);
        done();
      });
    });

    it("Should return a user using the lastName filter", done => {
      getAll({ lastName: "Watson" }).then(result => {
        expect(result.length).to.eq(1);
        done();
      });
    });

    it("Should return only 1 user when using the limit=1 filter", done => {
      getAll({ limit: 1 }).then(result => {
        expect(result.length).to.eq(1);
        done();
      });
    });

    it("Should return only 2 users when using the limit=2 filter", done => {
      getAll({ limit: 2 }).then(result => {
        expect(result.length).to.eq(2);
        done();
      });
    });

    it("Should return a user by id", done => {
      getAll().then(result => {
        const first = result[0];

        return getById(first.id)
          .then(resultById => {
            expect(resultById.name).to.eq(first.name);
            done();
          })
        });
    });
  });
});