import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movie', () => {
  const movies = ref([]);
  const movieDetail = ref({});
  const popularMovies = ref([]);

  const fetchPopularMovies = async (page: number) => {
    try {
      const { $movieDBApi } = useNuxtApp();
      const data = $movieDBApi(`popular?language=en-US&page=${page}`);

      popularMovies.value = data.results;
      return popularMovies.value;
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  const fetchMovies = async (page: number) => {
    try {
      const { $movieDBApi } = useNuxtApp();
      const data = await $movieDBApi(`now_playing?language=en-US&page=${page}`);

      movies.value = data.results;
      return movies.value;
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  const fetchMovieDetails = (movieId: number) => {
    try {
      const { $movieDBApi } = useNuxtApp();
      const data = $movieDBApi(`${movieId}?language=en-US`);

      movieDetail.value = data;
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  return {
    movies,
    movieDetail,
    popularMovies,
    fetchMovies,
    fetchMovieDetails,
    fetchPopularMovies
  };
});