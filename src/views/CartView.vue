<template>
  <MainHeader />
  <div class="2xl:flex 2xl:justify-evenly mt-52 m-96 2xl:mx-52 mx-auto">
    <ShopingCart class="h-auto" />
    <PayBag class="h-96 pt-16 mb-52" />
  </div>
  <FotterShop class="2xl:pt-0 pt-60" />
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import ShopingCart from "@/components/ShopingCart.vue";
import PayBag from "@/components/PayBag.vue";
import FotterShop from "@/components/FotterShop.vue";
export default {
  name: "CartView",
  components: {
    MainHeader,
    ShopingCart,
    PayBag,
    FotterShop,
  },
};
</script>

<style></style>
