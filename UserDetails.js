import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

//import Icon from '@material-ui/core/Icon';
import RaisedButton from 'material-ui/RaisedButton';

export class UserDetails extends Component {
  
    continue = e =>
    {
        e.preventDefault();
        this.props.nextStep();
    }
  
    render() {
        const { values , handleChange } = this.props;
       
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar title="Enter User details" />
        <TextField
            hintText="Enter your first name"
            floatingLabelText="first name"
            onChange={ handleChange('firstName')}
            defaultValue={ values.firstName }
        />
            <br>
            </br>
        <TextField
            hintText="Enter your last name"
            floatingLabelText="last name"
            onChange={ handleChange('lastName')}
            defaultValue={ values.lastName }
        />
        
            <br/>
        <TextField
            hintText="Enter your email"
            floatingLabelText="Email"
            onChange={ handleChange('email')}
            defaultValue={ values.email }
        />
            <br/>
            <TextField
            hintText="Enter your phone no."
            floatingLabelText="Phone Number"
            onChange={ handleChange('phone')}
            defaultValue={ values.phone }
        />   
        <br/>
        <RaisedButton
            label="Continue"
            primary={true}
            style = { styles.button}
            onClick = {this.continue}
            />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button : {
        margin: 15
    }
}
export default UserDetails
