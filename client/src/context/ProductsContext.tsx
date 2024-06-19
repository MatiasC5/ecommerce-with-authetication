import { createContext, useState } from "react";
import { getAllProducts } from "../api/products.ts";

interface ProductContextProps {
  children: React.ReactNode;
}

interface Products {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  id: number;
}

export const ProductContext = createContext({
  products: [] as Products[],
  setProducts: (products: Products[]) => {
    products;
  },
  getProducts: () => {},
});

export const ProductsProvider = ({ children }: ProductContextProps) => {
  const [products, setProducts] = useState<Products[]>([]);

  const getProducts = async () => {
    const res = await getAllProducts();
    setProducts(res.data);
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, getProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
