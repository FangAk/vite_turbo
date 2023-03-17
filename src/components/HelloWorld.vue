
<script setup>
import { ref } from "vue";
import axios from "axios";
import { Snackbar } from "@varlet/ui";

defineProps({
  msg: String,
});

const count = ref(0);
const files = ref([]);
const handleAfterRead = (file) => {
  const files = new FormData();
  files.append("file", file.file);
  axios.post("http://localhost:5000/images", files).then((res) => {
    console.log(res);
    createSnackbar("success");
  });
};
const createSnackbar = (type) => {
  Snackbar[type]("上传成功");
  if (type === "loading") {
    setTimeout(() => {
      Snackbar.success("加载成功");
    }, 2000);
  }
};
const uploadfile = (e) => {
  let data = new FormData();
  data.append("file", e.target.files[0]);
  axios.post("http://localhost:5000/images", data).then((res) => {
    console.log(res);
    createSnackbar("success");
  });
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <var-button loading type="info" loading-type="rect"> 加载状态 </var-button>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
  <var-uploader v-model="files" @after-read="handleAfterRead" />
  <input @change="uploadfile" type="file" multiple />
</template>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
