import React from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../lib/products";

// products page component
export default function ProductsPage() {
  const products = getProducts();

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
