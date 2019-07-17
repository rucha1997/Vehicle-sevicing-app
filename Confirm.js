import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
  
    continue = e =>
    {
        e.preventDefault();
        //process form
        

        this.props.nextStep();
    }
    back = e =>
    {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values: {firstName,lastName,email,phone,carno,brand,model } } = this.props;
       
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar title="Confirm data" />
        <List>
        <ListItem
        primaryText="first name"
        secondaryText={ firstName }
        />
        <ListItem
        primaryText="last name"
        secondaryText={ lastName }
        />
        <ListItem
        primaryText="Email"
        secondaryText={ email }
        />
        <ListItem
        primaryText="Phone No."
        secondaryText={ phone }
        />
        <ListItem
        primaryText="Car no."
        secondaryText={ carno }
        />
        <ListItem
        primaryText="Model"
        secondaryText={ model }
        />
        <ListItem
        primaryText="Brand"
        secondaryText={ brand }
        />
        </List>
        <RaisedButton
            label="Confirm & Continue"
            primary={true}
            style = { styles.button}
            onClick = {this.continue}
            />

         <RaisedButton
            label="Back"
            primary={false}
            style = { styles.button}
            onClick = {this.back}
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
export default Confirm
