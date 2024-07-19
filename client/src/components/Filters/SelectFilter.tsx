import { useFilters } from "../../hooks/useFilters";
import { useProducts } from "../../hooks/useProducts";

export const SelectFilter = () => {
  const { handleSelectChange } = useFilters();
  const { category } = useProducts();
  const [electronics, jewelery, mensClothing, womensClothing] = category;
  return (
    <select
      onChange={handleSelectChange}
      className="border border-black  text-xl  text-black w-40"
    >
      <option value="all">All</option>
      <option value="electronics">{electronics}</option>
      <option value="men's clothing">{mensClothing}</option>
      <option value="women's clothing">{womensClothing}</option>
      <option value="jewelery">{jewelery}</option>
    </select>
  );
};
