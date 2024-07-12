import { Product } from "./productInterface";

interface Filters {
  category: string;
  title: string;
  price: number;
}

export const filterProducts = (products: Product[], filters: Filters) => {
  return products.filter((product) => {
    if (
      product.price >= filters.price &&
      (filters.category === "all" || filters.category === product.category)
    ) {
      return (
        product.title.toLowerCase().includes(filters.title.toLowerCase()) &&
        (filters.category === "all" ||
          product.category
            .toLowerCase()
            .includes(filters.category.toLowerCase())) &&
        product.price >= filters.price
      );
    }
  });
};
