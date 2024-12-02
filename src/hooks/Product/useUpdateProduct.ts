import { useMutation } from "react-query";
import api from "../../common/api";
import { endpoints } from "../../common/endpoints";
import { Product } from "../../types/product";

async function updateProduct(product: Product): Promise<Product> {
    try {
        const { _id, ...rest } = product;
        const res = await api.put(`${endpoints.products.default}/${_id}`, rest);
        return res.data;
    } catch (error) {
        throw error;
    }
};

export const useUpdateProduct = () => useMutation({ mutationFn: updateProduct });