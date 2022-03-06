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
            ? <CloseIcon data-testid="hamburgerMenu" className="hamburgerMenuIcon" onClick={() => setIsMenuClicked(!isMenuClicked)}/>
            : <MenuIcon data-testid="hamburgerMenu" className="hamburgerMenuIcon" onClick={() => setIsMenuClicked(!isMenuClicked)}/>
            }
            {isMenuClicked 
                ? <div data-testid="hamburgerMenuOptions" className="hamburgerMenuContainer">
                    <Options/>
                </div>

                : null
            }
        </div>
    )
}

export default HamburgerMenu