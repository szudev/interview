import { useId } from "react";
import useCart from "../hooks/useCart";
import { CartIcon, ClearCartIcon } from "./Icons";
import CartItem from "./CartItem";

export default function Cart() {
  const CartCheckBoxId = useId();
  const { cart, clearCart, addToCart } = useCart();
  return (
    <section className="">
      <label
        htmlFor={CartCheckBoxId}
        className="bg-blue-500 rounded-full hover:scale-[1.1] cursor-pointer p-1 items-center flex h-8 justify-center absolute right-2 top-2 transition-[all_.3s_ease] w-8 z-[9999]"
      >
        <CartIcon />
      </label>
      <input id={CartCheckBoxId} type="checkbox" hidden className="peer" />
      <aside className="hidden p-4 bg-gray-700 right-0 top-0 w-[200px] fixed peer-checked:block peer-checked:h-full">
        <ul className="flex flex-col">
          {cart.map((product) => (
            <CartItem
              key={product.id}
              title={product.title}
              price={product.price}
              thumbnail={product.thumbnail}
              description={product.description}
              quantity={product.quantity}
              addToCart={() => addToCart(product)}
            />
          ))}
        </ul>
        <div className="flex items-center justify-center pt-2">
          <button
            className="bg-black text-white rounded-md p-2 hover:scale-[1.1]"
            onClick={clearCart}
          >
            <ClearCartIcon />
          </button>
        </div>
      </aside>
    </section>
  );
}
