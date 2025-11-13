import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const { id, title, thumbnail, price } = product;

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
      <div className="h-40 sm:h-44 md:h-48 w-full overflow-hidden bg-gray-50">
        {thumbnail ?
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        : <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        }
      </div>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <h3 className="text-sm font-medium line-clamp-2">{title}</h3>
        <div className="text-xs text-gray-500">${price}</div>

        <div className="mt-auto flex items-center justify-between gap-2">
          <button
            onClick={() => dispatch(addToCart(product))}
            className="flex-1 px-3 py-2 text-sm rounded-full bg-green-500 text-white touch-manipulation"
          >
            Add to cart
          </button>

          <Link
            to={`/product/${id}`}
            className="px-3 py-2 text-xs text-blue-600 rounded-md hover:bg-blue-50"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}
