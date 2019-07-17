import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class CarDetails extends Component {
  
    continue = e =>
    {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e =>
    {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values , handleChange } = this.props;
       
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <AppBar title="Enter Vehicle details" />
        <TextField
            hintText="Enter your car no."
            floatingLabelText="Car Number"
            onChange={ handleChange('carno')}
            defaultValue={ values.carno }
        />   
        <br/>
        <TextField
            hintText="Enter your car brand"
            floatingLabelText="Car Brand"
            onChange={ handleChange('brand')}
            defaultValue={ values.brand }
        />
            <br>
            </br>
        <TextField
            hintText="Enter your car model"
            floatingLabelText="car model"
            onChange={ handleChange('model')}
            defaultValue={ values.model }
        />
            <br/>
       
        <br/>
        <RaisedButton
            label="Continue"
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
export default CarDetails

