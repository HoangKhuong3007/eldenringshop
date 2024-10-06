import axios from "axios";

export const CreateUser = async (data) => {
    try {
        const api = "http://localhost:8080/create-user"
        const res = await axios.post(api, data, {
            headers: {
              "Content-Type": "application/json",
            },
          });
          console.log(res.data)
        return res.data

    } catch (error) {
      console.log(error);
        // Check if the error response has a message indicating email already exists
        if (error.response && error.response.data.code === 1001) {
          throw new Error("User existed");
        }
        if (error.response && error.response.data.code === 1003) {
          throw new Error("Invalid username");
        }
        if (error.response && error.response.data.code === 1004) {
          throw new Error("Invalid password");
        }
        if (error.response && error.response.data.code === 1005) {
          throw new Error("Email existed");
        }
        throw error; // Re-throw other errors
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
    return res.data;
  } catch (error) {
    console.log(error);
    
    if (error.response && error.response.data.code === 1006) {
      throw new Error("user not exist");
    }if (error.response && error.response.data.code === 666) {
      throw new Error("wrong password");
    }
    throw error; 
  }
}


