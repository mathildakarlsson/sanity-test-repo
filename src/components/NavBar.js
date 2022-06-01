import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header className='header'>
            <div className='container'>
                <nav className='flex-parent'>
                    <NavLink
                        to='/' 
                        className='flex-child'
                        activeClassName='active'
                    >
                        Kapehe
                    </NavLink>
                    <NavLink to='/item' 
                       className='flex-child'
                       activeClassName='active'
                   >
                        Shop
                    </NavLink>
                    <NavLink to='/project'
                       className='flex-child'
                       activeClassName='active'
                   >
                        Projects
                    </NavLink>
                    <NavLink to='/about'
                       className='flex-child'
                       activeClassName='active'
                   >
                        About Me
                    </NavLink>
                </nav>
                <div className='social-icons'>
                    <SocialIcon
                        url='https://sv-se.facebook.com/'
                        className='facebook'
                        target='_blank' 
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon
                        url='https://twitter.com/'
                        className='twitter'
                        target='_blank'
                        fgColor='#fff'
                        style={{ height: 35, width: 35 }} 
                    />
                    <SocialIcon 
                        url='https://www.linkedin.com/' 
                        className='linkedin' 
                        target='_blank' 
                        fgColor='#fff' 
                        style={{ height: 35, width: 35 }} 
                    />
                </div>
            </div>
        </header>
    )
};

export default NavBar;
