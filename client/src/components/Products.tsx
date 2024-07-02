import { useEffect } from "react";
import { useFilters } from "../hooks/useFilters";
import { filterProducts } from "../helpers/filterProducts";
import { useProducts } from "../hooks/useProducts";

export const Products = () => {
  const { products, getProducts } = useProducts();
  const { filters } = useFilters();

  const filteredProducts = filterProducts(products, filters);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="grid lg:grid-cols-3 items-center p-10 gap-24">
      {filteredProducts.map((product) => {
        return (
          <div
            key={product.id}
            className=" flex flex-col justify-center items-center mt-4"
          >
            <h3 className="truncate w-40 text-xl m-4">{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 object-contain"
            />

            <div className="flex gap-2">
              <button className="bg-sky-400 font-bold p-2 mt-4 rounded-md hover:bg-sky-300">
                {" "}
                Add
              </button>
              <button className="bg-red-500 font-bold p-2 mt-4 rounded-md hover:bg-red-300">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
