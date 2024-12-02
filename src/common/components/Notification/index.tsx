import React from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNotification } from '../../context/notification';

const Notification: React.FC = () => {
  const { notifications, removeNotification } = useNotification();

  return (
    <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
      {notifications.map(notification => (
        <Paper key={notification.id} sx={{ mb: 2, p: 2, display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ flex: 1 }}>{notification.message}</Typography>
          <IconButton onClick={() => removeNotification(notification.id)}>
            <CloseIcon />
          </IconButton>
        </Paper>
      ))}
    </Box>
  );
};

export default Notification;