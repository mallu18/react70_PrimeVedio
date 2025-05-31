import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = ({moviesList, category}) => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
  }

  return (
    <div className="movies-slider-container">
      <h1 className="category-title">{category}</h1>
      <Slider {...settings}>
        {moviesList.map(movie => (
          <MovieItem key={movie.id} movieDetails={movie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
