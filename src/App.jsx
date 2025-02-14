import React, { useEffect, useState } from 'react'
import "./Scss/App.scss"
import Header from './Component/Header'
import {Routes,Route} from "react-router-dom"
import HeroSeciton from './Component/HeroSeciton'
import { useSelector } from 'react-redux'



const App = () => {


  const [movies ,setMOvies]= useState([])

  // const {token,isLoading} = useSelector((state)=>state.userData);

  // console.log(token,isLoading)

  // const fetchMovies = async()=>{

    // const url = 'https://imdb8.p.rapidapi.com/actors/get-interesting-jobs?nconst=game';


    

  //   const url = 'https://imdb8.p.rapidapi.com/v2/search?searchTerm=moives&type=NAME&first=20&country=US&language=en-US';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'x-rapidapi-key': '34bb95b8fcmshcffe362b1533e56p13fb56jsn2561da7a8295',
  //       'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  //     }
  //   };
    
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     console.log(result);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(()=>{
  
  //  fetchMovies()

   

  },[])


  return (<>
  <Header/>

  <Routes>
    <Route path='/'  element={<HeroSeciton/>} />

  </Routes>
    </>

    
  )
}

export default App