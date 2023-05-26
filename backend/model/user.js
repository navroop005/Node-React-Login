const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const nameRegex = /^[a-zA-Z '.-]+$/;
const passwordRegex = /^[a-zA-Z0-9_!@#$%^&*()_+{}:";'<>,.?\|]{5,}$/;

class User {
  constructor(name, email, password) {
    this.name = name ? name.trim().toUpperCase() : undefined;
    this.email = email.trim().toLowerCase();
    this.password = password.trim();
  }

  matchCredentials(other) {
    return this.email === other.email && this.password === other.password;
  }

  validate(verifyName = true) {
    if (this.email && emailRegex.test(this.email)) {
      // console.log("valid email");
    } else {
      // console.log("invalid email");
      return "Invalid email";
    }
    if ((this.name || !verifyName) && nameRegex.test(this.name)) {
      // console.log("valid name");
    } else {
      // console.log("invalid name");
      return "Invalid name";
    }
    if (this.password && passwordRegex.test(this.password)) {
      // console.log("valid password");
    } else {
      // console.log("invalid password");
      return "Invalid password";
    }
    return "valid";
  }
}

module.exports = User