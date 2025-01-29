import React, { useEffect, useState } from 'react';
import { FaRegCirclePlay } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import MoviesContainer from './MoviesContainer';
import News from './News';





const HeroSeciton = () => {


  const [images,setImages] = useState([])

  const [indexx,setIndexx] = useState(0);


  const fetchImages=async()=>{

  const url = 'https://api.themoviedb.org/3/search/movie?query=avenger&include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
  }
};

 const data= await fetch(url, options);

 const response = await data.json();

 console.log(response.results)

 setImages(response.results)



}


useEffect(()=>{
  
  fetchImages()

},[])


useEffect(()=>{

  if(images.length <2) return

  const iddd =setInterval(()=>{
    const index = Math.floor(Math.random()*images.length);

    setIndexx(index)




  },4000)

  return()=>clearInterval(iddd)

},[images])

 

// https://media.istockphoto.com/id/1462162354/photo/cheerful-parents-with-child-in-movie-theater.jpg?s=612x612&w=0&k=20&c=kS2amiX6vXV9havbxAAQsRoQ2MR8YQBLyTcDp-hbVqs='




  return (
    <>
   <section className='hero_section'>
       <div className='hero_inner' >
        <img src={`https://image.tmdb.org/t/p/original/${images[indexx]?.poster_path}`} style={{zIndex:"-1"}}/>

        <div className='hero_inner_1'>
            <div className='hero_inner_1_1'>
                 <div className='first_container'>
                     <button>
                        Book Now
                     </button>
                     <p>
                        Releasing Soon<br/>
                        IMAX 3D
                     </p>
                 </div>
                 <div className='secon_container'>
                     <FaRegCirclePlay/> <br/>
                     <p>Watch</p>
                 </div>
            </div>
            <div className='hero_inner_1_2'>
              <div>
                     <BsFacebook/>
                     <FaYoutube/>
                     <FaInstagramSquare/>   

              </div>
              </div>

        </div>


        <div className='gradint_bottom'>

        </div>

        <div className='gradint_top'>

        </div>


       </div>
   </section>

  <MoviesContainer istrue={true} heading={"OPENING THIS WEEK"}/>
  <News/>

  

   </>
  )
}

export default HeroSeciton