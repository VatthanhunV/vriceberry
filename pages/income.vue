<template>
  <div>
    <h2>Income</h2>
    <el-space spacer=" | ">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <NuxtLink to="/">Home</NuxtLink>
      <el-button type="primary" round @click="showData">Check Data</el-button>
      <el-button type="success" round @click="contact">Contact</el-button>
    </el-space>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from "element-plus";
const showData = () => {
  ElMessage({
    message: "Congrats, This is your data.",
    type: "success",
  });
};
const contact = () => {
  navigateTo("/contact");
};
definePageMeta({
  layout: "ic-layout",
});
</script>

<style></style>
