<template>
  <div class="grid">
    <div class="border-2 border-zinc-200 text-black text-3xl p-12">
      <form action="" class="mt-14 text-center">
        <input
          class="bg-slate-200 p-4 text-2xl indent-3 outline-none"
          placeholder="Enter the Coupon code"
          type="text"
          name="Coupon"
          id=""
        />
        <a
          href="#"
          class="bg-blue-600 mb-16 2xl:w-2/3 w-52 mx-auto hover:bg-blue-500 2xl:inline-block block text-2xl p-1 text-center text-white"
        >
          Add</a
        >
      </form>
      <div class="flex justify-between">
        <p class="mb-10 text-xl">Subtotal ({{ totalQty }} items)</p>
        <p class="text-xl">SAR {{ totalPrice / 100 }}</p>
      </div>
      <div class="flex justify-between">
        <h1 class="text-3xl font-semibold">Total:</h1>
        <h1 class="text-emerald-600 font-semibold text-3xl">
          SAR {{ totalPrice / 100 }}
        </h1>
      </div>
    </div>
    <div class="mt-32">
      <div
        v-for="help in helpfully"
        :key="help"
        class="grid bg-slate-300 p-8 hover:bg-slate-400 duration-100 cursor-pointer text-2xl"
      >
        <a href="#"> {{ help }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["ShopingCart"]),
    totalPrice() {
      return this.ShopingCart.reduce((a, b) => a + b.qty * b.price, 0);
    },
    totalQty() {
      return this.ShopingCart.reduce((a, b) => a + b.qty, 0);
    },
  },
  data() {
    return {
      helpfully: ["Need Help?", "Return", "Delivery Informaiton"],
    };
  },
};
</script>

<style></style>
