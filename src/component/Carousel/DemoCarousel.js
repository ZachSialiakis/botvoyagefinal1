import React, { Component } from 'react';
import Carousel from 'nuka-carousel';


//import logo of venues
import logo1 from "./gg.png";
import logo2 from "./img3.png";
import logo3 from "./img1.png";
import logo4 from "./img2.png";
import logo5 from "./gg1.png";
import logo6 from "./gg2.png"
 import "./DemoCarousel.scss";
 


class DemoCarousel extends Component {
  render() {
    return (
      <div>

        <font size="8">Here you can view our top 6 users searches</font> 
        <p>Click the next button to display the Carousel</p>
       <ul>
       <li>Akropolis in Athens</li>
       <li>White Tower of Thessaloniki</li>
       <li>Regency Casino of  Thessaloniki</li>
       <li>360 Cocktail Bar Athens</li>
       <li>Vanilla Sky World in Thessaloniki</li>
       <li>Shark Bar Restaurant in Thessaloniki</li>
       
</ul> 
      <Carousel cellSpacing={100} slideWidth={0.25}>
        {/* <div className="imgio"> */}
        <img src={logo4} style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'100%'
        }} />
        <img src={logo2} style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'100%'
        }} />
        <img src={logo1} style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'100%'
        }} />
       <img src={logo3} style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'100%'
        }} />
        <img src={logo5} style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'100%'
        }} />
        <img src={logo6} style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'100%',
          height:'100%'
        }} />
        
      </Carousel>

      
       

</div>


    );
    
    
  }
}
export default DemoCarousel;