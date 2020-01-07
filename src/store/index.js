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
      if (state.products !== products) {
        state.products = products;
      }
    },
    CREATE_PRODUCT(state, product) {
      state.products.push(product);
    },
    DELETE_PRODUCT(state, product) {
      state.products = state.products.filter(
        currentProduct => currentProduct.id !== product.id
      );
    },
    UPDATE_PRODUCT(state, product) {
      state.products = state.products.filter(
        currentProduct => currentProduct.id === product.id
      );
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
    async getProducts({ commit }) {
      try {
        const res = await productService.getProducts();
        commit("GET_PRODUCTS", res);
      } catch (err) {
        const error = {
          date: new Date(),
          message: `failed to retrieve products : ${err.message}`
        };
        commit("GET_PRODUCTS_ERROR", error);
      }
    },
    getArticlesInCart({ commit }) {
      let articlesInCard = productService.getArticlesInCart();
      commit("GET_ARTICLES_IN_CART", articlesInCard);
    },
    createProduct({ commit }, product) {
      productService.createProduct(product);
      commit("CREATE_PRODUCT", product);
    },
    deleteProduct({ commit }, product) {
      productService.deleteProduct(product);
      commit("DELETE_PRODUCT", product);
    },
    async updateProduct({ commit }, product) {
      const res = await productService.updateProduct(product);
      commit("UPDATE_PRODUCT", res.data.data);
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
