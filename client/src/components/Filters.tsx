import { useFilters } from "../hooks/useFilters";

export const Filters = () => {
  const { handleInputChange, handleSelectChange } = useFilters();

  return (
    <section className="flex gap-4 mt-4">
      <form>
        <input
          type="text"
          onChange={handleInputChange}
          className="border-2 border-black h-10 px-2 text-black"
        />
      </form>

      <select
        onChange={handleSelectChange}
        className="border-2 border-black text-xl text-black"
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="jewelery">Jewelery</option>
      </select>
    </section>
  );
};
