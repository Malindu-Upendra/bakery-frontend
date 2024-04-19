import axios from "axios";

var apiUrl = "http://localhost:3500/"

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export async function registerUser(obj) {
  return await axios.post(apiUrl + 'users', obj).then(data => data);
}

export async function loginUser(obj) {
  return await axios.post(apiUrl + 'auth', obj).then(data => data);
}

export async function getLoggedInUser() {
  return await axios
    .get(apiUrl + "users/logged-in-user", { headers })
    .then((data) => data);
}