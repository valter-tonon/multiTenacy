import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
    return (
        <Dialog
            open={props.open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Excluir</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Voce deseja mesmo excluir este item?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color="primary" variant={"outlined"} onClick={() => props.onClose()}>
                    Cancelar
                </Button>
                <Button  color="secondary" variant={"contained"} onClick={() => props.onConfirm()}>
                    Excluir
                </Button>
            </DialogActions>
        </Dialog>
    );
}
