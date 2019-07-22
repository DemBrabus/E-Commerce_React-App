import React, { Component } from 'react';
import './SignIn.scss';
import FormInput from '../Form-Input/FormInput';
import CustomButton from '../Custom-Button/CustomButton';
import { auth, signInWithGoogle } from '../../Firebase/Firebase.utils';

export default class SignIn extends Component {
    constructor(){
        super();
        this.state  = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

        
    };


    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    };


    render() {
        return (
            <div className='SignIn'>
                <h2>I already have an account</h2>
                <span>Sign in with your email abd password</span>

                <form onSubmit={ this.handleSubmit } >
                    <FormInput name='email' 
                            type='email' 
                            handleChange={ this.handleChange }
                            label='email'
                            value={this.state.email} 
                            required />
                    

                    <FormInput name='password' 
                            type='password' 
                            handleChange={ this.handleChange }
                            label='password'
                            value={this.state.password} 
                            required />
                    
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >{' '}Sign in with Google{' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}
