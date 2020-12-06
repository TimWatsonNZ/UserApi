const expect = require('chai').expect;
const { post } = require('../userService/post');
const { update } = require('../userService/update');
const User = require('../userService/user');

describe('User Api Tests', () => {
  it("Should update a user", () => {
    const testName = "update";
    const newUser = new User(
      `${testName}_email`,
      `${testName}_firstName`,
      `${testName}_lastName`,
      `${testName}_title`,
      new Date(),
      `${testName}_phoneNumber`,
      `${testName}_imageUrl`,
      `${testName}_thumbnailUrl`,
    );

    const changedFirstName = "changed_firstName";

    return post(newUser)
      .then(savedUser => {
        expect(savedUser.firstName).to.eq(newUser.firstName);
        return savedUser;
      })
      .then(savedUser => {
        return update({ ...savedUser, firstName: changedFirstName });
      })
      .then(updatedUser => {
        expect(updatedUser.firstName).to.eq(changedFirstName);
      });
  });
});