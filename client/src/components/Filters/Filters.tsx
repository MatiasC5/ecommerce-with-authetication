import { SearchInput } from "./SearchInput";
import { SelectFilter } from "./SelectFilter";

export const Filters = () => {
  return (
    <section className="flex flex-col items-center gap-4 mt-4">
      <SearchInput />
      <SelectFilter />
    </section>
  );
};
