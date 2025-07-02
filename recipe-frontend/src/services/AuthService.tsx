
import axios from "axios";
 const apiBase = "http://localhost:5196/api/recipes";
export const registerUser = async (user: { username: string, email: string, password: string }) => {
  const token = localStorage.getItem("token");
  await axios.post(`${apiBase}/account/register`, user, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
