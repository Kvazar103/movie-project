import {axiosService} from "./axios.service";
import {urls} from "../configs";


const searchService={
    getM:(data)=>axiosService.get(`${urls.searchSecond}`+data)
}

export {
    searchService
}