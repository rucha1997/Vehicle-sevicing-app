import React, { Component } from 'react'
import UserDetails from './UserDetails';
import CarDetails from './CarDetails';
import Confirm from './Confirm';
import Success from './Success';
export class UserForm extends Component {
    state={
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        carno: '',
        brand:'',
        model:'',
        //nameError:'Enter valid name'

    }


    
    //next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    //handle field
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
        
       
    }

    /*validate=() =>{
        let nameError="";
        if(this.state.email.includes('@'))
        {
            nameError='invalidEmail';
        }
        if(nameError)
        {
            this.setState({ nameError });
            return false;
        }
        return true;
    }

    handleSubmit = event => {
        const isValid=this.validate();
        if(isValid)
        {
            console.log(this.state);
        }
*/
        //clear form

        
    
    render() {
        const { step }=this.state;
        const { firstName,lastName,email,phone,carno,brand,model} = this.state;
        const values= { firstName,lastName,email,phone,carno,brand,model}
      
        switch(step)
        {
            case 1:
                return (
                    <UserDetails
                    nextStep={ this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
            case 2:
                        return (
                            <CarDetails
                            nextStep={ this.nextStep}
                            prevStep= { this.prevStep}
                            handleChange={this.handleChange}
                            values={values}
                            />
                        );
                        
                case 3:
                    return (
                        <Confirm
                        nextStep={ this.nextStep}
                        prevStep= { this.prevStep}
                        values={values}
                        />
                    );

                case 4:
                        return <Success/>
                                    
        }
    }
}

export default UserForm
