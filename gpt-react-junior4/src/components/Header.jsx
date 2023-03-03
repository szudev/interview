import Filters from "./Filters";

export default function Header() {
  return (
    <header className="flex flex-col justify-center items-center p-4 gap-3">
      <h1 className="text-white text-3xl">Carrito de Compras 🛒</h1>
      <Filters />
    </header>
  );
}
