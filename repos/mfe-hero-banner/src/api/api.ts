import { URL_BASE } from "@constants/url-base";
import axios from "axios";

export const api = axios.create({
  baseURL: URL_BASE,
});
