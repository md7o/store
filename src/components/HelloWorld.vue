<template>
  <div class="bg-zinc-200">
    <MainHeader />
    <swiper
      class="md:mt-40 mt-48"
      :centeredSlides="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
    >
      <swiper-slide class="grid md:grid-cols-2 grid-cols-1"
        ><img src="@/assets/photos/adidas.png" width="1300" />
        <img src="@/assets/photos/nike.png" width="1300" />
      </swiper-slide>
      <swiper-slide class="grid md:grid-cols-2 grid-cols-1">
        <img src="@/assets/photos/reebok.png" width="1300" />
        <img src="@/assets/photos/tommy.png" width="1300" />
      </swiper-slide>
      <swiper-slide class="grid md:grid-cols-2 grid-cols-1">
        <img src="@/assets/photos/puma.png" width="1300" />
        <img src="@/assets/photos/boss.png" width="1300" />
      </swiper-slide>
      ...
    </swiper>
    <div>
      <h1 class="text-center text-5xl m-16">SPORT BRANDS</h1>
    </div>
    <div class="xl:flex justify-center grid grid-cols-2 bg-gray-900">
      <ul
        v-for="brand in brands"
        :key="brand"
        class="flex justify-center text-2xl"
      >
        <li
          class="cursor-pointer bg-gray-900 hover:bg-gray-800 transition xl:p-24 p-8 text-white"
        >
          <img
            class="mx-auto xl:w-80 w-40"
            :src="require(`@/assets/photos/${brand.img}`)"
          />
        </li>
      </ul>
    </div>

    <div class="fillter flex justify-center mt-12">
      <div
        @click="fillter = !fillter"
        href="#"
        class="cursor-pointer mx-5 bg-blue-600 hover:bg-blue-500 rounded-2xl p-3 text-white mt-5 text-center w-24"
      >
        <img
          class="mx-auto"
          src="@/assets/photos/filter.png"
          alt="filter"
          width="50"
        />
      </div>

      <div
        @click="fillterCollors = !fillterCollors"
        href="#"
        class="cursor-pointer mx-5 bg-blue-600 hover:bg-blue-500 rounded-2xl p-3 text-white mt-5 text-center w-24"
      >
        <img
          class="mx-auto"
          src="@/assets/photos/colour.png"
          alt="filter"
          width="50"
        />
      </div>
    </div>
    <div class="flex justify-center mt-12">
      <Transition name="slide-fade"
        ><div
          v-if="fillter"
          class="cursor-pointer mx-5 bg-white rounded-2xl p-3 text-black text-center w-60"
        >
          <form class="">
            <input type="checkbox" />
            <label for="checkbox"> Sport </label>
            <input type="checkbox" />
            <label for="checkbox"> casual </label>
            <input type="checkbox" />
            <label for="checkbox"> Leather </label>
          </form>
        </div></Transition
      >
      <Transition name="slide-fade">
        <div
          v-if="fillterCollors"
          class="cursor-pointer mx-5 bg-white rounded-2xl p-3 text-black text-center w-24"
        >
          <form class="">
            <input type="checkbox" />
            <label for="checkbox"> Sport </label>
            <input type="checkbox" />
            <label for="checkbox"> casual </label>
            <input type="checkbox" />
            <label for="checkbox"> Leather </label>
          </form>
        </div></Transition
      >
    </div>

    <!-- Reebok -->
    <div class="grid xl:grid-cols-3 grid-cols-2 mx-auto justify-center">
      <div
        v-for="item in products"
        :key="item.id"
        class="mx-auto xl:my-16 my-5 p-5 bg-white"
      >
        <!-- 1 -->
        <div class="text-center hover:opacity-80 transition ease-in-out">
          <router-link to="about"
            ><img
              class="mx-auto w-96"
              :src="require(`@/assets/photos/${item.img}`)"
            />

            <h1 class="text-xl text-roseBlue mb-2 hover:underline">
              {{ item.title }}
            </h1>

            <div class="text-2xl">${{ item.price / 100 }}</div></router-link
          >
          <div class="">
            <button
              @click="addToCart(item)"
              class="bg-blue-600 hover:bg-blue-500 rounded-2xl p-3 text-white mt-5"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Reebok -->
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import products from "../mock/products.json";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  name: "HelloWorld",
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },

  data() {
    return {
      products,
      activeTap: "1",
      fillter: false,
      fillterCollors: false,
      Cart: 0,
      isHidden: false,
      hovered: false,
      navbar: ["Headphones", "Display"],

      brands: [
        { img: "nikeLogo.png" },
        { img: "ALogo.png" },
        { img: "Puma_Logo.png" },
        { img: "reebokLogo.png" },
      ],

      img_src: [
        "https://cdn-icons-png.flaticon.com/512/7020/7020787.png",
        "https://cdn-icons-png.flaticon.com/512/7020/7020788.png",
      ],

      currentSrc: 0,
    };
  },
  computed: {
    ...mapGetters(["products"]),
  },
  methods: {
    ...mapActions(["getProducts", "addToCart"]),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.2s ease-in;
}

.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
