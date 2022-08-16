import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";
import products from "../mock/products.json";
export default createStore({
  state: {
    counter: 0,
    products: [],
    ShopingCart: [],
  },
  // plugins: [createPersistedState()],
  getters: {
    products: (state) => state.products,
    ShopingCart: (state) => state.ShopingCart,
  },
  actions: {
    getProducts({ commit }) {
      commit("getProduuctData");
    },
    addToCart({ commit }, item) {
      commit("addItemToCart", item);
    },

    remove({ commit }, id) {
      commit("removeItem", id);
    },
  },
  mutations: {
    getProduuctData(state) {
      state.products = products;
    },

    addItemToCart(state, item) {
      state.ShopingCart.push({ ...item, qty: 1 });
    },

    removeItem(state, id) {
      state.ShopingCart = state.ShopingCart.filter(
        (products) => products.id !== id
      );
    },

    add(state) {
      state.counter++;
    },
    add2(state) {
      state.counter += 2;
    },
    add3(state) {
      state.counter += 3;
    },
    remove(state) {
      setTimeout(() => {
        state.counter = 0;
      }, 1000);
    },
  },
});
