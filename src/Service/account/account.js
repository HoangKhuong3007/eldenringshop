import axios from "axios";

export const CreateUser = async (data) => {
    try {
        const api = "http://localhost:8080/users/signup"
        const res = await axios.post(api, data, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(res.data)
        return res.data

    } catch (error) {
      console.log(error);
      return error.response.data;    
    }   
}

export const LoginUser = async (data) => {
  try {
    const api = "http://localhost:8080/auth/login";
    const res = await axios.post(api, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    localStorage.setItem("token", res.data.result.token);
    localStorage.setItem("username", res.data.result.username);
    localStorage.setItem("fullName", res.data.result.fullName);
    localStorage.setItem("role", res.data.result.role);
    return res.data;
  } catch (error) {
    console.log(error);  
    return error.response.data;    
  }
}
