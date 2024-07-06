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
    <ul className="flex flex-col w-full  p-10 gap-24">
      {filteredProducts.map((product) => {
        return (
          <li className="w-full">
            <h3 className="truncate w-40 text-xl m-4">{product.title}</h3>
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
              <button className="bg-sky-400 font-bold p-2 mt-4 rounded-md hover:bg-sky-300">
                {" "}
                Add
              </button>
              <button className="bg-red-500 font-bold p-2 mt-4 rounded-md hover:bg-red-300">
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
