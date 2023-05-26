import signupRequest from "../controller/signup";
import User from "./user";

const signup = async (name: string, email: string, password: string) => {
  let user = new User(name, email, password);
  return await signupRequest(user);
}

export { signup };
