import { useContext } from "react";
import { FiltersContext } from "../context/filters";
import { products } from "../mocks/products.json";

export default function useFilter() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return { filteredProducts, filters, setFilters };
}
