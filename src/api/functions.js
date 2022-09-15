import axios from "axios";
export const getParamsFromUrl = (url) => {
  return url
    .slice(1)
    .split("&")
    .reduce((initial, current) => {
      const [title, value] = current.split("=");
      initial[title] = value;
      return initial;
    }, {});
};

export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem("params"));
    if (params) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log("Error setting auth", error);
  }
};
