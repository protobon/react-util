import { useMutation } from 'react-query';
import api from '../../common/api';
import { Product } from '../../types/product';
import { endpoints } from '../../common/endpoints';

async function createProduct(product: Product): Promise<Product> {
    try {
        const res = await api.post(endpoints.products.default, product);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const useCreateProduct = () => useMutation({ mutationFn: createProduct });
