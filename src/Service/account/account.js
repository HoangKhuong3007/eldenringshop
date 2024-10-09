import axios from "axios";

export const CreateUser = async (data) => {
    try {
        const api = "http://localhost:8080/users"
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
    return res.data;
  } catch (error) {
    console.log(error);  
    return error.response.data;    
  }
}
