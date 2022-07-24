import axios from "axios";
import { getToken } from "../components/common/reuseFunctions";
const baseURL = "https://api-nodejs-todolist.herokuapp.com/";

const api = {
  loginUser:
    (options, params = null) =>
    async (dispatch) => {
      const [success, failure] = options.types;
      const promise = (resolve, reject) => {
        axios({
          method: "POST",
          url: `${baseURL}${options.url}`,
          data: params,
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            resolve(
              dispatch({
                type: success,
                payload: res.data,
              })
            );
          })
          .catch((err) => {
            reject(
              dispatch({
                type: failure,
                payload: err,
              })
            );
          });
      };

      return new Promise(promise);
    },
  get: (options) => async (dispatch) => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      return axios({
        method: "GET",
        url: `${baseURL}${options.url}`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
        .then((res) => {
          resolve(
            dispatch({
              type: success,
              payload: res.data,
            })
          );
        })
        .catch((err) => {
          reject(
            dispatch({
              type: failure,
              payload: err,
            })
          );
        });
    };

    return new Promise(promise);
  },
  post:
    (options, params = null) =>
    async (dispatch) => {
      const [success, failure] = options.types;
      const promise = (resolve, reject) => {
        axios({
          method: "POST",
          url: `${baseURL}${options.url}`,
          data: params,
          headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            resolve(
              dispatch({
                type: success,
                payload: res.data,
              })
            );
          })
          .catch((err) => {
            reject(
              dispatch({
                type: failure,
                payload: err,
              })
            );
          });
      };

      return new Promise(promise);
    },
  put:
    (options, params = null) =>
    async (dispatch) => {
      const [success, failure] = options.types;
      const promise = (resolve, reject) => {
        axios({
          method: "PUT",
          url: `${baseURL}${options.url}`,
          data: params,
          headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            resolve(
              dispatch({
                type: success,
                payload: res.data,
              })
            );
          })
          .catch((err) => {
            reject(
              dispatch({
                type: failure,
                payload: err,
              })
            );
          });
      };

      return new Promise(promise);
    },
  patch:
    (options, params = null) =>
    async (dispatch) => {
      const [success, failure] = options.types;
      const promise = (resolve, reject) => {
        axios({
          method: "PATCH",
          url: `${baseURL}${options.url}`,
          data: params,
          headers: {
            Authorization: `Bearer ${getToken()}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            resolve(
              dispatch({
                type: success,
                payload: res.data,
              })
            );
          })
          .catch((err) => {
            reject(
              dispatch({
                type: failure,
                payload: err,
              })
            );
          });
      };

      return new Promise(promise);
    },
  delete: (options) => async (dispatch) => {
    const [success, failure] = options.types;
    const promise = (resolve, reject) => {
      axios({
        method: "DELETE",
        url: `${baseURL}${options.url}`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
        .then((res) => {
          resolve(
            dispatch({
              type: success,
              payload: res.data,
            })
          );
        })
        .catch((err) => {
          reject(
            dispatch({
              type: failure,
              payload: err,
            })
          );
        });
    };

    return new Promise(promise);
  },
};

export { api };
