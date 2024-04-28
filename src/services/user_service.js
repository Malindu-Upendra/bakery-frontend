import axios from "axios";

var apiUrl = "http://localhost:3500/"

const headers = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};

export async function loginUser(obj) {
  return await axios.post(apiUrl + 'auth', obj).then(data => data);
}

export async function getLoggedInUser() {
  return await axios
    .get(apiUrl + "users/logged-in-user", { headers })
    .then((data) => data);
}

export async function getAllTheUsers(obj) {
  return await axios
    .post(apiUrl + "users/get-all-users", obj, { headers })
    .then((data) => data);
}

export async function createUser(obj) {
  return await axios.post(apiUrl + 'users', obj, { headers }).then(data => data);
}
