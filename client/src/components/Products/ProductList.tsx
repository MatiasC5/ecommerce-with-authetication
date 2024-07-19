import { useAuth } from "../../hooks/useAuth";
import { Loading } from "../Loading/Loading";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const { isLoading } = useAuth();

  return <>{!isLoading ? <ProductItem /> : <Loading />}</>;
};
