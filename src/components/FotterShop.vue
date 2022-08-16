<template>
  <center>
    <div
      class="bg-gray-900 text-white py-24 grid xl:grid-cols-3 grid-cols-2 justify-center items-center"
    >
      <!-- ========================= -->

      <div>
        <ul>
          <li class="bg-DeadBlue text-mblue text-3xl font-extrabold">
            About us
          </li>

          <li
            v-for="about in abouts"
            :key="about"
            class="bg-DeadBlue text-mblue text-2xl mt-8"
          >
            <a href="#" class="cursor-pointer hover:underline">
              {{ about }}
              <hr class="w-3/12 border-mblue mt-5" />
            </a>
          </li>
        </ul>
      </div>

      <!-- ========================= -->

      <div>
        <ul>
          <li class="bg-DeadBlue text-mblue text-3xl font-extrabold">
            programs
          </li>

          <li
            v-for="program in programs"
            :key="program"
            class="bg-DeadBlue text-mblue text-2xl mt-8"
          >
            <a href="#" class="cursor-pointer hover:underline">
              {{ program }}
              <hr class="w-3/12 border-mblue mt-5" />
            </a>
          </li>
        </ul>
      </div>
      <div class="text-5xl hidden xl:block xl:mx-auto">
        <a href="#">MODERN</a>
      </div>
    </div>
  </center>
</template>

<script>
export default {
  name: "FotterShop",
  data() {
    return {
      abouts: ["home", "contant", "about"],
      programs: ["archivestorm", "files", "DataBase"],
    };
  },
};
</script>

<style></style>
