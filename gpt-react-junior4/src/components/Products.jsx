import { AddToCartIcon } from "./Icons";

export default function Products({ products }) {
  return (
    <section className="p-4 flex justify-center items-center">
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] w-full gap-4">
        {products.slice(0, 10).map((product) => (
          <li
            key={product.id}
            className="text-white flex flex-col items-center justify-center gap-2 border border-gray-700 rounded-md pb-2"
          >
            <img src={product.thumbnail} alt={product.description} />
            <strong>{product.title}</strong>
            <p>${product.price}</p>
            <button className="border border-white rounded-lg p-2">
              <AddToCartIcon />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
