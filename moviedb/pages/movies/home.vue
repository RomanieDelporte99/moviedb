<template>
  <div class="flex items-center justify-center bg-neutral-100 h-14">
    <h2>Popular movies</h2>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <div class="p-4 flex" v-for="(movie, index) in movies" :key="index">

      <MovieCard class="flex flex-col border border-neutral-4OO rounded-xl shadow-md w-full">
        <template #header>
          <img
              :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" alt="Movie Poster"
              class="rounded-t-xl h-40 w-full object-cover">
        </template>

        <template #content>
          <div class="p-4 flex flex-col flex-1">
            <h2 class="text-lg font-bold ">{{ movie.title }}</h2>
            <p>{{ movie.overview }}</p>
          </div>
        </template>

        <template #footer>
          <div class="p-4 bottom-0">
            <MovieButton
                class="bg-red-4 00 rounded-lg p-2"
                label="See detail"
                @click="navigateTo(`/movies/${movie.id}`)"
            />
          </div>
        </template>
      </MovieCard>

    </div>
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

