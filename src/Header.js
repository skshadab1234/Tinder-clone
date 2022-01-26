import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return <div className = 'HeaderSection'>
        <IconButton>
            <NavLink to="/profile"> 
                <PersonIcon className = "header_icon" fontSize="large"/>
            </NavLink>
        </IconButton>

        <NavLink to="/"> 
            <img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png" alt="tindev logo" className="tinder__logo" />
        </NavLink>

        <IconButton>
            <NavLink to="/chat"> 
                <ForumIcon className = "header_icon" fontSize="large"/>
            </NavLink>
        </IconButton>
    </div>;
}
