import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles({
    root: {
        height: '100%',
        width: '100%',
        position: 'relative',
        left: '48%',
        bottom: '28rem',
    },
});
function Modal() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button variant='contained' color='primary'>
                Open
            </Button>
            <Dialog />
        </div>
    );
}

export default Modal;
