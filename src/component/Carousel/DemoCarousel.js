import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/src/alice-carousel.scss";

// //import logo of venues
import logo1 from "./gg.png";
import logo2 from "./img3.png";
import logo3 from "./img1.png";
import logo4 from "./img2.png";
import logo5 from "./gg1.png";
import logo6 from "./gg2.png"

const DemoCarousel = () => {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <div>
      <div style={{textAlign: 'center'}}>

      <h1 style={{color: 'black'}}>Here you can view our top 6 users searches from Greece</h1>
        
          <p style={{color: 'black', fontSize: 20}}><i>Akropolis, Athens</i></p>
          <p style={{color: 'black', fontSize: 20}}><i>White Tower, Thessaloniki</i></p>
          <p style={{color: 'black', fontSize: 20}}><i>Regency Casino, Thessaloniki</i></p>
          <p style={{color: 'black', fontSize: 20}}><i>360 Cocktail Bar, Athens</i></p>
          <p style={{color: 'black', fontSize: 20}}><i>Vanilla Sky World, Thessaloniki</i></p>
          <p style={{color: 'black', fontSize: 20}}><i>Shark Bar Restaurant, Thessaloniki</i></p>
        
      </div>
      <AliceCarousel mouseDragEnabled
        autoPlayInterval={2500}
        autoPlay={true}
        fadeOutAnimation={true}>
        
        <img src={logo1} onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src={logo2} onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src={logo3} onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src={logo4} onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src={logo5} onDragStart={handleOnDragStart} className="yours-custom-class" />
        <img src={logo6} onDragStart={handleOnDragStart} className="yours-custom-class" />
        
      </AliceCarousel>
    </div>
  )
}
export default DemoCarousel;