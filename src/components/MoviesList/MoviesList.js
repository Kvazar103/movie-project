import * as css from "../Movie/Movie";
import {Stars} from "../StarsRating/Stars";

import {Link, useLocation} from "react-router-dom";


const MoviesList = ({value}) => {

    return(
        <div className={css.Movie}>

        <Link to={'/movieTemplate'} state={{...value}}>
            <img src={`https://image.tmdb.org/t/p/w400${value.poster_path}`}/>
        </Link>

        <h2>{value.title}</h2>
        <p>{value.overview}</p>
        <Stars lift={value.vote_average}/>

    </div>
    )
}
export {
    MoviesList
}