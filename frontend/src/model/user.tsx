class User {
  constructor(public name: string | undefined, public email: string, public password: string) { }

  loginJSON() {
    return { email: this.email, password: this.password }
  }

  signupJSON() {
    return { name: this.name, email: this.email, password: this.password }
  }
}

export default User