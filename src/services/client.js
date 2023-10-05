import axios from "axios";
console.log("Localstorage : ", localStorage.getItem("token"));
const client = axios.create({
  baseURL: "http://34.209.54.179:4000/",
});

export { client };
