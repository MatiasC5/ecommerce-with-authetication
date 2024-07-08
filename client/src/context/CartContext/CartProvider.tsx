import { useContext } from "react";
import CartContext from "./CartContext";

interface propsContext {
  children: React.ReactNode;
}

const CartProvider = ({ children }: propsContext) => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
