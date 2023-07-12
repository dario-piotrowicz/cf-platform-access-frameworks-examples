<script setup>
  const { data } = await useFetch("/api/test");
</script>

<template>
  <div>
    <p>{{ data }}</p>
    <NuxtWelcome />
  </div>
</template>
