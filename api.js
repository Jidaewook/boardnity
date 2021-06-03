const API_URL = 'https://api.themoviedb.org/3/movie/550?api_key=262cfbaa555730595d97bf7a4c956d2a';

export const getMovies = async () => {
    const {results} = await fetch(API_URL).then((x) => x.json());
    const movies = results.map(
        ({
            id,
            original_title,
            popularity,
            release_date,
            runtime
        }) => ({
            key: String(id),
            original_title,
            popularity,
            release_date,
            runtime
        })
    );
    return movies;
};