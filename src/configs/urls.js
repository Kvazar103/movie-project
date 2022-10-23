
const baseURL="https://api.themoviedb.org/3"

const urls={
    movies:`${baseURL}/discover/movie`,
    popularMovies:`${baseURL}/movie/popular?api_key=f2d12b866fd6484b65525e653feb68ef&language=en-US`,
    genres:`${baseURL}/genre/movie/list`
}
export {
    baseURL,
    urls
}