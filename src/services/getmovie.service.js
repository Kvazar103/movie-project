import {axiosService} from "./axios.service";
import {urls} from "../configs";


const getmovieService={
    getMovie:(id)=>axiosService.get(`${urls.searchedMovie(id)}`)
}
export {
    getmovieService
}