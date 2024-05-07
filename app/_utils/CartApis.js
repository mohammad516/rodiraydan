const { default: axiosClient } = require("./axiosClient");

const addToCart = (payload) => axiosClient.post("/carts", payload);

const deleteCartItem = (id) => axiosClient.delete(`/carts/${id}`);
export default {
  addToCart,
  deleteCartItem,
};
