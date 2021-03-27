import * as React from 'react';

import {Typography, Modal, CircularProgress, makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    label: {
        marginRight: '20px'
    }
}))

export const Loading = (props) => {
    const classes = useStyles()
    return (
        <Modal
            open={props.open}
            className="d-flex justify-content-center align-items-center h-100 outline-none"
        >
            <div className="bg-white d-flex align-items-center rounded p-3 outline-none">
                <CircularProgress size={25} className={classes.label}/>
                <Typography variant='subtitle1' >{props.msg}
                </Typography>
            </div>
        </Modal>
    );
};
