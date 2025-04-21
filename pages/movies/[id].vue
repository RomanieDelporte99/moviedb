<template>
  <div class="p-4">
    <MovieButton
        severity="secondary"
        class="mb-4"
        label="Go back to overview"
        icon="pi pi-arrow-left"
        @click="navigateTo('/movies/home')"
    />
    <div class="md:grid md:grid-cols-2 md:gap-4">
      <MovieImage
          :src="`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`"
      />
      <div class="my-4 md:my-0">
        <h2 class="text-xl font-medium">{{ movieDetail.title }}</h2>
        <div class="flex gap-4 mt-4">
          <div v-for="(genre, index) in movieDetail.genres" :key="index">
            <MovieTag
                severity="primary" :value="genre.name"
                class="hover:bg-transparent hover:cursor-pointer"
            />
          </div>
        </div>
        <div class="mt-4">
          <p class="text-sm">
            Release Date:
            <span class="font-medium">{{ movieDetail.release_date }}</span>
          </p>
          <p class="my-8">{{ movieDetail.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const moviesStore = useMovieStore();

onMounted(async () => {
  const $route = useRoute()
  await moviesStore.fetchMovieDetails($route.params.id);
})

const movieDetail = computed(() => {
  return moviesStore.movieDetail
})
</script>