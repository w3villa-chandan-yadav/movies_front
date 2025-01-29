import React from 'react'

const MovieCart = ({movie }) => {

  // console.log(movie)



  return (
    <div style={{
        // backgroundColor:"red", 
        width:'100%',
        height:"400px",
        borderRadius:"4px",
        minWidth:"210px"
       }}
       className='movie_cart'
       >
        <div style={{height:"87%",borderTopRightRadius:"3px",borderTopLeftRadius:"3px"}} className='movie_container '>
       <img src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} style={{height:"100%",borderTopRightRadius:"3px",borderTopLeftRadius:"3px"}} className='imagess'/>

        </div>
       <div>
        <h3 style={{
            color:"white"
        }}>{movie?.title}</h3>
        <div style={{margin:"4px 0px"}}>
            <span style={{borderRight:"2px solid gray" ,paddingRight:"15px",color:'white'}}>{movie?.release_date }</span><span  style={{paddingLeft:"10px",color:'white'}}>{movie?.vote_average +" "} Rating</span> 
        </div>


       </div>
       </div>
  )
}

export default MovieCart