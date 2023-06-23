import axios from "axios";
import { baseURL } from "@constants/urls";

export const Api = axios.create({
    baseURL,
});
