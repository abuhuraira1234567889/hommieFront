import axios from "axios";
console.log("Localstorage : ", localStorage.getItem("token"));
const client = axios.create({
  baseURL: "http://localhost:4000/",
});

export { client };
