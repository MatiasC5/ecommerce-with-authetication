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
  substractFromCart: (product: Product) => {
    product;
  },
  deleteFromCart: (product: Product) => {
    product;
  },
});

const CartProvider = ({ children }: propsContext) => {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCart(product: Product) {
    const indexProduct = cart.findIndex((p) => p.id === product.id);

    if (indexProduct >= 0) {
      const newCart = cart.map((p) => {
        return p.id === product.id ? { ...p, quantity: (p.quantity += 1) } : p;
      });
      setCart(newCart);
    } else {
      setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }
  }

  function substractFromCart(product: Product) {
    const indexProduct = cart.findIndex((p) => p.id === product.id);

    if (indexProduct >= 0) {
      const newCart = cart.map((p) => {
        return p.id === product.id ? { ...p, quantity: (p.quantity -= 1) } : p;
      });
      setCart(newCart);
    } else {
      setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
    }
  }

  function deleteFromCart(product: Product) {
    setCart(cart.filter((p) => p.id !== product.id));
  }

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, substractFromCart, deleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
