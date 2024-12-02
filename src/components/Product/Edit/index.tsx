import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetProduct } from '../../../hooks/Product/useGetProducts';
import { CircularProgress, Box, TextField, Button } from '@mui/material';
import { useUpdateProduct } from '../../../hooks/Product/useUpdateProduct';
import { useQueryClient } from 'react-query';


const EditProduct: React.FC = () => {
    const { id } = useParams<string>();
    const { data: product, isLoading, error } = useGetProduct(id);
    const { mutateAsync: updateProduct } = useUpdateProduct();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [media, setMedia] = useState('');
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (product) {
            setName(product?.name ?? '');
            setDescription(product?.description ?? '');
            setPrice(product?.price ?? '');
            setMedia(product?.media?.join(',') ?? '');
        }
    }, [product]);

    if (isLoading) return <CircularProgress />;
    if (error) throw error;

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };

    const handleMediaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMedia(event.target.value);
    };

    const handleSave = async () => {
        const mediaArray = media.split(',');
        await updateProduct({ _id: id, name, description, price, media: mediaArray });
        queryClient.invalidateQueries(['products', id]);
        navigate(-1);
    };

    return (
        <Box 
        sx={{
            display: "flex",
            flexDirection: { xs: 'column', md: 'row' },
            height: "100vh",
            justifyContent: "space-between",
        }}
        >
            <Box flex={1} mb={{ xs: 5, md: 1 }} paddingX={{ xs: 1, md: 3 }}>
                <TextField
                    label="Media"
                    value={media}
                    onChange={handleMediaChange}
                    fullWidth
                    margin="normal"
                />
            </Box>
            <Box flex={1}>
                <TextField
                    label="Product Name"
                    value={name}
                    onChange={handleNameChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Product Price"
                    value={price}
                    onChange={handlePriceChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Product Description"
                    value={description}
                    onChange={handleDescriptionChange}
                    fullWidth
                    margin="normal"
                    multiline
                    rows={4}
                />
                <Box sx={{ display: "flex", justifyContent: "space-between"}}>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Save
                    </Button>
                    <Button variant="contained" color="inherit" onClick={() => navigate(-1)}>
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default EditProduct;