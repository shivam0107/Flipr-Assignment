import axios from "axios";
import { endpoints } from "../apis";
import toast from "react-hot-toast";

const { LOGIN_API, SIGNUP_API , GET_ALL_USERS } = endpoints;

export function signUp(data, navigate) {
  try {
    
    const res = axios.post(SIGNUP_API , data);

    if(!res.data.success){
    }

  } catch (error) {
    
  }
}

export function login(email, password, navigate) {
  try {
    
  } catch (error) {
    
  }
}
