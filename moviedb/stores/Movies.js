import {defineStore} from 'pinia';

export const useMovieStore = defineStore('movie', {
  state: () => {
    return {
      movies: [],
    }
  },
  
  actions: {
    async fetchMovies() {
      try {
        const config = useRuntimeConfig()
        
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.public.MOVIE_DB_API_KEY}`
          }
        };
        
        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
          .then(res => res.json())
          .then(data => this.movies = data.results)
          .catch(err => console.error(err));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  }
})