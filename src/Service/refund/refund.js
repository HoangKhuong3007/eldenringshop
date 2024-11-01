import axios from "axios";

export const getAllRefund = async () => {
  const token = localStorage.getItem("token");
  try {
    const api = "http://localhost:8080/refund/get-all-refund-requests";
    const res = await axios.get(api, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data.result;
  } catch (error) {
    return error;
  }
};
