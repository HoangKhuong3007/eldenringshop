import axios from "axios";

export const createOrderCheckout = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const api = "http://localhost:8080/order/create/checkout";
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
export const createOrderBuynow = async (data) => {
  const token = localStorage.getItem("token");
  try {
    const api = "http://localhost:8080/order/create/buy-now";
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
