import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from './../../assests/images/logo.png';


const Header = (props) =>{
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt='img' />
                <h1>Circle</h1>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth 
                ? 
                    <div>
                        {props.login}
                        <button onClick={props.logoutThunkCreator}>Log out</button>
                    </div> 
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;