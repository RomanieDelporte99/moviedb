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
        <div class="flex gap-4 mt-4">
          <div v-for="(genre, index) in movieDetail.genres" :key="index">
            <MovieTag
                severity="primary" :value="genre.name"
                class="hover:bg-transparent hover:cursor-pointer"
            />
          </div>
        </div>
        <div class="mt-4">
          <div class="flex items-center">
            <p class="text-sm flex items-center">
              <i
                  class="pi pi-calendar"
              />
              <span class="font-medium ml-2">{{ movieDetail.release_date }}</span>
            </p>
            <MovieTag
                class="text-xl ml-2"
                icon="pi pi-hourglass"
                severity="secondary"
                :value="movieDetail.runtime + ' min'"
            />
          </div>
          <p class="my-8">{{ movieDetail.overview }}</p>
        </div>
        <MovieTabs value="0">
          <MovieTabList>
            <MovieTab value="0">Production Companies</MovieTab>
            <MovieTab value="1">Header II</MovieTab>
            <MovieTab value="2">Header III</MovieTab>
          </MovieTabList>
          <MovieTabPanels>
            <MovieTabPanel
                v-for="(company, index) in movieDetail.production_companies" :value="index"
            >
              {{ company }}
            </MovieTabPanel>
          </MovieTabPanels>
        </MovieTabs>

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


<style scoped>
:deep(.p-image) {
  img {
    @apply w-full;
  }
}
</style>