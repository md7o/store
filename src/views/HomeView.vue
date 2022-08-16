<template>
  <div class="home">
    <MainHeader />
    <HelloWorld />
    <FotterShop />
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import HelloWorld from "@/components/HelloWorld.vue";
import FotterShop from "@/components/FotterShop.vue";

export default {
  name: "HomeView",
  components: {
    MainHeader,
    HelloWorld,
    FotterShop,
  },
};
</script>

<style></style>
