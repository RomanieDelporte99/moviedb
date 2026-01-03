<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      <MovieCard
        v-for="(movie, index) in popularMovies"
        :key="index"
        class="border border-neutral-4OO rounded-xl shadow-md w-full cursor-pointer"
        @click="navigateTo(`/movies/${movie.id}`)"
      >
        <template #header>
          <img
            :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
            alt="Movie Poster"
            class="rounded-t-xl h-full w-full object-cover"
          >
        </template>

        <template #content>
          <div class="flex justify-between">
            <h2 class="text-lg font-bold max-w-52">{{ movie.title }}</h2>
            <div>
              <MovieTag
                severity="secondary"
                :value="movie.vote_average.toFixed(1)"
              />
            </div>
          </div>
        </template>
      </MovieCard>
      <PagePaginator @change-page="onHandleChangePage($event)"/>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'layout'
});
const moviesStore = useMovieStore();
const currentPage = ref(1);

onMounted(async () => {
  await moviesStore.fetchPopularMovies(currentPage.value);
});

const popularMovies = computed(() => {
  return moviesStore.popularMovies;
});

const onHandleChangePage = (event) => {
  currentPage.value = event + 1;
  moviesStore.fetchPopularMovies(event);
};
</script>