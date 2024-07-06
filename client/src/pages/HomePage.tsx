import { CategoriesList } from "../components/CategoriesList";
import { Filters } from "../components/Filters";

import { Products } from "../components/Products";

const HomePage = () => {
  return (
    <>
      <Filters />
      <div className="flex w-full px-8">
        <CategoriesList />
        <Products />
      </div>
    </>
  );
};

export default HomePage;
