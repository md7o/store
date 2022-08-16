<template>
  <div class="text-center pt-16">
    <h1 class="text-black text-4xl border-b-2 border-zinc-200 font-bold">
      Shoping cart
    </h1>
    <p
      v-if="!ShopingCart.length"
      class="bg-slate-300 p-8 mx-auto mt-12 text-xl"
    >
      Nothing in the Cart
    </p>
    <div class="mx-auto grid">
      <div
        class="mx-auto grid grid-cols-3 items-center border-b-2 border-zinc-200"
        v-for="item in ShopingCart"
        :key="item.id"
      >
        <div>
          <img
            width="500"
            class=""
            :src="require(`@/assets/photos/${item.img}`)"
          />
        </div>
        <div class="text-left">
          <h1 class="text-2xl font-semibold mb-3">{{ item.title }}</h1>

          <p class="mb-3">{{ item.explained }}</p>
          <p class="mb-3">
            color: {{ item.color }} || Size: EU {{ item.size }}
          </p>
          <button
            @click="remove(item.id)"
            class="hover:opacity-60 duration-500 ease-in-out"
          >
            <img src="@/assets/photos/bin.png" width="25" />
          </button>
        </div>
        <p class="text-emerald-600 font-bold text-2xl">
          SAR {{ item.price / 100 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["ShopingCart"]),
  },
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    ...mapActions(["remove"]),
  },
};
</script>

<style></style>
