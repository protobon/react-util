import React, { useState } from 'react';
import { useLogout } from '../../../hooks/Auth/useLogout';
import { Box, Button } from '@mui/material';
import Confirm from '../Confirm';

export const LogoutButton: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const logout = useLogout();

    const handleLogoutClick = () => {
        setShowModal(true);
    };

    const handleConfirmLogout = () => {
        logout();
        setShowModal(false);
    };

    const handleCancelLogout = () => {
        setShowModal(false);
    };

    return (
        <Box>
            <Button onClick={handleLogoutClick}>Logout</Button>
            {showModal && 
            <Confirm 
            legend="Logout" 
            open={showModal} 
            onClose={handleCancelLogout} 
            onConfirm={handleConfirmLogout} 
            />}
        </Box>
    );
};
