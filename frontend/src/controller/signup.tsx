import { AxiosError } from "axios";
import api from "./api";
import User from "../model/user";

const signupRequest = async (user: User) => {
  try {
    const response = await api.post('/signup', user.signupJSON());
    console.log('status:', response.status);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log('status:', error.response?.status);
      if (error.response?.data) {
        return error.response.data;
      }
      return error.message;
    }
    console.error(error);
    return "Error";
  }
}

export default signupRequest