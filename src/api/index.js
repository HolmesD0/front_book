import axios from "axios";

const API = axios.create({ baseURL: "https://lxf3d.sse.codesandbox.io/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/posts");
export const getAll = () => API.get("/posts/all");
export const createPost = (newPost) => API.post("/posts", newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/login", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const setting = (formData) => API.post("/user/setting", formData);
export const pass = (formData) => API.post("/user/pass", formData);
export const update = (formData) => API.post("/user/update", formData);
export const enable = (formData) => API.post("/user/enable", formData);
