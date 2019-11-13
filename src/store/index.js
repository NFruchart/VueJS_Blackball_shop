import Vue from "vue";
import Vuex from "vuex";
import productService from "../services/productService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    errors: [],
    cart: []
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    },
    CREATE_PRODUCT(state, products) {
      state.products = [products, ...state.products];
    },
    DELETE_PRODUCT(state, products) {
      state.products = [products, ...state.products];
    },
    GET_PRODUCTS_ERROR(state, error) {
      state.errors = [error, ...state.errors];
    },
    UPDATE_CART(state, cart) {
      state.cart = cart;
    },
    REMOVE_ONE_FOR_CART(state, cart) {
      state.cart = cart;
    },
    REMOVE_PRODUCT_FOR_CART(state, cart) {
      state.cart = cart;
    },
    GET_ARTICLES_IN_CART(state, cart) {
      state.cart = cart;
    }
  },
  actions: {
    getProducts({ commit }) {
      productService
        .getProducts()
        .then(res => {
          commit("GET_PRODUCTS", res.data);
        })
        .catch(err => {
          const error = {
            date: new Date(),
            message: `failed to retrieve products : ${err.message}`
          };
          commit("GET_PRODUCTS_ERROR", error);
        });
    },
    getArticlesInCart({ commit }) {
      let articlesInCard = productService.getArticlesInCart();
      commit("GET_ARTICLES_IN_CART", articlesInCard);
    },
    createProduct({ commit }, product) {
      productService.createProduct(product).then(() => {
        commit("CREATE_PRODUCT", product);
        location.reload(true);
      });
    },
    deleteProduct({ commit }, product) {
      productService.deleteProduct(product).then(() => {
        commit("DELETE_PRODUCT", product);
        location.reload(true);
      });
    },
    updateCart({ commit }, product) {
      const cartWithProducts = productService.addToCart(product);
      commit("UPDATE_CART", cartWithProducts);
    },
    removeOneToCart({ commit }, product) {
      const removeProduct = productService.removeOneForCart(product);
      commit("REMOVE_ONE_FOR_CART", removeProduct);
    },
    removeProductToCart({ commit }, product) {
      const removeProductToCart = productService.removeProductToCart(product);
      commit("REMOVE_PRODUCT_FOR_CART", removeProductToCart);
    }
  },
  getters: {
    getCart(state) {
      if (!state.cart) {
        return localStorage.getItem("vuex-commerce-cart");
      }
      return state.cart;
    },
    getStateProducts(state) {
      return state.products;
    }
  }
});
