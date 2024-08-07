import React from 'react'
import lazy from '../images/about-us1.png'
import './Loader.css'

const Loader = () => {
  return (
    <div>
       <div  className='position-absolute top-50 start-50 translate-middle aos' > 
        
         <img src={lazy} alt='Groavylogo' className='w-100 aniame'/>
        
       </div>
    </div>
  )
}

export default Loader
