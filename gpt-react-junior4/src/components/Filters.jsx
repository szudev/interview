import { useId } from "react";
import useFilter from "../hooks/useFilter";

export default function Filters() {
  const { filters, setFilters } = useFilter();
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = (e) => {
    setFilters((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className="flex justify-between max-w-3xl w-full">
      <div className="flex flex-col gap-1">
        <label htmlFor={minPriceFilterId} className="text-white text-xl">
          Price
        </label>
        <input
          type="range"
          id={minPriceFilterId}
          min="0"
          max="1000"
          value={filters.minPrice}
          onChange={handleChangeMinPrice}
        />
        <p className="text-white">${filters.minPrice}</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor={categoryFilterId} className="text-white text-xl">
          Category
        </label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">All</option>
          <option value="laptops">Laptops</option>
        </select>
      </div>
    </section>
  );
}
