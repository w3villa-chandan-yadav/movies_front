import React from 'react'
import { CiHeart } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { IoIosMore } from "react-icons/io";
import { IoHeart } from 'react-icons/io5';
import { FaListUl } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";

import { addMovie,addTab } from '../reducer/slicess/favaretsMovie';







const MovieCart = ({movie }) => {
  const dispatch = useDispatch()
  const  {openTab}= useSelector((state => state.movies))

  console.log(addTab)
  console.log(movie)

   const handleopen=()=>{
    if(openTab===movie.id){
      dispatch(addTab(null))
    }else{
      dispatch(addTab(movie.id))
    }


   }




  return (
    <div style={{
      position:"relative",
        // backgroundColor:"red",
        
        width:'100%',
        height:"400px",
        borderRadius:"4px",
        minWidth:"210px",
        // filter:"blur(3px)"
        // backdropFilter:"blur(80px)"
       }}
       className='movie_cart'
       >
        <div 
        className='dots'
        style={{color:'white' ,position:'absolute',top:"7px",right:"10px",zIndex:"20",fontWeight:"800",fontSize:'20px'}}>
          <div 
          onClick={()=>handleopen()}
          style={{position:"relative",cursor:"pointer" ,height:"24px",width:"24px",borderRadius:"50%",display:"grid",placeContent:"center"}}>
        <IoIosMore/>
       { openTab===movie.id&& <div style={{width:"90px",height:"150px",backgroundColor:"white" ,position:"absolute",top:"120%",overflow:"hidden",right:"20%",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
             <div
             className='dotsIcom'
             
              style={{borderBottom:"1px solid gray",backgroundColor:"white",color:"black",width:"95%", textAlign:"center",fontWeight:"300px",fontSize:"10px",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",gap:"5px"}}><FaListUl/>Add to list</div>
             <div
               className='dotsIcom'
              style={{borderBottom:"1px solid gray ",backgroundColor:"white",color:"black",width:"95%", textAlign:"center",fontWeight:"300px",fontSize:"10px",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",gap:"5px",textWrap:"nowrap"}}> <IoHeart /> Add favorite</div>
             <div
              className='dotsIcom'
              style={{borderBottom:"1px solid gray",backgroundColor:"white",color:"black",width:"95%", textAlign:"center",fontWeight:"300px",fontSize:"10px",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",gap:"5px"}}><FaBookmark/>Watch list</div>
             <div
              className='dotsIcom'
              style={{backgroundColor:"white",color:"black",width:"95%", textAlign:"center",fontWeight:"300px",fontSize:"10px",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",gap:"5px"}}><IoMdStar/>Add rating</div>
        </div>}
          </div> 
          </div>
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

export default React.memo(MovieCart)