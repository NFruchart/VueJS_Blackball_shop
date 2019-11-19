import axios from "axios";

let baseURL = "http://localhost:3000";

export default {
  async getProducts() {
    return await axios.get(`${baseURL}/products`);
  },
  async createProduct(cue) {
    return await axios.post(`${baseURL}/products`, cue);
  },
  async deleteProduct(cue) {
    return await axios.delete(`${baseURL}/products/${cue.id}`, cue);
  },
  getArticlesInCart() {
    let articlesInCart = JSON.parse(localStorage.getItem("vuex-commerce-cart"));
    return articlesInCart;
  },
  addToCart(product) {
    let cartInLocalStorage =
      JSON.parse(localStorage.getItem("vuex-commerce-cart")) || {};
    let products = cartInLocalStorage.products || [];
    // test si même produit
    if (products.some(p => p.id === product.id)) {
      products = products.map(p => {
        if (p.id === product.id) {
          p.quantity += 1;
        }
        return p;
      });
    } else {
      product["quantity"] = 1;
      products.push(product);
    }
    cartInLocalStorage.products = products;
    localStorage.setItem(
      "vuex-commerce-cart",
      JSON.stringify(cartInLocalStorage)
    );
    return cartInLocalStorage;
  },
  removeOneForCart(product) {
    let cartInLocalStorage =
      JSON.parse(localStorage.getItem("vuex-commerce-cart")) || {};
    let products = cartInLocalStorage.products || [];
    const index = products.findIndex(p => p.id === product.id);
    products[index].quantity -= 1;
    if (products[index].quantity === 0) {
      products.splice(index, 1);
    }
    cartInLocalStorage.products = products;
    localStorage.setItem(
      "vuex-commerce-cart",
      JSON.stringify(cartInLocalStorage)
    );
    return cartInLocalStorage;
  },
  removeProductToCart(product) {
    let cartInLocalStorage =
      JSON.parse(localStorage.getItem("vuex-commerce-cart")) || {};
    let products = cartInLocalStorage.products || [];
    const index = products.findIndex(p => p.id === product.id);
    products.splice(index, 1);
    cartInLocalStorage.products = products;
    localStorage.setItem(
      "vuex-commerce-cart",
      JSON.stringify(cartInLocalStorage)
    );
    return cartInLocalStorage;
  }
};
