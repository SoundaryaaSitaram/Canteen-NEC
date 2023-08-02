import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { Element } from 'react-scroll';
import { AccountCircle } from '@mui/icons-material';
import { Menu,MenuItem } from '@mui/material';
// import { Element, Link as ScrollLink } from 'react-scroll';
import  {Link}  from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
import "./Header.css";
export const Header = () => {
  const[anchorEl,setAnchorEl]=useState(null);
  const handleClick = (event)=>{
    setAnchorEl(event.currentTarget);
  }
  const handleClose = (event)=>{
    setAnchorEl(null);
  }
  return (
    <Element className='header'>
        <div className='headelem_left'>
                <h1>NEC-CAFETARIA</h1>
        </div>
        <div className='headelem_right'>

          <Link to="Menu" smooth={true} duration={500}>
            <h1>Menu</h1>
          </Link>
          <Link to="My Orders" smooth={true} duration={500}>
            <h1>My Orders</h1>
          </Link>
          <Link to="MyCart" smooth={true} duration={500}>
            <h1>My Cart</h1>
          </Link>
          {/* <ScrollLink to='Menu' smooth={true} duration={500}>
          <h1>Menu</h1>
        </ScrollLink>
        <ScrollLink to='MyOrders' smooth={true} duration={500}>
          <h1>My Orders</h1>
        </ScrollLink>
        <ScrollLink to='MyCart' smooth={true} duration={500}>
          <h1>My Cart</h1>
        </ScrollLink> */}
        {/* <a href="#Menu">Menu</a>
<a href="#MyOrders">My Orders</a>
<a href="#MyCart">My Cart</a> */}

            <span>
                {/* <Link to="Profile"> */}
                    <IconButton onClick={handleClick}>
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}>
                        <MenuItem  onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>LogOut</MenuItem>
                    </Menu>
                            {/* </Link> */}
            </span>
        </div>
    </Element>
  )
}
// .headelem_right > span > .MuiIconButton-root
// {
//     display: flex;
//     color: red;
//     font-size: 30px;
// }
