import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import MovieCart from './MovieCart';




const Newss = () => {


   const [movies,setMovies] = useState([])
  

   const fetxhUpcoming=async()=>{
     const url = 'https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1';
     const options = {
     method: 'GET',
     headers: {
       accept: 'application/json',
       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTI1MGE2OTA1ZmRlNWU1MzM4NWFiNzI5MDc4ODdmYiIsIm5iZiI6MTczODA4MzUyOS42MTksInN1YiI6IjY3OTkwY2M5MWJlMTE2NDA5YzIzN2U2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VNgeCAPLxgahzVVJBJ6VbSoJefe8Egk80GgKLRVKte8'
     }
   };
   
      const date =await fetch(url, options);
      const response = await date.json();
   
      const newmovies = response.results.slice(0,6)
      setMovies(newmovies)
    
   }
   
   useEffect(()=>{
    
     fetxhUpcoming()
   
   },[])


  return (
  <section className='newss'>
    <div className='newws_inner'>

    <h3>NEWS</h3>
    <Swiper
    modules={[Navigation, Pagination, ]}
    spaceBetween={10}
    slidesPerView={4}
    navigation
    loop={true}
    autoplay={true}
    pagination={{ clickable: true }}
   //  scrollbar={{ draggable: true }}
   //  onSwiper={(swiper) => console.log(swiper)}
   //  onSlideChange={() => console.log('slide change')}
    className='swipper'
    >

      {
         movies.map((movie,index)=>{
            return(
                  <SwiperSlide  key={index}>
                     <MovieCart  movie={movie}/>
                  </SwiperSlide>
            )
         })
      }
     
     

    </Swiper>


    </div>

  </section>
  )
}

export default Newss