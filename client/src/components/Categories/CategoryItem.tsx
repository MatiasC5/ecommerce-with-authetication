import { Link } from "react-router-dom";
import { useProducts } from "../../hooks/useProducts";

export const CategoryItem = () => {
  const { category } = useProducts();

  return (
    <ul className="gap-4 flex flex-col text-violet-500 font-semibold">
      {category.map((c, index) => (
        <Link to={c} key={index}>
          <li className="hover:underline ">{c}</li>
        </Link>
      ))}
    </ul>
  );
};
