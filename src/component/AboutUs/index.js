import React from 'react';
import botPic from './botPic.png';

//Method to display the component aboutus in routes
const AboutUs = () =>
  <div style={{ textAlign: "center" }}>
    <h2 style={{color: 'yellow'}}>Some Words About the Creators</h2>

    <font color="white" size="6"><i>This Project was created by Zach Sialiakis and Christoforos Konakas, students of University of the Aegean Department of Information and Communication Systems Engineering for the master title.
      The supervisors were John Charalambidis and Zoe Lachana.</i></font>
      <br />
      <img src={botPic} style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width:'50%',
          height:'50%',
          paddingTop: '4%'
        }} />
  </div>


export default AboutUs;
