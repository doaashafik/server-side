import axios from "axios";
import { SuccessHandler,RequestHandler, ErrorHandler } from "../Interceptors";
export const Instance = axios.create({
  baseURL: process.env.BASE_URL,
});
Instance.interceptors.response.use(
  (response) => SuccessHandler(response),
  (error) => ErrorHandler(error)
);
Instance.interceptors.request.use(
  (request) => RequestHandler(request),
);
