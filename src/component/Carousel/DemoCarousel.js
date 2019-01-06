import React, { Component } from 'react';
import Carousel from 'nuka-carousel';


//import logo of venues
import logo1 from "./gg.png";
import logo2 from "./img3.png";
import logo3 from "./img1.png";
import logo4 from "./img2.png";
import logo5 from "./gg1.png";
import logo6 from "./gg2.png"
// import "./DemoCarousel.scss";


class DemoCarousel extends Component {
  render() {
    return (
    //calling the carousel wrapper component 
      <Carousel cellSpacing={15} slideWidth={0.25}>
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



    );
    
    
  }
}
export default DemoCarousel;