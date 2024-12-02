import { Outlet } from 'react-router-dom';
import ProductHeader from './Head';
import { Box } from '@mui/material';

const ProductsPage = () => {
  return (
    <Box>
      <ProductHeader/>
      <Outlet/>
    </Box>
  );
};

export default ProductsPage;