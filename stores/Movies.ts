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
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  const fetchMovies = (page: number) => {
    try {
      const { $movieDBApi } = useNuxtApp();
      const data = $movieDBApi(`now_playing?language=en-US&page=${page}`);

      movies.value = data.results;
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };
  const fetchMovieDetails = (movieId: number) => {
    try {
      const { $movieDBApi } = useNuxtApp();
      $movieDBApi(`${movieId}?language=en-US`)
        .then(data => movieDetail.value = data)
        .catch(err => console.error(err));
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