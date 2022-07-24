import * as types from "../constants";

export const tasksReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_TASKS_LIST_SUCCESS:
      return { ...state, tasksListRes: action.payload };
    case types.GET_TASKS_LIST_FAILURE:
      return { ...state, tasksListRes: action.payload };

    case types.GET_TASK_BY_ID_SUCCESS:
      return { ...state, taskDetailRes: action.payload };
    case types.GET_TASK_BY_ID_FAILURE:
      return { ...state, taskDetailRes: action.payload };

    case types.UPDATE_TASKS_SUCCESS:
      return { ...state, taskUpdateRes: action.payload };
    case types.UPDATE_TASKS_FAILURE:
      return { ...state, taskUpdateRes: action.payload };

    case types.POST_TASKS_SUCCESS:
      return { ...state, taskPostRes: action.payload };
    case types.POST_TASKS_FAILURE:
      return { ...state, taskPostRes: action.payload };

    case types.DELETE_TASKS_SUCCESS:
      return { ...state, taskDeleteRes: action.payload };
    case types.DELETE_TASKS_FAILURE:
      return { ...state, taskDeleteRes: action.payload };

    default:
      return state;
  }
};
