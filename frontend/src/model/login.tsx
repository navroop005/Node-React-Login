import loginRequest from "../controller/login"
import User from "./user";

const login = async (email: string, password: string) => {
  let user = new User(undefined, email, password);
  return await loginRequest(user);
}

export { login }