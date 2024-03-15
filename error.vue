<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
  <div>
    <div v-if="error?.statusCode === 404">
      <p>Can not found this url.</p>
    </div>
    <h2>{{ error?.statusCode }}</h2>
    <p>{{ error?.message }}</p>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
