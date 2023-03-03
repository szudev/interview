import { useEffect } from "react";
import useCart from "../hooks/useCart";
import useFilter from "../hooks/useFilter";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

export default function Products() {
  const { filteredProducts } = useFilter();
  const { cart, addToCart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <section className="p-4 flex justify-center items-center">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full gap-4">
        {filteredProducts.slice(0, 10).map((product) => {
          const isProductInCar = checkProductInCart(product);

          return (
            <li
              key={product.id}
              className="text-white flex flex-col items-center justify-center gap-2 border border-gray-700 rounded-md pb-2"
            >
              <img src={product.thumbnail} alt={product.description} />
              <strong>{product.title}</strong>
              <p>${product.price}</p>
              <button
                className="border border-white rounded-lg p-2"
                onClick={() =>
                  isProductInCar ? removeFromCart(product) : addToCart(product)
                }
              >
                {isProductInCar ? <RemoveFromCartIcon /> : <AddToCartIcon />}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
