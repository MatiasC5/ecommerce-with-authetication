import { Link } from "react-router-dom";
import { Cart } from "../../public/Icons";
import { CategoriesList } from "../components/Categories/CategoriesList";

import { Products } from "../components/Products/Products";
import { Filters } from "../components/Filters/Filters";

const HomePage = () => {
  return (
    <>
      <Filters />
      <Link to="/cart">
        <div className="absolute top-24 right-4 border border-black p-2 rounded-full cursor-pointer">
          <Cart />
        </div>
      </Link>

      <div className="flex w-full px-8">
        <CategoriesList />
        <Products />
      </div>
    </>
  );
};

export default HomePage;
