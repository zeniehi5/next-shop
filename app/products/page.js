import React from "react";

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const result = await response.json();
  return result.data;
}

// simple product card component
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
      {product.stock > 0 ? (
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
      ) : (
        <p style={{ color: "red", fontWeight: "bold" }}>Out of stock</p>
      )}
    </div>
  );
}

// products page component
export default async function ProductsPage() {
  const products = await getProducts();

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
