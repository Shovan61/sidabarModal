import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import { menuItem, socialLinks } from './data';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        width: '30%',
        position: 'relative',
        left: '-100%',
        transition: 'all 1s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
    },
    show: {
        left: '0%',
    },
    closeBtn: {
        alignSelf: 'flex-end',
    },
    menuItems: {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: '',
        justifyContent: 'center',
        cursor: 'pointer',
        '&:firstChild': {
            marginLeft: '1rem',
        },
    },
    item: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '1rem',
        height: '3rem',
        transition: 'all 0.1s ease-in',
        '&:hover': {
            backgroundColor: '#555',
            color: 'white',
        },
        '&:hover p': {
            color: 'white',
        },
    },
    social: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'relative',
        top: '40%',
    },
    socialIcon: {
        color: '#2196f3',
        cursor: 'pointer',
    },
});

function SideBar() {
    const classes = useStyles();
    const [isClose, setisClose] = useState(true);

    const handleClose = () => {
        setisClose(false);
    };

    return (
        <Paper
            elevation={3}
            className={`${isClose && `${classes.root} ${classes.show}`} ${
                !isClose && `${classes.root}`
            } `}>
            <IconButton className={classes.closeBtn} onClick={handleClose}>
                <CloseIcon />
            </IconButton>
            <Divider />

            {/* menu Items */}
            <div className={classes.menuItems}>
                {menuItem.map((cur) => (
                    <div className={classes.item} key={cur.id}>
                        <span
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: '1rem',
                            }}>
                            {cur.icon}
                        </span>
                        <p
                            style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginLeft: '2rem',
                            }}>
                            {cur.name}
                        </p>
                    </div>
                ))}
            </div>

            {/* Social Icons */}
            <div className={classes.social}>
                {socialLinks.map((cur) => (
                    <span className={classes.socialIcon} key={cur.id}>
                        {cur.icon}
                    </span>
                ))}
            </div>
        </Paper>
    );
}

export default SideBar;
