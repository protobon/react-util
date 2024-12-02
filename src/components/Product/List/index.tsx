import { Box, Grid2 } from '@mui/material';
import ProductCard from '../Card';
import { Product, ProductFilters } from '../../../types/product';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchProducts } from '../../../hooks/Product/useGetProducts';

const ProductsGrid = () => {
  const [filters, setFilters] = useState<ProductFilters>({
    page: 1,
    limit: 10,
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const observerRef = useRef<HTMLDivElement | null>(null);

  // Fetch more products when the observer triggers
  const fetchMoreProducts = useCallback(async () => {
    if (isFetching || !hasNextPage) return;

    setIsFetching(true);

    try {
      const newProducts = await fetchProducts(filters);

      setProducts((prev) => [...prev, ...newProducts]);
      setFilters({...filters, page: (filters?.page || 1) + 1});

      if (newProducts.length < (filters.limit || 10)) {
        setHasNextPage(false);
      }
    } catch (error) {
        throw error;
    } finally {
        setIsFetching(false);
    }
  }, [filters, isFetching, hasNextPage]);

  // Set up the IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchMoreProducts();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  }, [fetchMoreProducts]);

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
      {isFetching ? <p>Loading more products...</p> : null}
      {hasNextPage ? <div ref={observerRef} style={{ height: 1 }} /> : <p>No more products to load.</p>}
    </Box>
  );
};

export default ProductsGrid;