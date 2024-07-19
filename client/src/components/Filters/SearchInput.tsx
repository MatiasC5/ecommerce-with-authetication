import { SearchIcon } from "../../../public/Icons";
import { useFilters } from "../../hooks/useFilters";

export const SearchInput = () => {
  const { handleInputChange, handleSubmit } = useFilters();
  return (
    <form onSubmit={handleSubmit} className="flex items-center mt-2">
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
  );
};
