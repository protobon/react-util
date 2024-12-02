import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ConfirmProps {
    legend: string;
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({ legend, open, onClose, onConfirm }) => {
    return (
        <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{
            style: {
                backdropFilter: 'blur(5px)',
                width: 300,
                height: 250,
            },
        }}
        >
            <DialogTitle>
                Are you sure?
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Typography>{legend}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose} color="warning">
                    No
                </Button>
                <Button onClick={onConfirm} color="primary" autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default Confirm;