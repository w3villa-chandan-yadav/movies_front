import React, { useEffect, useState } from 'react'
import MovieCart from './MovieCart'
import { FaSearch } from "react-icons/fa";


const MoviesContainer = ({istrue,heading}) => {

 

  const [searchh,setSearch] = useState("")

  const handleClick=(e)=>{

    if(e.target.value==="") return alert("Please Enter some thing");

    if(e.key==="Enter"){
      alert("Developer is working on this 😭 😹")
    }
  }




     const [movies,setMovies] = useState([])

     const [type,setType] =useState("now_playing")
    
    
      const fetchMovies = async()=>{
  
          // const url = 'https://api.themoviedb.org/3/movie/11';


          let url ;

          if(istrue){
             url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=1`;

          }else{
             url = `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`;

          }
          
          
          const options = {
            method: 'GET',
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
              
            }
          };
          
          try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(istrue +result)
            const sclice = istrue ? 10: 5 ;
            const newmovies = result.results.slice(0,sclice)
            setMovies(newmovies)
        
        
          } catch (error) {
            console.error(error);
          }
        }
      
        useEffect(()=>{
        
         fetchMovies()
      
         
      
        },[type])
    
        // console.log(movies)


     
        
        if(movies.length < 1){
          // console.log("returnnnn")
          return
        }




  return (
   <section className='movie_section'>

   <div className='movie_inner'>
    <div className='movie_inner_1'>
       <h3 style={{color:"white",position:"relative"}}>{heading}</h3>
      {istrue && <div className='input_container'>
        <input placeholder='Search Movies'
        value={searchh}
        onChange={(e)=>setSearch(e.target.value)}
        onKeyDown={handleClick}
        />
        <FaSearch/>
       </div>}

    </div>
       <div className={`${istrue? "istruee":"isfalsee"}`}></div>
   </div>

   {
       istrue && <div className='filter_movie'>
        {[{title:"Now Playing",link:"now_playing"},{title:"Popular",link:"popular"},{title:"Top Rated",link:"top_rated"},{title:"Upcoming",link:"upcoming"}].map((typess,index)=>{
            return(
                   <button className='btn' key={index} onClick={()=>setType(typess.link)}>
                    {
                        typess.title
                    }

                   </button>
            )
        })}
        </div>
   }

   <div className='container_movies'>

   {  
       movies.map((movie,index)=>{
        return <MovieCart key={index} movie={movie}/>
    })
   }



   </div>
   

  { istrue && <div style={{width:"100%"}}>
    <div style={{width:"93%",margin:"0 auto"}}>
        <h4 style={{textAlign:"right",padding:"46px 35px 0px 0px" , color:"red"}}>More...</h4>

    </div>

   </div>}
   



   </section>
  )
}

export default React.memo(MoviesContainer)