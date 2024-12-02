import React from 'react';
import { Typography, IconButton, Menu, MenuItem, Box } from '@mui/material';
import { ArrowBack, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { ProductMenuItem } from '../../../types/product';

const ProductHeader: React.FC = () => {
    const [targetEl, setTargetElement] = React.useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setTargetElement(event.currentTarget);
    };

    const handleClose = () => {
        setTargetElement(null);
    };


    const handleCreateProduct = () => {
        handleClose();
        navigate('/products/create');
    };
    
    const handleEditProduct = () => {
        handleClose();
        console.log('Edit Product clicked');
    };
    
    const handleDeleteProduct = () => {
        handleClose();
        console.log('Delete Product clicked');
    };

    const menuItems: ProductMenuItem[] = [
        {
            "label": "Create Product",
            "onClick": handleCreateProduct,
        },
        {
            "label": "Edit Product",
            "onClick": handleEditProduct,
        },
        {
            "label": "Delete Product",
            "onClick": handleDeleteProduct,
        }
    ];

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px',
            marginBottom: '20px',
        }}>
            <ArrowBack sx={{ cursor: "pointer", m: 2, left: 2, bottom: 1 }} onClick={() => navigate(-1)}/>
            <Typography variant="h4" style={{ flexGrow: 1 }}>
                Products
            </Typography>
            <div>
                <IconButton
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={targetEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(targetEl)}
                    onClose={handleClose}
                >
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} onClick={item.onClick}>{item.label}</MenuItem>
                    ))}
                </Menu>
            </div>
        </Box>
    );
};

export default ProductHeader;