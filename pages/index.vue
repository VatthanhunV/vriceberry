<template>
  <div>
    <NuxtLink to="/contact">Contact</NuxtLink> <br />
    <NuxtLink to="/income">Income</NuxtLink>
    <p>{{ $config.apiSecret }}</p>
    <p>{{ $config.public.apiBase }}</p>

    <img src="/assets/plan.jpg" sizes="100vw sm:50vw md:400px" loading="lazy" />
    <!-- <NuxtPicture src="~/assets/plan.jpg" /> -->
  </div>
</template>

<script lang="ts" setup>
// const config = useRuntimeConfig()
</script>

<style></style>
