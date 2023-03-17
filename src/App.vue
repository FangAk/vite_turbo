
<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";
const data = ref([]);
const show = ref(false);
const getData = async () => {
  const response = await axios.post("/api/pshTown");
  console.log();
  console.log(eval(response.data.d));
  data.value = eval(response.data.d);
  console.log(data);
  show.value = true;
};
getData();
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <button @click="getData">点我请求</button>
  <HelloWorld msg="Vite + Vue" />
  <router-view />
  <var-snackbar v-model:show="show"> {{ data }} </var-snackbar>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
