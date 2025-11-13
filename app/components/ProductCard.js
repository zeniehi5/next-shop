"use client";

import Link from "next/link";

// simple product card component
export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          border: "1px solid #ddd",
          padding: "15px",
          borderRadius: "8px",
          width: "250px",
          cursor: "pointer",
          color: "inherit",
        }}
      >
        <div
          style={{
            height: "180px",
            backgroundColor: "#f0f0f0",
            marginBottom: "10px",
          }}
        ></div>
        <h3>{product.name}</h3>
        <p style={{ fontWeight: "bold", color: "#333" }}>
          $ {product.price.toLocaleString()}
        </p>
        {product.stock > 0 ? (
          <button
            style={{
              padding: "8px 15px",
              backgroundColor: "#333",
              color: "white",
              border: "none",
              cursor: "pointer",
              position: "relative",
              zIndex: 10,
            }}
            onClick={(e) => {
              e.preventDefault();
              console.log("Add to cart: ", product.id);
              // TODO: implement logic for adding to cart
            }}
          >
            add to cart
          </button>
        ) : (
          <p style={{ color: "red", fontWeight: "bold" }}>Out of stock</p>
        )}
      </div>
    </Link>
  );
}
