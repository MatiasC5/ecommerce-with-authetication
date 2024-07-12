import { Product } from "../helpers/productInterface";
import { useCart } from "../hooks/useCart";

export const CartPage = () => {
  const { cart } = useCart();

  return (
    <section className="h-screen">
      {cart.map((p: Product) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <img
            src={p.image}
            alt={p.title}
            className="w-20 h-20 object-contain"
          />
          <span>{p.quantity}</span>
        </div>
      ))}
    </section>
  );
};
