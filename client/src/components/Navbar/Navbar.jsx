import React from 'react';
import "./Navbar.scss";

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useEffect } from 'react';
import Options from '../Options/Options';
import useDeviceDetect from '../../hooks/useDeviceDetect';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

const Navbar = () => {
    const [isScrolled,setIsScrolled] = useState(false);
    const {isMobile} = useDeviceDetect();

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY === 0 ? false : true);
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    return (
        <header data-testid="app-header" className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    {isMobile ? <HamburgerMenu/> : null}
                    <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
                        alt="Netflix Logo" 
                        className="navbarLogo"
                        />

                    {isMobile ? null : <Options/>}
                </div>
                <div className="right">
                    <SearchIcon className='navbarIcon'/>
                    {isMobile ? null : <span>KID</span>}
                    {isMobile ? null :<NotificationsIcon className='navbarIcon'/>}
                    <img
                      src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                      alt="User Profile"
                      className="profileImg"
                    />

                    <div className="profile">
                        <ArrowDropDownIcon className='navbarIcon'/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Navbar