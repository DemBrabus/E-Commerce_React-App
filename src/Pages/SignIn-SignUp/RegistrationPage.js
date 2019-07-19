import React from 'react';
import './RegistrationPage.scss';
import SignIn from '../../Components/Sign-In/SignIn';
import SignUp from '../../Components/SignUp-Component/SignUp';





export default function RegistrationPage() {
    return (
        <div className='RegistrationPage'>
            <SignIn />
            <SignUp />
        </div>
    )
}
