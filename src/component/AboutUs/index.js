import React from 'react';
import botPic from './botPic.png';
import { BorderStyle } from 'material-ui-icons';

//Method to display the component aboutus in routes
const AboutUs = () =>
  <div style={{ textAlign: "center" }}>
    <h1 style={{ color: 'black' }}>Some Words About the Creators</h1>

    <font color="black" size="6"><i>This Project was created by Zach Sialiakis and Christoforos Konakas, students of University of the Aegean Department of Information and Communication Systems Engineering for the master title.
      The supervisors were John Charalambidis and Zoe Lachana.</i></font>
    <br />

      <img src={botPic} style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '50%',
        height: '50%',
        margin: '2px',
        paddingTop: '4%',
        borderRadius: '10%'

      }} />
  </div>


export default AboutUs;
