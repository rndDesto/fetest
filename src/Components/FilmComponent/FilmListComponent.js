import React from 'react'

const FilmListComponent = (props) => {
  return (
    <div className="movies-box">
      <div className="movies-thumb">
          <div className="overlay">
            <div className="overlay-icon"><i className="fa fa-play-circle-o"></i></div>
          </div>
      </div>
      <div className="movies-caption">
          <h3>{props.judulFilm}</h3>
          <div className="movie-credit">
            <ul>
                <li><span>Director:</span><span>{props.direktorFilm}</span></li>
                <li><span>Release:</span><span>{props.rilisFilm}</span></li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default FilmListComponent;