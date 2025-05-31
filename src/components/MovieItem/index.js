import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = ({movieDetails}) => {
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="movie-item-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
        className="popup-content"
      >
        {close => (
          <div className="popup-player-container">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#ffffff" />
            </button>
            <ReactPlayer url={videoUrl} controls width="100%" />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
