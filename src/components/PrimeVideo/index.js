
import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovies = moviesList.filter(movie => movie.categoryId === 'ACTION')
  const comedyMovies = moviesList.filter(movie => movie.categoryId === 'COMEDY')

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-banner"
      />
      <div className="movies-section">
        <h1 className="movies-heading">Action Movies</h1>
        <MoviesSlider moviesList={actionMovies} category="Action Movies" />
        <h1 className="movies-heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovies} category="Comedy Movies" />
      </div>
    </div>
  )
}

export default PrimeVideo
