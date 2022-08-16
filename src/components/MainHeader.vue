<template>
  <div class="header fixed top-0 bg-gray-900 w-full z-50">
    <transition name="sideBar">
      <div v-if="sideBar" class="fixed z-50 top-0 bg-slate-900 h-full w-full">
        <button @click="sideBar = !sideBar" class="text-white text-3xl m-8">
          X
        </button>
        <ul
          v-for="bar in bars"
          :key="bar"
          class="flex flex-col justify-center items-center hover:bg-gray-800 duration-100 cursor-pointer text-4xl text-white"
        >
          <li>{{ bar }}</li>
        </ul>
      </div></transition
    >
    <nav class="flex justify-around items-center p-5">
      <router-link to="/"
        ><div>
          <h1 class="text-4xl text-white xl:pl-28">MODERN</h1>
        </div></router-link
      >
      <div class="lg:flex justify-center items-center hidden">
        <input
          class="bg-slate-300 p-2 text-2xl indent-3 outline-none"
          placeholder=" Search..."
          type="search"
          name="search"
          id=""
        />
        <a
          href="#"
          class="bg-blue-600 hover:bg-blue-500 text-2xl p-2 text-center text-white"
        >
          Search</a
        >
      </div>
      <router-link to="cart"
        ><div class="flex text-2xl xl:mr-36">
          <img
            class="cursor-pointer"
            src="@/assets/photos/shopping-cart.png"
            width="40"
          />
          <div
            class="bg-roseBlue flex justify-center items-center text-white rounded-full px-3"
          >
            {{ totalQty }}
          </div>
        </div></router-link
      >
      <div
        @click="sideBar = !sideBar"
        class="text-3xl lg:hidden block text-white cursor-pointer"
      >
        <img src="@/assets/photos/menu.png" width="30" />
      </div>
    </nav>
    <hr class="w-5/6 mx-auto" />
    <div class="m-5 flex justify-center">
      <ul
        v-for="bar in bars"
        :key="bar"
        class="cursor-pointer lg:block hidden items-center text-white text-2xl"
      >
        <li class="hover:bg-gray-800 duration-100 px-7">{{ bar }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "MainHeader",
  computed: {
    ...mapGetters(["ShopingCart"]),
    totalQty() {
      return this.ShopingCart.reduce((a, b) => a + b.qty, 0);
    },
  },
  data() {
    return {
      sideBar: null,
      bars: ["MEN", "WOMEN", "KIDS", "BRANDS", "SPORTS", "ACCESSORIES"],
    };
  },
};
</script>
<style>
.sideBar-enter-active,
.sideBar-leave-active {
  transition: 0.7s ease all;
}

.sideBar-enter-from,
.sideBar-leave-to {
  transform: translateX(100%);
}

.sideBar-enter-to {
  transform: translateX(0);
}
</style>
