import MoviesContainer from './MoviesContainer'
import Newss from './Newss'
import imageSp from "../assets/spider-man.jpg"

const News = () => {






  return (
<div className='comming_soon'>
  
  <img src={imageSp} className='spider_image'/>
  <div className='upper_gradient'></div>
  <div className='lower_gradient'></div>
<MoviesContainer istrue={false} heading={"COMMING SOON"} />
<Newss/>


</div>)
}

export default  News