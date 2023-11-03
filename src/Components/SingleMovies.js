import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {API_URL} from './Context'

const SingleMovies = () => {
  const {id} = useParams();

  const [isLoading, setIsLoading, isError, setIsError] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovies = async (url) => {
      setIsLoading(true);
      try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
          if(data.Response === "True"){
              setIsLoading(false);
              setMovie(data);
          }else{
              setIsError({
                  show: true,
                  msg: data.Error,
              })
          }
      }catch(error){
          console.log("Fetch Error" + error);
      }
  }
  useEffect(()=>{
      let timerOut = setTimeout(()=>{
          getMovies(`${API_URL}&i=${id}`);
      }, 800);

      return () => clearTimeout(timerOut);
  }, [id]);

  if(isLoading){
    return (
      <div className='movie-section'>
        <div className='loading'>Loading...</div>
      </div>
    )
  }

  
  return (
      <section className='movie-section'>
    <div className='movie-card'>
      <div>
        <img src={movie.Poster} alt=""/>
      </div>
      <div className='card-content'>
      <p className='title'>Title: {movie.Title}</p>
      <p className='card-text'>Released: {movie.Released}</p>
      <p className='card-text'>Genre:{movie.Genre}</p>
      <p className='card-text'>IMDB Rating: {movie.imdbRating}</p>
      <p className='card-text'>Country: {movie.Country}</p>
      </div>
    </div>
    </section>
   
  )
}

export default SingleMovies
