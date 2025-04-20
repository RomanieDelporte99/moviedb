<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>

<script setup>
onMounted(() => {
  navigateTo('/movies/home');
})
</script>
