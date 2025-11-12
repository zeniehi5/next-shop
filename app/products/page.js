import React from "react";
import { products } from "./data/products";

// simple product car component
function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        width: "250px",
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
      <button
        style={{
          padding: "8px 15px",
          backgroundColor: "#333",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        add to cart
      </button>
    </div>
  );
}

// products page component
export default function ProductsPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Product List ({products.length} items)</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
