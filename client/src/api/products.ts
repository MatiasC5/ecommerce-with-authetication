import axios from "./axios.ts";

export const getAllProducts = () => axios.get("/");

export const getCategories = () => axios.get("/products/categories");
