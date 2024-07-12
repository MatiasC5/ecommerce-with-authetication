import { createContext, useState } from "react";
import { getAllProducts } from "../../api/products";
import { Product } from "../../helpers/productInterface";

interface ProductContextProps {
  children: React.ReactNode;
}

export const ProductContext = createContext({
  products: [] as Product[],
  setProducts: (products: Product[]) => {
    products;
  },
  getProducts: () => {},
});

export const ProductsProvider = ({ children }: ProductContextProps) => {
  const [products, setProducts] = useState<Product[]>([]);

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
