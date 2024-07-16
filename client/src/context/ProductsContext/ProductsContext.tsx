import { createContext, useEffect, useState } from "react";
import { getAllProducts, getCategories } from "../../api/products";
import { Product } from "../../helpers/productInterface";

interface ProductContextProps {
  children: React.ReactNode;
}

export const ProductContext = createContext({
  products: [] as Product[],
  category: [],
  setProducts: (products: Product[]) => {
    products;
  },
  getProducts: () => {},
  getProductsCategories: () => {},
});

export const ProductsProvider = ({ children }: ProductContextProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState([]);

  const getProducts = async () => {
    const res = await getAllProducts();
    setProducts(res.data);
  };

  const getProductsCategories = async () => {
    const res = await getCategories();
    setCategory(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProductsCategories();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        category,
        setProducts,
        getProducts,
        getProductsCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
