import axios from "axios";

export const baseURL = "http://localhost:8000";

const client = axios.create({ baseURL });

export default client;
