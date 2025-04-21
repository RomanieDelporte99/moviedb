<template>
  <div
      class="flex flex-row md:flex-col md:min-w-72 py-4 pl-4 items-center md:items-start border-r border-r-neutral-200"
  >
    <div class="flex items-center gap-2">
      <i class="pi pi-video text-2xl text-red-500"/>
      <h2 class="font-medium my-8 text-xl text-center hidden md:block">Movies.</h2>
    </div>
    <div
        v-for="(menu, index) in menuItems" :key="index"
        class="my-2 mr-4 md:mr-0 flex gap-2 items-center w-full cursor-pointer"
        :class="{'text-red-500': $route.path.includes(menu.route)}"
        @click="navigateTo(menu.route)"
    >
      <i :class="menu.icon"/>
      <p>{{ menu.title }}</p>
      <span v-if="$route.path.includes(menu.route)" class=" ml-auto bg-red-500 w-1 h-5"></span>
    </div>
  </div>
</template>

<script setup>
const $route = useRoute()

const menuItems = computed(() => {
  return [
    {
      title: 'All Movies',
      icon: 'pi pi-home',
      route: '/movies/home'
    },
    {
      title: 'Popular Movies',
      icon: 'pi pi-book',
      route: '/movies/popular'
    }
  ]
})
</script>


<style scoped>

</style>