<template>
  <div class="product">
    <h1 class="text-roseBlue text-center text-3xl my-16 pt-52">
      APPLE AirPods Max Wireless Bluetooth Noise-Cancelling Headphones - Silver
    </h1>
    <div class="xl:flex mx-auto justify-evenly text-center">
      <div class="Header">
        <img
          class="bg-gray-300 xl:border-2 border-8 border-gray-400 xl:mx-0 mx-auto"
          :src="require(`@/assets/photos/${image}`)"
          width="700"
          alt="appleHeader"
        />
      </div>
      <div class="mt-32">
        <p class="text-3xl text-gray-400 line-through">
          befor: {{ before / 10 }}$
        </p>
        <p class="text-5xl my-3 text-emerald-500 mb-10">Now: {{ now / 10 }}$</p>
        <div class="flex justify-center my-5">
          <button
            class="text-3xl bg-blue-600 hover:bg-blue-500 transition ease-in-out text-white px-5"
            @click="
              if (this.num > 1) {
                this.num--;
              }
            "
          >
            -
          </button>
          <p class="text-3xl bg-white px-5">{{ num }}</p>
          <button
            class="text-3xl bg-blue-600 hover:bg-blue-500 transition ease-in-out text-white px-5"
            @click="
              if (this.num < 3) {
                this.num++;
              }
            "
          >
            +
          </button>
        </div>
        <p class="mt-3 text-red-600 text-2xl" v-if="this.num >= 3">
          Last Quantity
        </p>
        <div class="flex justify-center">
          <p
            class="cursor-pointer my-5 mx-5 p-8 rounded-full text-transparent"
            v-for="item in switcher"
            :key="item.colorId"
            :style="{ backgroundColor: item.color }"
            @click="updateColor(item.setImg)"
          ></p>
        </div>
        <div class="flex justify-center">
          <p class="mx-5 text-2xl" v-for="item in switcher" :key="item.colorId">
            {{ item.title }}
          </p>
        </div>
        <!-- /////// -->
        <button
          @click="addToCart(item)"
          class="bg-gray-800 hover:bg-gray-700 transition ease-in-out text-white px-28 py-3 text-3xl m-5"
        >
          Add to cart
        </button>
        <div>
          <h1 class="text-2xl mt-5 xl:text-left">Product Details</h1>
          <ul class="text-left text-xl mt-8 list-disc">
            <li>Regular fit</li>
            <li>Supportive heel clip</li>
            <li>Durable rubber outsole with targeted lug pattern</li>
            <li>Floatride Energy Foam</li>
            <li>Imported</li>
          </ul>
        </div>
        <!-- ///////////// -->
      </div>
    </div>
    <div>
      <form
        class="grid justify-center mt-20 pb-32"
        action=""
        @submit="validateForm"
      >
        <div
          class="error bg-red-200 my-5 p-2"
          v-for="error in formErrors"
          :key="error"
        >
          {{ error }}
        </div>
        <input
          class="p-3 bg-slate-300 px-8 text-2xl text-center rounded-2xl"
          type="text"
          v-model="comment"
          placeholder="comment here"
        />
        <input
          class="bg-blue-500 p-2 cursor-pointer rounded-2xl mt-5 text-white"
          type="submit"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopProduct",

  data() {
    return {
      num: 1,
      formErrors: [],
      comment: null,
      isHidden: false,
      hovered: false,
      currentSrc: 0,
      image: "bootBlack.png",
      before: 7999,
      now: 5999,
      switcher: [
        {
          colorId: 1,
          color: "darkblue",
          setImg: "bootBlue.png",
        },
        {
          colorId: 2,
          color: "black",
          setImg: "bootBlack.png",
        },
      ],
    };
  },
  methods: {
    updateColor(setImg) {
      this.image = setImg;
    },

    validateForm(e) {
      this.formErrors = [];

      if (!this.comment) {
        this.formErrors.push("Comment can't be empty");
      }

      e.preventDefault();
    },
  },
};
</script>

<style></style>
