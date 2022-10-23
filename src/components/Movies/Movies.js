import {useEffect, useState} from "react";
import {movieService} from "../../services/movie.service";
import {Movie} from "../Movie/Movie";
import css from './Movies.module.css'


const Movies = () => {
    let [movie,setMovie]=useState([])

    const [avg,setAvg]=useState(null)

    const lift=(value)=>{
        setAvg(value)
    }

    useEffect(()=>{
        movieService.getAll().then(({data})=>{
            setMovie(data.results)
            console.log(data.results)
        })

    },[])

    return(<div className={css.AllMovies}>
        {movie.map(movie=><Movie movie={movie} key={movie.id} lift={lift}/>)}

    </div>)
}


export {
    Movies
}