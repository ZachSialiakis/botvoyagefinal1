import React from 'react';


//import components for use of aythentication and authorization
import AuthUserContext from '../Session/AuthUserContext';
import withAuthorization from '../Session/withAuthorization';
import DisplayNameDialog from '../Dialogs/DisplayNameDialog';
import PasswordChangeDialog from '../Dialogs/PasswordChangeDialog';
import PhotoURLDialog from '../Dialogs/PhotoURLDialog'

//Material ui graphics
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem'



import './index.scss'



class AccountPage extends React.Component {


    state = {
      anchorEl: null,
      pwChange: false,
      photoURLChange: false,
      displayNameChange: false
    };


    //Event Methods
    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
    this.setState({ anchorEl: null });
  };

    pwChangeOpen = () => {
    this.setState({ pwChange: true });
  };

    pwChangeClose = () => {
    this.setState({ pwChange: false });
  };

    photoURLChangeOpen = () => {
    this.setState({ photoURLChange: true });
  };

    photoURLChangeClose = () => {
    this.setState({ photoURLChange: false });
  };

    displayNameChangeOpen = () => {
    this.setState({ displayNameChange: true });
  };

    displayNameChangeClose = () => {
    this.setState({ displayNameChange: false });
  };

  render() {
     const { anchorEl } = this.state;
  return(
  <AuthUserContext.Consumer>

    {authUser =>


//Material UI STyling and button on click events
      <div className="user-card">
        <Card style={{maxWidth: 600, marginTop: 100}}>
          <CardHeader
            avatar={
              <Avatar aria-label="user_pic" src={authUser.photoURL} style={{backgroundColor: 'white', width: 60, height: 60}}>

              </Avatar>
            }
            action={
              <div>
              <IconButton
                aria-label="More"
                aria-owns={anchorEl ? 'menu' : null}
                aria-haspopup="true"
                onClick={this.handleClick}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="menu"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
                PaperProps={{
                  style: {
                    maxHeight: 400,
                    width: 200,
                  },
                }}
              >   
                  <MenuItem onClick={this.pwChangeOpen}>Change password</MenuItem>
                  <MenuItem onClick={this.displayNameChangeOpen}>Change display name</MenuItem>
                  <MenuItem onClick={this.photoURLChangeOpen}>Change avatar</MenuItem>
                </Menu>
              </div>
            }
            title="User information"
            subheader="You can modify your password, avatar and username"
          />
        <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {authUser.displayName}
        </Typography>
        <Typography component="p">
          {authUser.email}
        </Typography>
      </CardContent>
      </Card>


        <PasswordChangeDialog
              open={this.state.pwChange}
              close={this.pwChangeClose}
        />

        <DisplayNameDialog
              open={this.state.displayNameChange}
              close={this.displayNameChangeClose}
        />

        <PhotoURLDialog
              open={this.state.photoURLChange}
              close={this.photoURLChangeClose}

        />

        <br />




      </div>
    }

  </AuthUserContext.Consumer>
)}
}

const authCondition = (authUser) => !!authUser;


export default withAuthorization(authCondition)(AccountPage);
