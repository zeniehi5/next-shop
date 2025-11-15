"use client";

import Link from "next/link";
import * as ToolTip from "@radix-ui/react-tooltip";

// simple product card component
export default function ProductCard({ product }) {
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log("Add to cart: ", product.id);
    // TODO: implement logic for adding to cart
    // TODO: add alert with radix toast after adding to cart
  };

  return (
    <Link
      href={`/products/${product.id}`}
      className="block text-inherit no-underline"
    >
      <div
        className="
          border border-gray-200 
          p-4 
          rounded-lg 
          w-60
          hover:shadow-md
          transition-shadow
          cursor-pointer
          flex flex-col
          h-full
        "
      >
        <div
          className="
            w-full
            h-40
            bg-gray-100
            mb-4
            rounded-md
            flex
            items-center
            justify-center
            text-gray-400
          "
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2 grow">
          {product.name}
        </h3>
        <p className="font-bold text-gray-900 mb-3">
          $ {product.price.toLocaleString()}
        </p>
        {/* product stock and add to cart button */}
        {product.stock > 0 ? (
          <ToolTip.TooltipProvider>
            <ToolTip.Root>
              <ToolTip.Trigger asChild>
                <button
                  className="
                    w-full
                    py-2 px-4 
                    bg-black 
                    text-white 
                    text-sm 
                    rounded-md 
                    hover:bg-gray-800 
                    transition-colors 
                    focus:outline-none
                    focus:ring-2
                    focus:ring-black
                    focus:ring-opacity-50
                  "
                  onClick={handleAddToCart}
                >
                  add to cart
                </button>
              </ToolTip.Trigger>
              <ToolTip.TooltipPortal>
                <ToolTip.Content
                  className="
                    bg-gray-800 text-white text-xs 
                    px-2 py-1 
                    rounded-md 
                    shadow-lg 
                    data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade 
                    data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade 
                    data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade 
                    data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade
                  "
                  sideOffset={5}
                >
                  Click to add to cart
                  <ToolTip.Arrow className="fill-gray-800" />
                </ToolTip.Content>
              </ToolTip.TooltipPortal>
            </ToolTip.Root>
          </ToolTip.TooltipProvider>
        ) : (
          <p className="text-red-500 font-bold text-sm">Out of stock</p>
        )}
      </div>
    </Link>
  );
}
