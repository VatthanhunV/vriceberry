<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <NuxtImg :src="logo" :width="imgWidth" />
    </el-col>
    <el-col :span="6">
      <h1>VRiceberry</h1>
    </el-col>
    <el-col :span="6">
      <p class="red">{{ appConfig.title }} {{ appConfig.subTitle }}</p>
    </el-col>
    <el-col :span="6">
      <h5 v-if="user">Hello {{ user }}.</h5>
      <h5 v-else>Hello {{ id }}.</h5>
      <h5>User ID : {{ id }}</h5>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
const user = "Vatthanhun";
const id = "1234567";
const logo = "/logos.jpg";
const imgWidth = 75;
const appConfig = useAppConfig();
</script>

<style scoped>
.red {
  color: red;
}
</style>
