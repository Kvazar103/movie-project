import {useForm} from "react-hook-form";
import css from "./Header.module.css";
import {useEffect, useState} from "react";
import {searchService} from "../../services";
import {MoviesList} from "../MoviesList/MoviesList";
import {Link} from "react-router-dom";


const Header=()=>{

const {register,handleSubmit}=useForm()

    let [movies,setMovies]=useState([])


    const submit =async (data) => {
            searchService.getM(data.film).then(({data}) => {
                setMovies(data.results)

            })
    }
    console.log(movies)

    return(<div>

       <form onSubmit={handleSubmit(submit)}>
           <input type="text" placeholder={"enter the film"} {...register('film')}/>
               <button>search</button>
       </form>
        <div id="main">
            <button onClick={()=>{
                let element=document.getElementById("main")
                element.classList.toggle(css.HeaderBlack)

            }}>change color</button>
            {movies.map(value => <MoviesList value={value} key={value.id}/>)}
        </div>

    </div>)
}
export {
    Header
}