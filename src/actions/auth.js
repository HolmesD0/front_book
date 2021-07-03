import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    
    window.location.reload();
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    await api.signUp(formData);

    router.push("/");
    window.location.reload();
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const setting = (formData, router) => async (dispatch) => {
  try {
    await api.setting(formData);

    router.push("/");
    window.location.reload();
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const pass = (formData, router) => async (dispatch) => {
  try {
    await api.pass(formData);

    router.push("/");
    window.location.reload();
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const enable = (formData, router) => async (dispatch) => {
  try {
    await api.enable(formData);

    router.push("/");
    window.location.reload();
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};

export const update = (formData) => async (dispatch) => {
  try {
    await api.update(formData);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};
