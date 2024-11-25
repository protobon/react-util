import React, { useState } from 'react';
import { useLogout } from '../../../hooks/Auth/useLogout';

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
        <div>
            <button onClick={handleLogoutClick}>Logout</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Logout?</p>
                        <button onClick={handleConfirmLogout}>Yes</button>
                        <button onClick={handleCancelLogout}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
};
