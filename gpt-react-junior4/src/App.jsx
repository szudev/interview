import Products from "./components/Products";
import Header from "./components/Header";
import useFilter from "./hooks/useFilter";

function App() {
  const { filteredProducts, setFilters } = useFilter();

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
    </div>
  );
}

export default App;
