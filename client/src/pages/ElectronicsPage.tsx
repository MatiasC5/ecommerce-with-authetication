import { AddToCart, RemoveFromCart } from "../../public/Icons";
import { SearchInput } from "../components/Filters/SearchInput";

import { filterProducts } from "../helpers/filterProducts";
import { Product } from "../helpers/productInterface";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../hooks/useCart";
import { useFilters } from "../hooks/useFilters";
import { useProducts } from "../hooks/useProducts";

export const ElectronicsPage = () => {
  const { products } = useProducts();
  const { filters } = useFilters();
  const filteredProducts = filterProducts(products, filters);
  const { isLoading } = useAuth();
  const { addToCart } = useCart();

  return (
    <>
      <SearchInput />

      <section className="flex w-full px-8">
        {!isLoading ? (
          <ul className="flex flex-col w-full  p-10 gap-24">
            {filteredProducts.map((product: Product) => {
              return (
                product.category === "electronics" && (
                  <li className="w-full" key={product.id}>
                    <h3 className=" text-xl m-4">{product.title}</h3>
                    <div className="flex gap-4 text-lg ">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-20 h-20 object-contain"
                      />
                      <p className="font-semibold">{product.description}</p>
                    </div>

                    <strong>$ {product.price.toFixed(2)}</strong>
                    <div className="flex gap-2">
                      <button
                        className="border border-black p-2 mt-4 rounded-md "
                        onClick={() => addToCart(product)}
                      >
                        {" "}
                        <AddToCart />
                      </button>
                      <button className="border border-black  p-2 mt-4 rounded-md ">
                        <RemoveFromCart />
                      </button>
                    </div>
                  </li>
                )
              );
            })}
          </ul>
        ) : (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </section>
    </>
  );
};
