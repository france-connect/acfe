import axios from "axios";

let baseURL = "";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:8080";
} else {
  baseURL = "http://api.example.com";
}

export const HTTP = axios.create({
  baseURL: baseURL
});
