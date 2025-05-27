<template>
  <div
      class="flex flex-row md:flex-col md:min-w-72 py-4 pl-4 items-center md:items-start border-r border-r-neutral-200"
  >
    <div class="flex items-center gap-2 mb-8 pt-4">
      <div class="bg-red-500 p-2 rounded-xl w-10 flex items-center justify-center">
        <i class="pi pi-video text-2xl text-white"/>
      </div>
      <div class="flex flex-col">
        <h2 class="font-medium text-xl text-center hidden md:block">MovieHub</h2>
        <p class="text-neutral-500">Your cinema</p>
      </div>
    </div>
    <div
        v-for="(menu, index) in menuItems" :key="index"
        class="my-2 mr-4 md:mr-0 flex gap-2 items-center w-full cursor-pointer"
        :class="{'text-red-500': $route.path.includes(menu.route)}"
        @click="navigateTo(menu.route)"
    >
      <i :class="menu.icon"/>
      <div>
        <p class="font-bold text-lg">{{ menu.title }}</p>
        <p class="text-neutral-600 text-sm">{{ menu.subtitle }}</p>
      </div>
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
      subtitle: 'Browse all movies',
      icon: 'pi pi-home',
      route: '/movies/home'
    },
    {
      title: 'Popular Movies',
      subtitle: 'Discover popular movies',
      icon: 'pi pi-book',
      route: '/movies/popular'
    }
  ]
})
</script>


<style scoped>

</style>