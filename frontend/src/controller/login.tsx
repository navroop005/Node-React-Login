import { AxiosError } from "axios";
import api from "./api";
import User from "../model/user";

const loginRequest = async (user: User) => {
  try {
    const response = await api.post('/login', user.loginJSON());
    console.log('status:', response.status);
    return 'Logged in';
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log('status:', error.response?.status);
      if (error.response?.status === 401) {
        return 'Unauthorized';
      }
      return error.message;
    }
    console.error(error);
    return "Error";
  }
}

export default loginRequest