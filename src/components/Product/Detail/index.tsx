import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProduct } from '../../../hooks/Product/useGetProducts';
import { CircularProgress, Typography, Box } from '@mui/material';
import { Carousel } from '../../../common/components';

const ProductDetail: React.FC = () => {
    const { id } = useParams<string>();
    
    const { data: product, isLoading, error } = useGetProduct(id);

    if (isLoading) return <CircularProgress />;
    if (error) throw error;

    return (
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} height="100vh">
            <Box flex={1} mb={{ xs: 5, md: 1 }}>
            {product?.media && product.media.length > 0 ? (
                <Carousel
                images={product.media.map((src) => ({
                    src,
                    alt: "Product image",
                }))}
                />
            ) : (
                <Typography variant="body2">No media available</Typography>
            )}
            </Box>
            <Box flex={1} ml={{ lg: 2 }}>
                <Typography variant="h4" gutterBottom>{product?.name}</Typography>
                <Typography variant="body1">{product?.description}</Typography>
            </Box>
        </Box>
    );
};

export default ProductDetail;