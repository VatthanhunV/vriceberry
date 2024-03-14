<template>
  <div>
    <h2>Income</h2>
    <NuxtLink to="/">Home</NuxtLink> <br /><br />
    <button @click="showData">Check Data</button>
    <button @click="contact">Contact</button>
  </div>
</template>

<script lang="ts" setup>
const showData = () => {
  alert("This is your data.");
};
const contact = () => {
  navigateTo("/contact");
};
</script>

<style></style>
