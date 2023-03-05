export default function CartItem({
  thumbnail,
  price,
  description,
  title,
  quantity,
  addToCart,
}) {
  return (
    <li className="border-b-[1px] pb-4">
      <img src={thumbnail} alt={description} className="aspect-video w-full" />
      <div className="text-white flex flex-col items-center justify-center">
        <strong>{title}</strong>
        <p>${price}</p>
      </div>
      <footer className="text-white flex gap-2 justify-center items-center">
        <small>Quantity: {quantity}</small>
        <button
          className="rounded-sm px-2 text-lg hover:scale-[1.1] bg-black"
          onClick={addToCart}
        >
          +
        </button>
      </footer>
    </li>
  );
}
