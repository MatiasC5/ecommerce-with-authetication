import { useFilters } from "../hooks/useFilters";
import { SearchIcon } from "../../public/Icons";

export const Filters = () => {
  const { handleInputChange, handleSelectChange, handleSubmit } = useFilters();

  return (
    <section className="flex flex-col items-center gap-4 mt-4">
      <form onSubmit={handleSubmit} className="flex items-center">
        <label htmlFor="search">
          <SearchIcon />
        </label>
        <input
          type="text"
          onChange={handleInputChange}
          className="border border-black rounded-full h-10 px-4 text-black w-80"
          id="search"
          autoComplete="off"
        />
      </form>

      <select
        onChange={handleSelectChange}
        className="border border-black  text-xl  text-black w-40"
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
