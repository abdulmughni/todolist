import { api } from "../../service/api";
import * as types from "../constants";

export const getTasksList = () => {
  const options = {
    url: `task`,
  };

  options.types = [types.GET_TASKS_LIST_SUCCESS, types.GET_TASKS_LIST_FAILURE];

  return api.get(options);
};

export const getTaskDetail = (id) => {
  const options = { url: `task/${id}` };

  options.types = [types.GET_TASK_BY_ID_SUCCESS, types.GET_TASK_BY_ID_FAILURE];

  return api.get(options);
};

export const postTask = (data) => {
  const options = { url: `task` };

  options.types = [types.POST_TASKS_SUCCESS, types.POST_TASKS_FAILURE];

  return api.post(options, data);
};

export const updateTask = (id, data) => {
  const options = { url: `task/${id}` };

  options.types = [types.UPDATE_TASKS_SUCCESS, types.UPDATE_TASKS_FAILURE];

  return api.put(options, data);
};

export const deleteTask = (id) => {
  const options = { url: `task/${id}` };

  options.types = [types.DELETE_TASKS_SUCCESS, types.DELETE_TASKS_FAILURE];

  return api.delete(options);
};
