const expect = require('chai').expect;
const { getAll, getById } = require('../userService/get');
const { post } = require('../userService/post');
const { deleteUser } = require('../userService/delete');
const User = require("../userService/user");

describe("Post and deletion tests", () => {
  
  it("Should save a new user through the post endpoint", done => {
    const newUser = new User(
      "testEmail",
      "testFirstName",
      "testLastName",
      "testTitle",
      new Date(),
      "testPhoneNumber",
      "testImageUrl",
      "testThumbnailUrl"
    );
      
    post(newUser).then(savedUser => {
      expect(savedUser.id).not.undefined;
      done();
    })
  }).timeout(20000);

  it("Should delete a user.", () => {
    const testName = "deleteTest_email";
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
      
    return post(newUser).then(savedUser => {
      expect(savedUser.id).not.undefined;
      return savedUser;
    })
    .then((savedUser) => {
      return deleteUser(savedUser.id).then(() => savedUser);
    })
    .then((savedUser) => {
      
      return getById(savedUser.id)
        .catch(err => expect(err.response.status).to.eq(404))
    })
  }).timeout(2000);
});