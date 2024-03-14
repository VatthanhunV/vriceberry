<template>
  <div>
    <img :src="logo" :width="imgWidth" />
    <h5 v-if="user">Hello {{ user }}.</h5>
    <h5 v-else>Hello {{ id }}.</h5>
    <h5>User ID : {{ id }}</h5>
  </div>
</template>

<script lang="ts" setup>
const user = "Vatthanhun";
const id = "1234567";
const logo = "/logos.jpg";
const imgWidth = 75;
</script>

<style></style>
