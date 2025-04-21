<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
    <MovieCard
        v-for="(movie, index) in movies" :key="index"
        class="border border-neutral-4OO rounded-xl shadow-md w-full cursor-pointer"
        @click="navigateTo(`/movies/${movie.id}`)"
    >
      <template #header>
        <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster"
            class="rounded-t-xl h-40 w-full object-cover"
        >
      </template>

      <template #content>
        <div class="flex justify-between h-16">
          <h2 class="text-lg font-bold max-w-52">{{ movie.title }}</h2>
        </div>
      </template>

      <template #footer>
        <div class="flex justify-end w-full">
          <p class="mr-2">{{ movie.vote_count }}</p>
          <i class="pi pi-star"/>
        </div>
      </template>
    </MovieCard>

  </div>
</template>
<script setup>
definePageMeta({
  layout: 'layout'
})
const moviesStore = useMovieStore();

onMounted(async () => {
  await moviesStore.fetchMovies();
})

const movies = computed(() => {
  return moviesStore.movies;
})
</script>

