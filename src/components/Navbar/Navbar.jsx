import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';


const Navbar = (props) =>{
    return (
        (<nav className={classes.nav}>
            <ul className='ul'>
                <li className={classes.item}>
                    <NavLink to={`/profile/${props.authUserId}`} className={({ isActive }) => isActive ? classes.active : classes.a}>Profile</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/dialogs' className={({ isActive }) => isActive ? classes.active : classes.a}>Messages</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/news' className={({ isActive }) => isActive ? classes.active : classes.a}>News</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/music' className={({ isActive }) => isActive ? classes.active : classes.a}>Music</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/users' className={({ isActive }) => isActive ? classes.active : classes.a}>Users</NavLink>
                </li>
                <li className={classes.item}>
                    <NavLink to='/settings' className={({ isActive }) => isActive ? classes.active : classes.a}>Settings</NavLink>
                </li>
            </ul>
            <Friends friends={props.navbarPage.friends}/>
        </nav>)
    );
}

export default Navbar;