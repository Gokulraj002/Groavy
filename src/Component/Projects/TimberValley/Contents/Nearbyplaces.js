import React, { useState } from 'react';
import College from "../imagesTimber/hospital.webp";
import shivan from "../imagesTimber/instuite.jpg";
import Hills from "../imagesTimber/lepakshi1.jpg";
import flight from "../imagesTimber/penukonda-fort.png";
import Rock from "../imagesTimber/narasima-temple.jpg";
import trecking from "../imagesTimber/bird-santuctary.jpg";

function Nearbyplaces() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const cards = [
    { title: 'AR Hospital', image: College, km: "1.5 km" },
    { title: 'BIT Institute of Technology', image: shivan, km: "2.0 km" },
    { title: 'Lepakshi Temple', image: Hills, km: "1.5 km" },
    { title: 'Penukonda Fort', image: flight, km: "40 km" },
    { title: 'Narasimha Swamy Temple', image: Rock, km: "55 km" },
    { title: 'Tranquil Bird Sanctuary', image: trecking, km: "10 km" },
  ];

  return (
   <div className='bg py-3'>
     <div className="container pb-md-3">
       <h2 className="text-center font11 color mb-4">Nearby Places</h2>
       <div className="row g-4">
         {cards.map((card, index) => (
           <div className="col-md-4" key={index}>
             <div 
               className="card h-100 position-relative"
               onMouseEnter={() => handleCardHover(index)}
               onMouseLeave={handleCardLeave}
               style={{ transition: 'all 0.3s ease' }}
             >
               <div className="position-relative">
                 <img src={card.image} className="card-img-top" width={'100%'} height={'auto'} alt={card.title} style={{ height: '200px', objectFit: 'cover' }} />
                 {hoveredCard === index && (
                   <div 
                     className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                     style={{
                       backgroundColor: 'rgba(0,0,0,0.7)',
                       color: 'white',
                       fontSize: '1.5rem',
                       fontWeight: 'bold',
                       textAlign: 'center',
                       padding: '10px',
                     }}
                   >
                     {card.title}
                   </div>
                 )}
               </div>
               <div className="card-body">
                 <p className="card-text text-center">{card.km}</p>
               </div>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
  );
}

export default Nearbyplaces;