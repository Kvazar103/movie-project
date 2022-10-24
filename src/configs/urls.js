
const baseURL="https://api.themoviedb.org/3"
const apiKEY="api_key=f2d12b866fd6484b65525e653feb68ef&language=en-US"

const urls={
    movies:`${baseURL}/discover/movie`,
    popularMovies:`${baseURL}/movie/popular?${apiKEY}`,
    // genres:`${baseURL}/genre/movie/list`,
    // search:`${baseURL}/search/keyword?query=`,
    searchedMovie:(id)=>`${baseURL}/movie/${id}?${apiKEY}`,
    searchSecond:`${baseURL}/search/movie?${apiKEY}&query=`
}
export {
    baseURL,
    urls,
    apiKEY
}