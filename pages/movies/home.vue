<template>
  <div class="flex items-center justify-center bg-neutral-100 h-14">
    <h2>Popular movies</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
    <MovieCard
        v-for="(movie, index) in movies" :key="index"
        class="border border-neutral-4OO rounded-xl shadow-md w-full"
    >
      <template #header>
        <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster"
            class="rounded-t-xl h-40 w-full object-cover"
        >
      </template>

      <template #content>
        <div class="flex flex-col h-full">
          <h2 class="text-lg font-bold ">{{ movie.title }}</h2>
          <p>{{ movie.overview }}</p>
        </div>
      </template>

      <template #footer>
        <div class="mt-auto">
          <MovieButton
              severity="tertiary"
              class="bg-red-200 rounded-lg p-2"
              label="See detail"
              icon="pi pi-arrow-right"
              @click="navigateTo(`/movies/${movie.id}`)"
          />
        </div>
      </template>
    </MovieCard>

  </div>
</template>
<script setup>
const moviesStore = useMovieStore();

onMounted(async () => {
  await moviesStore.fetchMovies();
})

const movies = computed(() => {
  console.log(moviesStore.movies)
  return moviesStore.movies;
})


</script>


<style scoped>

</style>