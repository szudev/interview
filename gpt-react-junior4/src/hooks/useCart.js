import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function useCart() {
  const cartContext = useContext(CartContext);
  //Revisar si el componente que quiera acceder al CartContext
  //se encuentra envuelto en el provider (acceso)
  if (cartContext === undefined) {
    throw new Error(
      "No se puede acceder al contexto ya que no se encuentra envuelto por su provider"
    );
  }

  return cartContext;
}
