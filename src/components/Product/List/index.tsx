import { Box, Grid2 } from '@mui/material';
import ProductCard from '../Card';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../../types/product';

const ProductsGrid = () => {
  const products = useLoaderData() as Product[]

  return (
    <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: 5,
    }}
    >
      <Grid2 
      container
      spacing={2}
      sx={{ padding: 2, display: "flex", justifyContent: "center" }}
      >
        {products?.map((product) => (
          <Grid2
          key={product._id}
          size={{ xs: 12, md: 6, lg: 4, xl: 3 }}
          >
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ProductsGrid;