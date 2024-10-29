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
export const createUserAdmin = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const api = "http://localhost:8080/users/admin/create";
    const res = await axios.post(api, data, {
      headers: {
        Authorization: `Bearer ${token}`,
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
    const api = "http://localhost:8080/users/forgot-password";
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
export const verifyEmailForget = async (data) => {
  try {
    const api = "http://localhost:8080/auth/verify-forgot-password";
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
export const resetPassword = async (data) => {
  try {
    const api = "http://localhost:8080/users/reset-password";
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
export const getAccountList = async () => {
  const token = localStorage.getItem("token");
  try {
    const api = "http://localhost:8080/users";
    const res = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
