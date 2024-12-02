import { Outlet } from 'react-router-dom';

const ProductsPage = () => {
  return (
    <div style={{ padding: 10 }}>
      <h1>Products Page</h1>
      <Outlet/>
    </div>
  );
};

export default ProductsPage;