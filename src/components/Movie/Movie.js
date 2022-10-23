import css from './Movie.module.css'
import {Stars} from "../StarsRating/Stars";
import {Link} from "react-router-dom";



const Movie = ({movie}) => {


    return(<div className={css.Movie}>

        <Link to={'/movieTemplate'} state={{...movie}}>
            <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
        </Link>


        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <Stars lift={movie.vote_average}/>

    </div>)

}

export {
    Movie
}