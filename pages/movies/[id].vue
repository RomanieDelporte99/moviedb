<template>
  <div>
    <div class="md:grid md:grid-cols-2 md:gap-4">
      <MovieButton
        severity="tertiary"
        rounded
        class="mb-4 !absolute z-[2] top-0 m-4"
        icon="pi pi-arrow-left"
        @click="navigateTo('/movies/home')"
      />
      <MovieImage
        class="block relative"
        :src="`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`"
        preview
      />
      <div class="p-4 my-4 md:my-0">
        <h2 class="text-xl font-medium">{{ movieDetail.title }}</h2>
        <div class="mt-4">
          <div class="flex items-center gap-4">
            <p class="text-sm flex items-center">
              <i class="pi pi-calendar"/>
              <span class="font-medium ml-2">{{ movieDetail.release_date }}</span>
            </p>
            <MovieTag
              class="text-xl"
              icon="pi pi-clock"
              severity="secondary"
              :value="movieDetail.runtime + ' min'"
            />
            <div class="flex">
              <i class="pi pi-star"/>
              <p class="ml-2">{{ Math.round(movieDetail.vote_average) }}/10</p>
            </div>
          </div>
          <p class="my-8">{{ movieDetail.overview }}</p>
        </div>
        <div class="flex gap-4 flex-col md:flex-row">
          <MovieCard class="p-4 w-full">
            <template #header>
              <h3 class="text-lg font-semibold">Production Companies</h3>
            </template>
            <template #content>
              <ul class="list-disc">
                <li
                  v-for="(company, index) in movieDetail.production_companies"
                  :key="index"
                  class="text-sm my-2"
                >
                  {{ company.name }}
                </li>
              </ul>
            </template>
          </MovieCard>
          <MovieCard class="p-4 w-full">
            <template #header>
              <h3 class="text-lg font-semibold">Genres</h3>
            </template>
            <template #content>
              <MovieTag
                v-for="(genre, index) in movieDetail.genres"
                :key="index"
                severity="primary"
                :value="genre.name"
                class="mr-2 mb-2 inline-block"
              />
            </template>
          </MovieCard>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const moviesStore = useMovieStore();

onMounted(async () => {
  const $route = useRoute();
  await moviesStore.fetchMovieDetails($route.params.id);
});

const movieDetail = computed(() => {
  return moviesStore.movieDetail;
});

</script>

<style scoped>
:deep(.p-image) {
  img {
    @apply w-full;
  }
}

:deep(.p-accordionheader) {
  @apply p-1;
}
</style>