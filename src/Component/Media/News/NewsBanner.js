import React from 'react'
// import image1 from "../../../images/mob-serv.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import Banner from '../../../images/News.jpg'
import Banner1 from '../../../images/news-mob.png'
const NewsBanner = () => {
  return (
    <div>
       <div className="position-relative">

      <picture className="w-100">
  <source srcSet={Banner1} media="(max-width: 699px)"/>
  <img src={Banner} alt="bestfarmland-award" width={'100%'} height={'auto'} className="w-100" />
</picture>
      
  <div className="position-absolute top-50 start-50 translate-middle">


    <h2 id="head" className="text-white text-center">
              <FontAwesomeIcon
                icon={faTree}
                className="icon-before animated-icon"
              />
              Groavy Buildcon News and Announcements
              <FontAwesomeIcon
                icon={faTree}
                className="icon-after animated-icon"
              />
            </h2>

    </div>
    </div>
    </div>
  )
}

export default NewsBanner
