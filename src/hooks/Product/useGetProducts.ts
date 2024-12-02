import { useQuery } from "react-query";
import { Product, ProductFilters } from '../../types/product';
import api from "../../common/api";
import { endpoints } from "../../common/endpoints";
import { LoaderFunction, LoaderFunctionArgs } from "react-router-dom";

const fetchProducts = async (filters: ProductFilters): Promise<Product[]> => {
  try {
    const params = new URLSearchParams();
  
    if (filters.id) {
      filters.id.forEach((id) => params.append('id', id));
    }
    if (filters.name) {
      filters.name.forEach((name) => params.append('name', name));
    }
    if (filters.minPrice) {
      params.append('minPrice', filters.minPrice);
    }
    if (filters.maxPrice) {
      params.append('maxPrice', filters.maxPrice);
    }
    if (filters.page) {
      params.append('page', filters.page.toString());
    }
    if (filters.limit) {
      params.append('limit', filters.limit.toString());
    }
  
    const res = await api.get<Product[]>(endpoints.products.default, {
      params,
    });

    if (res.status !== 200 && res.status !== 201) {
      throw new Error("Error fetching products");
    }
  
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching products");
  }
};

export const useFindProducts = (filters: ProductFilters) => {
    return useQuery({
        queryKey: ['products', filters],
        queryFn: () => fetchProducts(filters),
        keepPreviousData: true,
    });
};

export const productsLoader: LoaderFunction = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const filters: ProductFilters = {
    id: url.searchParams.getAll("id"),
    name: url.searchParams.getAll("name"),
    minPrice: url.searchParams.get("minPrice") || undefined,
    maxPrice: url.searchParams.get("maxPrice") || undefined,
    page: url.searchParams.get("page") ? parseInt(url.searchParams.get("page")!) : undefined,
    limit: url.searchParams.get("limit") ? parseInt(url.searchParams.get("limit")!) : undefined,
  };

  return fetchProducts(filters);
};

const fetchOneProduct = async (id?: string): Promise<Product> => {
  try {
    if (!id) throw new Error("No product id provided");

    const res = await api.get<Product>(endpoints.products.byId(id));

    if (res.status !== 200 && res.status !== 201) {
      throw new Error("Error fetching product");
    }
  
    const product = res.data;
    if (!product) throw new Error("Product not found");

    return product;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching product");
  }
};

export const useGetProduct = (id?: string) => {
  return useQuery(
    ['product', id],
    () => fetchOneProduct(id),
    {
      retry: false,
    }
  );
};