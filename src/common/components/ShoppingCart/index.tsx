import React from 'react';
import { List, ListItem, ListItemText, Box, Paper, Button, TextField, IconButton, Typography, Tooltip } from '@mui/material';
import { useCart } from '../../context/cart';
import Confirm from '../Confirm';
import { Delete, Outbound } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const ShoppingCart: React.FC = () => {
    const { cart, setQuantity, removeFromCart, clearCart } = useCart();
    const [showModal, setShowModal] = React.useState(false);

    const handleConfirmClearCart = () => {
        setShowModal(false);
        clearCart();
    }

    return (
    <Box
        sx={{
          width: '300px',
          height: '100%',
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          borderLeft: '1px solid #ddd',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
          overflowY: 'auto',
        }}
    >
        <Paper
          elevation={0}
          sx={{
            flex: 1,
          }}
        >
            <Typography variant="h6" sx={{ p: 2 }}>Your Cart</Typography>
            <List>
            {cart.map((item, idx) => (
                <ListItem key={idx} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to={`/products/${item._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Tooltip title={item.name}>
                            <ListItemText 
                            primary={item.name ? item.name.length > 15 ? item.name.slice(0, 15) + '...' : item.name : 'N/A'} 
                            secondary={`Price: $${item.price}`}/>
                        </Tooltip>
                    </Link>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField
                        type='number'
                        size='small'
                        value={item.quantity}
                        onChange={(e) => setQuantity(item._id, Math.max(1, parseInt(e.target.value, 10)))}
                        sx={{ width: '80px', mx: 1 }}
                        />
                        <IconButton size='small' onClick={() => removeFromCart(item._id)}>
                            <Delete />
                        </IconButton>
                    </Box>
                </ListItem>
            ))}
            </List>
            {cart.length > 0 && (
            <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                position: "absolute",
                width: '100%',
                bottom: 0,
                zIndex: 1,
                paddingX: 2,
                paddingY: 1,
                backgroundColor: 'background.paper',
            }}>
                <Button
                size='small'
                onClick={() => setShowModal(true)} 
                variant="contained" 
                color="inherit"
                sx={{ marginX: 1 }}
                >
                    Empty Cart
                </Button>
                <Button
                size='small'
                variant='contained'
                color='primary'
                sx={{ marginX: 1 }}
                >
                    Checkout <Outbound />
                </Button>
            </Box>
            )}
        </Paper>
        {showModal && (
            <Confirm
            open={showModal}
            legend="Clear Cart"
            onConfirm={handleConfirmClearCart}
            onClose={() => setShowModal(false)}
            />
        )}
    </Box>
    );
};

export default ShoppingCart;