import React, { useState } from 'react'
import "./HamburgerMenu.scss"

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Options from '../Options/Options';

const HamburgerMenu = () => {
    const [isMenuClicked,setIsMenuClicked] = useState(false);

    return (
        <div className='hamburgerMenu'>
            {isMenuClicked 
            ? <CloseIcon className="hamburgerMenuIcon" onClick={() => setIsMenuClicked(!isMenuClicked)}/>
            : <MenuIcon className="hamburgerMenuIcon" onClick={() => setIsMenuClicked(!isMenuClicked)}/>
            }
            {isMenuClicked 
                ? <div className="hamburgerMenuContainer">
                    <Options/>
                </div>

                : null
            }
        </div>
    )
}

export default HamburgerMenu