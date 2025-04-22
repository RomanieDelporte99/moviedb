import { defineStore } from 'pinia';

export const useMovieStore = defineStore('movie', {
    state: () => {
        return {
            movies: [],
            movieDetail: {},
            popularMovies: []
        }
    },

    actions: {
        async fetchPopularMovies() {
            try {
                const { $movieDBApi } = useNuxtApp()
                $movieDBApi('popular?language=en-US&page=1')
                    .then(data => this.movies = data.results)
                    .catch(err => console.error(err));
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        },
        async fetchMovies() {
            try {
                const { $movieDBApi } = useNuxtApp()

                $movieDBApi('now_playing?language=en-US&page=1')
                    .then(data => this.movies = data.results)
                    .catch(err => console.error(err));
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        },
        async fetchMovieDetails(movieId) {
            try {
                const { $movieDBApi } = useNuxtApp()
                $movieDBApi(`${movieId}?language=en-US`)
                    .then(data => this.movieDetail = data)
                    .catch(err => console.error(err));
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        }
    }
})