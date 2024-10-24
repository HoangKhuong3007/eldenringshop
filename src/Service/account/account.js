import axios from "axios";

export const signupService = async (data) => {
  try {
    const api = "http://localhost:8080/users/sign-up";
    const res = await axios.post(api, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const loginService = async (data) => {
  try {
    const api = "http://localhost:8080/auth/login";
    const res = await axios.post(api, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.setItem("token", res.data.result.token);
    localStorage.setItem("user", JSON.stringify(res.data.result.user));
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const logoutService = async (data) => {
  try {
    const api = "http://localhost:8080/auth/logout";
    const res = await axios.post(api, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return res.data;
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
};
export const authenticateService = async (data) => {
  try {
    const api = "http://localhost:8080/auth/introspect";
    const res = await axios.post(api, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
export const forgetPasswordService = async (data) => {
  try {
    const api = "http://localhost:8080/users/forget-password";
    const res = await axios.post(api, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
}