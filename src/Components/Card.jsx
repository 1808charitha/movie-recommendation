import React from 'react'
// import bahu from '../../src/assets/bahu.jpeg'
// import './styles.css'

const Card = (movie) => {
  console.log(movie.info)
  let image_path="https://image.tmdb.org/t/p/w500";
  return (
    <React.Fragment>
        <div className='movie'>
        <img src={image_path+movie.info.poster_path} alt='image' className='poster'></img>
        <div className='movie-details'>
            <div className='box'>
                <h4 className='title'>{movie.info.title}</h4>
                 <p className='rating'>{movie.info.vote_average}</p>
            </div>
           <div className='overview'>
            <h1>Overview</h1> {movie.info.overview} </div>
        </div>
        </div>
    </React.Fragment>
  )
}

export default Card