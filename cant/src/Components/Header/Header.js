import React, { useState,useEffect } from 'react';
import { IconButton,Tooltip } from '@material-ui/core';
import { Element, Link as ScrollLink } from 'react-scroll'; // Import ScrollLink
import { AccountCircle } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import "./Header.css";
 

export const Header = () => {

  const [userEmail, setUserEmail] = useState(null);
 useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserEmail(user.email);
      } else {
        setUserEmail(null);
      }
    });
    return () => unsubscribe();
  }, []);




  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
  };
  return (
    <Element className='header'>
      <div className='headelem_left'>
        <h1>CAFE ARYAA</h1>
      </div>
      <div className='headelem_right'>
        <ScrollLink to='Menu' smooth={true} duration={500}>
          <h1>Menu</h1>
        </ScrollLink>
        <ScrollLink to='myorders' smooth={true} duration={500}>
          <h1>My Orders</h1>
        </ScrollLink>
        <ScrollLink to='mycart' smooth={true} duration={500}>
          <h1>My Cart</h1>
        </ScrollLink>
      </div>
      <div className='profile'>
      
        <span>
        <Tooltip title={userEmail || ''}>
          <IconButton onClick={handleClick}>
            <AccountCircle />
          </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}>
            <MenuItem onClick={logout}>LogOut</MenuItem>
          </Menu>
        </span>
      </div>
    </Element>
  );
};


