import { createContext, useState } from "react";
import { getCategories } from "../api/products";
interface Filters {
  category: string;
  title: string;
  price: number;
}

interface ProductContextProps {
  children: React.ReactNode;
}

export const FiltersContext = createContext({
  filters: {} as Filters,
  setFilters: (filters: Filters) => {
    filters;
  },
  getProductCategory: () => {},
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => {
    event;
  },
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
    event;
  },
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => {
    event;
  },
});

export const FiltersProvider = ({ children }: ProductContextProps) => {
  const [filters, setFilters] = useState<Filters>({
    category: "all",
    title: "",
    price: 0,
  });

  const getProductCategory = async () => {
    const res = await getCategories();
    const { data } = res;
    const category = data.map((category: string) => {
      return category;
    });
    setFilters({ ...filters, category });
  };

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;
    setFilters({ ...filters, title: value });
  }

  function handleSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.currentTarget.value;
    setFilters({ ...filters, category: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
        getProductCategory,
        handleInputChange,
        handleSelectChange,
        handleSubmit,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
