import {baseURL} from "../configs";
import axios from "axios";


const axiosService=axios.create(
    {
    baseURL,
    headers:{
        'Authorization':`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQxMmI4NjZmZDY0ODRiNjU1MjVlNjUzZmViNjhlZiIsInN1YiI6IjYzNTMxMDRjODgwYzkyMDA3ZTZmY2QwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uR-lTGn0dmLH5mbY5vUiEurQYECifvPRrimDyEMYgWM`
    }
    });
export {
    axiosService
}