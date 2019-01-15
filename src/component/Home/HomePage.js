import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase';
import coffee from "./coffee.png";
import burger from "./burger.png";
import pharmachy from "./pharmachy.png";
import car from "./car.png";
import cinema from "./cinema.png";
import casino from "./casino.png";
import gas from "./gas.png";
import plane from "./plane.png";
import cloud from "./cloud.png";
import avatar from "./avatar.png";
import beach from "./beach.png";
import beer from "./beer.png";
import uni from "./uni.png";
import gym from "./gym.png";
import paintball from "./paintball.png";
import stadium from "./stadium.png";
import golf from "./golf.png";
import billiard from "./billiard.png";
import market from "./market.png";
import zoo from "./zoo.png";
import ski from "./ski.png";
import train from "./train.png";
import bus from "./bus.png";
import ship from "./ship.png";
import club from "./club.png";
import theatre from "./theatre.png";
import museum from "./museum.png";
import shop from "./shop.png";
import hotel from "./hotel.png";
import seesight from "./seesight.png";
import sushi from "./sushi.png";
import mexican from "./mexican.png";
import pizza from "./pizza.png";
import crepery from "./crepery.png";
import restaurant from "./restaurant.png";
import musicstore from "./musicstore.png";
import bakery from "./bakery.png";
import kebab from "./kebab.png";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: {}

    };
  }

  componentDidMount() {
    db.onceGetUsers().then(snapshot =>
      this.setState(() => ({ users: snapshot.val() }))
    );

  }

  render() {
    const { users } = this.state;
    const {styleLET}={color: 'black'};

    return (
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: 'black' }}><u>Here you can view our recommendations. Also you can view our bot and search through a variety of categories that you are interested in. Such us:</u></h2>
        {/* <font color="white" size="5"><i>Coffee<br/>Rent a Car<br />Burger<br/>Pharmachy<br />Cinema<br /> Casino<br /> Gas Station<br />Flights<br />Weather</i></font> */}
        <div style={{ display: 'inline-block' }}>
          <div style={{ float: 'left', width: '20%', paddingLeft: '10%'}}>

            <h1 style={{ styleLET}}><img src={coffee} style={{ height: '10%', width: '10%'}}></img><i> Coffee</i></h1>

            <h1 style={{ styleLET}}><img src={burger} style={{ height: '10%', width: '10%' }}></img><i> Burger</i></h1>

            <h1 style={{ styleLET}}><img src={pharmachy} style={{ height: '8%', width: '8%' }}></img><i> Pharmachy</i></h1>

            <h1 style={{ styleLET}}><img src={car} style={{ height: '10%', width: '10%' }}></img><i> Rent a Car</i></h1>

            <h1 style={{ styleLET}}><img src={cinema} style={{ height: '10%', width: '10%' }}></img><i> Cinema</i></h1>

            <h1 style={{ styleLET}}><img src={casino} style={{ height: '10%', width: '10%' }}></img><i> Casino</i></h1>

            <h1 style={{ styleLET}}><img src={gas} style={{ height: '10%', width: '10%' }}></img><i> Gas Station</i></h1>

            <h1 style={{ styleLET}}><img src={plane} style={{ height: '10%', width: '10%' }}></img><i> Flights</i></h1>

            <h1 style={{ styleLET}}><img src={cloud} style={{ height: '10%', width: '10%' }}></img><i> Weather</i></h1>

          </div>

          <div style={{ float: 'left', width: '20%' }}>

            <h1 style={{styleLET}}><img src={beach} style={{ height: '10%', width: '10%' }}></img><i> Beach</i></h1>

            <h1 style={{ styleLET}}><img src={beer} style={{ height: '10%', width: '10%' }}></img><i> Beer</i></h1>

            <h1 style={{ styleLET }}><img src={uni} style={{ height: '10%', width: '10%' }}></img><i> University</i></h1>

            <h1 style={{ styleLET }}><img src={gym} style={{ height: '10%', width: '10%' }}></img><i> Gym</i></h1>

            <h1 style={{ styleLET }}><img src={paintball} style={{ height: '10%', width: '10%' }}></img><i> Paintball</i></h1>

            <h1 style={{ styleLET }}><img src={stadium} style={{ height: '10%', width: '10%' }}></img><i> Stadium</i></h1>

            <h1 style={{ styleLET }}><img src={golf} style={{ height: '10%', width: '10%' }}></img><i> Golf</i></h1>

            <h1 style={{ styleLET }}><img src={billiard} style={{ height: '13%', width: '13%' }}></img><i> Billiard</i></h1>

            <h1 style={{ styleLET }}><img src={restaurant} style={{ height: '10%', width: '10%' }}></img><i> Restaurant</i></h1>

          </div>

          <div style={{ float: 'left', width: '20%' }}>

            <h1 style={{ styleLET}}><img src={market} style={{ height: '10%', width: '10%' }}></img><i> Market</i></h1>

            <h1 style={{ styleLET}}><img src={zoo} style={{ height: '10%', width: '10%' }}></img><i> Zoo</i></h1>

            <h1 style={{ styleLET }}><img src={ski} style={{ height: '10%', width: '10%' }}></img><i> Ski</i></h1>

            <h1 style={{ styleLET }}><img src={train} style={{ height: '10%', width: '10%' }}></img><i> Train</i></h1>

            <h1 style={{ styleLET}}><img src={bus} style={{ height: '10%', width: '10%' }}></img><i> Bus</i></h1>

            <h1 style={{ styleLET }}><img src={ship} style={{ height: '10%', width: '10%' }}></img><i> Ship</i></h1>

            <h1 style={{ styleLET }}><img src={club} style={{ height: '12%', width: '12%' }}></img><i> Club</i></h1>

            <h1 style={{ styleLET }}><img src={theatre} style={{ height: '10%', width: '10%' }}></img><i> Theatre</i></h1>

            <h1 style={{ styleLET }}><img src={bakery} style={{ height: '12%', width: '12%' }}></img><i> Bakery</i></h1>

          </div>
          <div style={{ float: 'left' , width: '20%', paddingRight: '10%'}}>

            <h1 style={{ styleLET }}><img src={museum} style={{ height: '10%', width: '10%' }}></img><i> Museum</i></h1>

            <h1 style={{ styleLET }}><img src={shop} style={{ height: '10%', width: '10%' }}></img><i> Shop</i></h1>

            <h1 style={{ styleLET }}><img src={hotel} style={{ height: '10%', width: '10%' }}></img><i> Hotel</i></h1>

            <h1 style={{ styleLET }}><img src={musicstore} style={{ height: '11%', width: '11%' }}></img><i> Music Store</i></h1>

            <h1 style={{ styleLET }}><img src={sushi} style={{ height: '10%', width: '10%' }}></img><i> Sushi</i></h1>

            <h1 style={{ styleLET }}><img src={mexican} style={{ height: '12%', width: '12%' }}></img><i> Mexican</i></h1>

            <h1 style={{ styleLET }}><img src={kebab} style={{ height: '12%', width: '12%' }}></img><i> Souvlaki</i></h1>
            
            <h1 style={{ styleLET }}><img src={pizza} style={{ height: '10%', width: '10%' }}></img><i> Pizza</i></h1>

            <h1 style={{ styleLET }}><img src={crepery} style={{ height: '12%', width: '12%' }}></img><i> Crepery</i></h1>

            
          </div>
        
      </div>
        { !!users && <UserList users={users} /> }
      </div >
    );
  }
}


const UserList = ({ users }) =>
  <div style={{ display: 'inline-block' }}>



    <h1 style={{ color: "black" }}><u>Last user signed up in our platform:</u></h1>


    {Object.keys(users).map(key =>
      <h1 style={{ color: 'black' }} key={key}><img src={avatar} style={{ height: '7%', width: '7%' }}></img><i> {users[key].username}</i></h1>


    )}

  </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);