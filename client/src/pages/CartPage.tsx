import {
  DecrementProductFromCart,
  IncrementProductInCart,
  RemoveFromCart,
} from "../../public/Icons";
import { Product } from "../helpers/productInterface";
import { useCart } from "../hooks/useCart";

export const CartPage = () => {
  const { cart, addToCart, substractFromCart, deleteFromCart } = useCart();

  return (
    <section className="flex items-center justify-center w-full">
      <ul className="h-screen border border-black px-2 my-2 w-6/12">
        {cart.map((p: Product) => (
          <li className="flex flex-col justify-center items-start" key={p.id}>
            <h3 className="text-xl mt-4 ">{p.title}</h3>
            <div className="flex justify-between w-full items-center align-middle">
              {" "}
              <div className="flex  items-center mt-2 gap-4">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-20  object-contain"
                />
                <span className="font-bold text-xl w-10 h-10 border border-black rounded-full flex items-center justify-center mt-4">
                  {p.quantity}
                </span>
              </div>
              <div className="flex gap-2 ">
                <button
                  className="border border-black  p-2 mt-4 rounded-md "
                  onClick={() => addToCart(p)}
                >
                  <IncrementProductInCart />
                </button>
                <button
                  className="border border-black  p-2 mt-4 rounded-md "
                  onClick={() => substractFromCart(p)}
                >
                  <DecrementProductFromCart />
                </button>
                <button
                  className="border border-black  p-2 mt-4 rounded-md "
                  onClick={() => deleteFromCart(p)}
                >
                  {" "}
                  <RemoveFromCart />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
