import React, { useEffect, useState } from 'react'
import head_image from "../assets/header_image.png"
import { FaSearch } from "react-icons/fa";


const Header = () => {
   

  const [isActive ,setIsActive] = useState(false);


  const changeBAckground=()=>{
    // console.log( window.scrollY)

    if(window.scrollY > 780){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  }


  useEffect(()=>{

    window.addEventListener("scroll",changeBAckground)

    return()=> window.removeEventListener("scroll",changeBAckground)


  },[])






  return (
    <section className={`${isActive ? "header_section active":"header_section"}`}>
       <div className='header_inner'>
        <div className='header_image'>
          <img src={head_image}/>
        </div>

        <div className={`${isActive ? "headers_link active":"headers_link"}`} > 
            <ul>
              <li>Home</li>
              <li>Schedule</li>
              <li>Movies</li>
              <li>News</li>
            </ul>
            <div>
                <FaSearch/>
            </div>
        </div>

       </div>
    </section>
  )
}

export default Header