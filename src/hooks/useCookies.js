import Cookies from "js-cookie";

const setCookie = (key, value) => {
  Cookies.set(key, value);
};

const deleteCookie = (cookie) => {
  Cookies.remove(cookie);
};

const getCookie = (key) => {
  return Cookies.get(key);
};

export { setCookie, deleteCookie, getCookie };
