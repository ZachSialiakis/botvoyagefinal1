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


return (
<div style={{ textAlign: "center"}}>
<h1 style={{color: 'yellow'}}>Here you can view our recommendations based on most popular searches from users!<br /> Also you can view our bot and search through a variety of categories that you are interested in. Some of those are:</h1>
{/* <font color="white" size="5"><i>Coffee<br/>Rent a Car<br />Burger<br/>Pharmachy<br />Cinema<br /> Casino<br /> Gas Station<br />Flights<br />Weather</i></font> */}

<h1 style={{color: 'white'}}><img src={coffee} style={{height: '2%', width: '2%'}}></img><i> Coffee</i></h1>


<h1 style={{color: 'white'}}><img src={burger} style={{height: '2%', width: '2%'}}></img><i> Burger</i></h1>

<h1 style={{color: 'white'}}><img src={pharmachy} style={{height: '1%', width: '1%'}}></img><i> Pharmachy</i></h1>

<h1 style={{color: 'white'}}><img src={car} style={{height: '2%', width: '2%'}}></img><i> Rent a Car</i></h1>

<h1 style={{color: 'white'}}><img src={cinema} style={{height: '2%', width: '2%'}}></img><i> Cinema</i></h1>

<h1 style={{color: 'white'}}><img src={casino} style={{height: '2%', width: '2%'}}></img><i> Casino</i></h1>

<h1 style={{color: 'white'}}><img src={gas} style={{height: '2%', width: '2%'}}></img><i> Gas Station</i></h1>

<h1 style={{color: 'white'}}><img src={plane} style={{height: '2%', width: '2%'}}></img><i> Flights</i></h1>

<h1 style={{color: 'white'}}><img src={cloud} style={{height: '2%', width: '2%'}}></img><i> Weather</i></h1>



{ !!users && <UserList users={users} /> }
</div>
);
}
}


const UserList = ({ users }) =>
<div>



<h1 style={{color: "yellow"}}><u>Last user signed up in our platform:</u></h1>


{Object.keys(users).map(key =>
<h1 style={{color: 'black'}} key={key}><img src={avatar} style={{height: '2%', width: '2%'}}></img><i> {users[key].username}</i></h1>


)}

</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);