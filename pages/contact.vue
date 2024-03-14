<template>
  <div>
    <h2>Contact</h2>
    <NuxtLink to="/">Home</NuxtLink> <br /><br />
    <button @click="plusCount">This count : {{ count }}</button>
  </div>
</template>

<script lang="ts" setup>
const count = ref(0);
const plusCount = () => {
  count.value++;
};
</script>

<style></style>
