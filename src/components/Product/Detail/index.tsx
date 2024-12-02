import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProduct } from '../../../hooks/Product/useGetProducts';
import { CircularProgress, Container, Typography, Box } from '@mui/material';

const ProductDetail: React.FC = () => {
    const { id } = useParams<string>();
    
    const { data: product, isLoading, error } = useGetProduct(id);

    if (isLoading) return <CircularProgress />;
    if (error) throw error;

    return (
        <Container>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} height="100vh">
                <Box flex={1} mb={{ xs: 2, md: 0 }}>
                    {product?.media?.map((src, index) => (
                        <Box key={index} mb={2}>
                            <img src={src} alt={`Product media ${index}`} style={{ width: '100%' }} />
                        </Box>
                    ))}
                </Box>
                <Box flex={2} ml={{ md: 3 }}>
                    <Typography variant="h4" gutterBottom>{product?.name}</Typography>
                    <Typography variant="body1">{product?.description}</Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default ProductDetail;