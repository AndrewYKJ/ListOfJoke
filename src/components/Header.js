import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import Home from './Home';
import { ReactComponent as HomeSvg } from '../assets/home.svg';
import './header.css';
import { ReactComponent as FavouriteSvg } from '../assets/heart.svg';
import { ReactComponent as Edit } from '../assets/edit.svg';


const Header = ({ history, isLogged }) => {
    const handleClick = () => {
        history.push('/')
        isLogged(false)
    }
    const username = localStorage.getItem('username');
    
    return (
        <nav>
            <div className='div-header'>
               
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <NavLink exact to='/' activeClassName='active'><HomeSvg className='div-svg' /></NavLink>
                    <NavLink exact to='/favourite' activeClassName='active'><FavouriteSvg className='div-svg' /></NavLink>
                    <NavLink exact to='/edit' activeClassName='active'><Edit className='div-svg' /></NavLink>
                </div>
                <p>{username}</p>
               
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  
                    <button className='button-header' onClick={handleClick}>Log out</button>
                </div>
           </div>
        </nav>
    )
}

export default withRouter(Header);