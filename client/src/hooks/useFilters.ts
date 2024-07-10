import { useContext } from "react";
import { FiltersContext } from "../context/FiltersContext/FiltersContext";

export const useFilters = () => {
  const context = useContext(FiltersContext);
  if (!context)
    throw new Error("useProducts must be used within FiltersProvider");
  return context;
};
