import { createContext, useState } from "react";
import { Product } from "../../helpers/productInterface";

interface propsContext {
  children: React.ReactNode;
}

export const CartContext = createContext({
  cart: [] as Product[],
  setCart: (cart: Product[]) => {
    cart;
  },
  addToCart: (product: Product) => {
    product;
  },
});

const CartProvider = ({ children }: propsContext) => {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    const indexProduct = cart.findIndex((p) => p.id === product.id);

    if (indexProduct > 0) {
      cart.map((p) => {
        setCart([{ ...p, quantity: (p.quantity += 1) }]);
      });
    } else {
      setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
