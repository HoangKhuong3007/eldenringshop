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
        return error
        console.log(error)
    }
}