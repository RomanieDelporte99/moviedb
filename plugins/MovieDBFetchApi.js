export default defineNuxtPlugin(async () => {
    const runtimeConfig = useRuntimeConfig();

    const movieDBApi = $fetch.create({
        baseURL: runtimeConfig.public.movieDBUrl,
        onRequest({options}) {
            const headers = (options.headers ||= {});

            const token = runtimeConfig.public.MOVIE_DB_API_KEY;

            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }

            options.headers = {
                ...headers
            };

            return {
                options
            };
        },
    });

    return {
        provide: {
            movieDBApi
        }
    };
});