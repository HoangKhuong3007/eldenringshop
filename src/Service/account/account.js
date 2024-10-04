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
        if (error.response && error.response.data === "Email already exists") {
            throw new Error("Email is already in use");
        }
        throw error; // Re-throw other errors
    }
}