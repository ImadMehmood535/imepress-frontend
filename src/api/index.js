import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = process.env.REACT_APP_BASE_URL_SERVER;

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(
  function (config) {
    let token;
    if (Cookies.get("token")) {
      token = Cookies.get("token");
    }
    config.headers.authorization = `${token}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Image
API.uploadImage = (data) => {
  return API.post("upload", data);
};

//admin
API.loginUser = (data) => {
  return API.post("admin/login", data);
};

API.changePassword = (data) => {
  return API.patch("admin/change-password", data);
};

API.updateProfile = (data) => {
  return API.patch("admin", data);
};

//brand

API.getAllBrands = () => {
  return API.get("brand");
};

API.createBrand = (data) => {
  return API.post("brand", data);
};

API.updateBrand = (data, id) => {
  return API.patch(`brand/${id}`, data);
};

//Category

API.getAllCategories = () => {
  return API.get("category/all");
};

API.getCategorirs = () => {
  return API.get("category");
};

API.createCategory = (data) => {
  return API.post("category", data);
};

API.updateCategory = (data, id) => {
  return API.patch(`category/${id}`, data);
};

//Sub category

API.getAllSubCategory = () => {
  return API.get("sub-category");
};

API.createSubCategory = (data) => {
  return API.post("sub-category", data);
};

API.updateSubCategory = (data, id) => {
  return API.patch(`sub-category/${id}`, data);
};

// blogs

API.getAllBlogs = () => {
  return API.get("blog");
};

API.getSingleBlog = (slug) => {
  return API.get(`blog/${slug}`);
};

API.createBlogs = (data) => {
  return API.post("blog", data);
};

API.updateBlogs = (data, id) => {
  return API.patch(`blog/${id}`, data);
};

API.deleteBlogs = (id) => {
  return API.delete(`blog/${id}`);
};

//users

API.getAllUsers = () => {
  return API.get("user");
};

API.updateUserByAdmin = (data) => {
  return API.patch(`user`, data);
};

API.registerUser = (data) => {
  return API.post("user", data);
};
API.logInUser = (data) => {
  return API.post("user/login", data);
};

//order

API.getOrders = () => {
  return API.get("order");
};

// product

API.getProducts = () => {
  return API.get("product");
};

API.getProductsQueryParams = (type) => {
  return API.get(`product/query?type=${type}`);
};

API.addProduct = (data) => {
  return API.post("product", data);
};

API.updateProduct = (id, data) => {
  return API.patch(`product/${id}`, data);
};

API.getSingleProduct = (slug) => {
  return API.get(`product/${slug}`);
};

API.getProductByCategoryID = (id) => {
  return API.get(`product/by-category?categoryId=${id}`);
};

//newsletter
API.registerNewsLetter = (data) => {
  return API.post("newsletter", data);
};

//contactForm
API.contactForm = (data) => {
  return API.post("contactform", data);
};

//currency

API.getConvertedCurrency = (code) => {
  return API.get(`currency/${new Date()}?code=${code}`);
};

export { API };
