import Products from "./components/Products";
import Header from "./components/Header";
import Cart from "./components/Cart";
import CartProvider from "./context/cart";

function App() {
  return (
    <CartProvider>
      <div className="bg-black min-h-screen flex flex-col">
        <Header />
        <Cart />
        <Products />
      </div>
    </CartProvider>
  );
}

export default App;
