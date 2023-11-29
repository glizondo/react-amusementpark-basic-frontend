import '../style.css';
import Mikey from '../images/mikey.jpg';
import Menu_Icon from '../images/menu.svg';
import React, { useState } from 'react';
import Body from '../components/Body';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';


function Header() {

    const [popup, setPopup] = useState(false);
    const handlePopup = () => setPopup(popup => !popup);
    const [menuPage, setMenuPage] = useState("main");

    function handleMenuMain (){
        setMenuPage("main");
    } 

    return (
        <div>
            <header className="header">
                <img className="header-menu" src={Menu_Icon} />
                <h1 onClick={handleMenuMain} className="header-title">Disneyland Paris</h1>
                <img className="header-mikey" src={Mikey} onClick={handlePopup} />
            </header>
            {popup && <Popup />}
            <Body menu={menuPage} />
        </div>
    )

    function Popup() {

        function handleClick() {
            setMenuPage("photos")
            handlePopup()
        }

        return (
            <div>
                <Paper className='popup'>
                    <MenuList>
                        <MenuItem>
                            <ListItemText>My Account</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemText>Map</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemText>My Reservations</ListItemText>
                        </MenuItem>
                        <MenuItem>
                            <ListItemText onClick={handleClick}>My Photos</ListItemText>
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemText>Log Out</ListItemText>
                        </MenuItem>
                    </MenuList>
                </Paper>

            </div>

        )
    }


}

export default Header;