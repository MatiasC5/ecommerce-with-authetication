import { useCart } from "../hooks/useCart";

export const CartPage = () => {
  const { cart } = useCart();

  return (
    <section>
      <div>carrito</div>
    </section>
  );
};
