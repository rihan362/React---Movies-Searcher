import React from 'react';
import { useState ,useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard'
import SearchIcon from './search.svg'
const API_URL='http://www.omdbapi.com?apikey=64c11271'; 

// const movie1={
  
// 'Poster': "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
// "Title": "The Avengers",
// "Type": "movie",
// "Year": "2012",
// "imdbID": "tt0848228"
// }


const App=()=>{
     

   const [movies,setmovies]=useState([]);
   const [searchterm,setsearch]=useState('');

   const searchMovies=async(title)=>{
     
     const response=await fetch(`${API_URL}&s=${title}`)
     const data=await response.json();

     setmovies(data.Search)
     
     
    }
    
    useEffect(()=>{
     searchMovies('movies')
    },[]);





  return(
  <div className='app'>
    <h1>Rihan's Production Househy</h1>

    <div className="search">
      <input
      placeholder="Search for Movies"
      value={searchterm}
      onChange={(e)=>setsearch(e.target.value)}
      />
      <img
       src={SearchIcon}
       alt='search'
       onClick={()=>searchMovies(searchterm)}
      />
    </div>
    

    {
      movies?.length>0?
      (
        <div className="container">
          {movies.map((movie)=>(
            <MovieCard movie={movie}/>
          ))}
        </div>

      ):(
        <div className="empty">
          <h2>No movies FOund</h2>
        </div>
      )
    }
  
      
  </div>
  )
}

export default App;
