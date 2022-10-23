import StarRatings from "react-star-ratings/build/star-ratings";


const Stars = ({lift}) => {


    return(<div>
        <StarRatings
            rating={lift}
            starDimension="40px"
            starSpacing="15px"
            numberOfStars={10}
        />
    </div>)
}
export {
    Stars
}