import { Link } from "react-router-dom";

export const CategoriesList = () => {
  return (
    <aside className="w-48 mt-16 border-r-2">
      <ul className="gap-4 flex flex-col text-violet-500 font-semibold">
        <Link to="/electronics">
          <li className="hover:underline hover:text-violet-400 ">
            Electronics
          </li>
        </Link>
        <Link to="/men">
          <li className="hover:underline hover:text-violet-400 ">
            Men's Clothing
          </li>
        </Link>
        <Link to="/women">
          {" "}
          <li className="hover:underline hover:text-violet-400 ">
            Women's Clothing
          </li>
        </Link>
        <Link to="jewelery">
          {" "}
          <li className="hover:underline hover:text-violet-400 ">Jewelery</li>
        </Link>
      </ul>
    </aside>
  );
};
