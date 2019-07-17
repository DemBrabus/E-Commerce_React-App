import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../Assets/Icons/crown.svg';
import { auth } from '../../Firebase/Firebase.utils';

export default function Header({ currentUser }) {
    return (
        <div className='header'>
            <Link to='/' className='logo-container'>
                <Logo  className='logo'/>
            </Link>

            <div className='options'>
                <Link to='/shop' className='option'>
                    SHOP
                </Link>
                <Link to='/contact' className='option'>
                    CONTACT
                </Link>
                {
                    currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </div>
                    :
                    <Link className='option' to='/signin'>
                        SIGN IN
                    </Link>
                }
            </div>
        </div>
    )
}
