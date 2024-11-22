import { PaginationInput } from "./pagination";

export interface Product {
    _id?: string;
    name?: string;
    price?: number;
    description?: string;
}

export interface ProductFilters extends PaginationInput {
    id?: string[];
    name?: string[];
    minPrice?: string;
    maxPrice?: string;
}