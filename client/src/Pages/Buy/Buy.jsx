import React from "react";
import { useProducts } from "../../Contexts/ProductContext";
import { useCarts } from "../../Contexts/CartContext";

const Buy = () => {
  const { products } = useProducts();
  const { addToCart } = useCarts();
  return (
    <div
      className="p-10 bg-blue-50 gap-5 grid lg:grid-cols-4 
    md:grid-cols-2 place-items-center"
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full rounded overflow-hidden border-2 shadow-lg 
          flex flex-col items-center justify-between p-5 gap-1"
        >
          <img
            className="w-48 h-48 object-cover rounded-md"
            src={product.image}
            alt={product.title}
          />
          <div className="font-bold min-h-12 max-h-12 text-xl my-2">
            {product.title.length > 35
              ? `${product.title.slice(0, 35)}...`
              : product.title}
          </div>
          <p className="text-gray-700 text-base my-2">
            Price: <span className="font-bold">${product.price}</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white font-bold 
            rounded px-4 py-2  hover:bg-blue-800"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Buy;
