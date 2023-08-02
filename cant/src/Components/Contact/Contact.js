import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Phone } from '@material-ui/icons';
import { Mail } from '@mui/icons-material';

const useStyles = makeStyles({
    stickyContactIcon: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 100,
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#fff',
      boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      transition: 'transform 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    icon: {
      color: '#000',
      fontSize: 30,
    },
  });
  
  
export const Contact = () => {
    const classes = useStyles();

    const handlePhoneClick = () => {
        const phoneNumber = "9080525329"; // Replace with the desired phone number
        const telLink = `tel:${phoneNumber}`;
        window.open(telLink);
      };
    
      const handleChatClick = () => {
        const email = "soundaryaa.sitaram@gmail.com"; // Replace with your email address
        const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        window.open(gmailComposeLink);
      };
    
  
    return (
        <div className={classes.stickyContactIcon}>
        <Phone className={classes.icon} onClick={handlePhoneClick} />
        <Mail className={classes.icon} onClick={handleChatClick} />
      </div>
      
    );
}
