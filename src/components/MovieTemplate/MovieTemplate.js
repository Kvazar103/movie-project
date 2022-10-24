import {useLocation} from "react-router-dom";
import {Stars} from "../StarsRating/Stars";
import css from './MovieTemplate.module.css'


const MovieTemplate = () => {
    let {state:movie}=useLocation()
    return(<div className={css.Main}><div className={css.movieTemplate}>
        <h2>{movie.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}/>
        <p>{movie.overview}</p>
        <Stars lift={movie.vote_average}/>
        release date: {movie.release_date}<br/>
        average vote: {movie.vote_average}<br/>
        vote count: {movie.vote_count}

    </div>

    </div>)
}
export {
    MovieTemplate
}