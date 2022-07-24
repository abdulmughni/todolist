import { api } from "../../service/api";
import * as types from "../constants";

export const userLogin = (data) => {
  const options = {
    url: `user/login`,
  };

  options.types = [types.LOGIN_SUCCESS, types.LOGIN_FAILURE];

  return api.loginUser(options, data);
};
