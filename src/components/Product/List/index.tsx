import { Grid2 } from '@mui/material';
import ProductCard from '../Card';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../../types/product';

const ProductsPage = () => {
  const products = useLoaderData() as Product[]

  return (
    <div style={{ padding: 10 }}>
      <h1>Products</h1>
      <Grid2 
        container
        spacing={2}
        >
        {products?.map((product) => (
          <Grid2
          key={product._id}
          size={{ xs: 12, sm: 6, lg: 4, xl: 3 }}
          >
            <ProductCard product={product} />
          </Grid2>
        ))}
      </Grid2>
    </div>
  );
};

export default ProductsPage;