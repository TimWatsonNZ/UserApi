class User {
  constructor(email, firstName, lastName, title, dateOfBirth, phoneNumber, imageUrl, thumbnailUrl) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.dateOfBirth = dateOfBirth; 
    this.phoneNumber = phoneNumber; 
    this.imageUrl = imageUrl; 
    this.thumbnailUrl = thumbnailUrl;
  }
}

module.exports = User;