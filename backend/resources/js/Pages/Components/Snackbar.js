// @flow
import * as React from 'react';
import {SnackbarProvider as NotistackProvider} from "notistack";
import CloseIcon from "@material-ui/icons/Close"
import {IconButton} from "@material-ui/core";

export const SnackbarProvider = (props) => {
    let snackBarProviderRef
    // @ts-ignore
    const defaultProps= {
        autoHideDuration: 3000,
        maxSnack: 3,
        anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
        },
        ref: (el) => snackBarProviderRef = el,
        action: (key)=>(
            <IconButton color={"inherit"}
                        style={{fontSize: 20}}
                        onClick={() => snackBarProviderRef.closeSnackbar(key)}
            >
                <CloseIcon/>
            </IconButton>
        )
    }
    const newProps = {...defaultProps, ...props}

    return (
        <NotistackProvider {...newProps}>
            {props.children}
        </NotistackProvider>
    );
};
