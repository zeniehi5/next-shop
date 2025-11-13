import React from "react";
import Link from "next/link";
import { getProductById } from "../../lib/products";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main style={{ padding: "40px", maxWidth: "800px", margin: "auto" }}>
      {/* Back link */}
      <div style={{ marginBottom: "20px" }}>
        <Link href="/products">&larr; Back to Products</Link>
      </div>

      <div style={{ display: "flex", gap: "30px" }}>
        {/* Product Image */}
        <div
          style={{
            width: "400px",
            height: "400px",
            backgroundColor: "#f0f0f0",
            flexShrink: 0,
          }}
        >
          <img src={product.image} alt={product.name} />
        </div>

        {/* Product Details */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            {product.name}
          </h1>
          <p
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#333",
              margin: "20px 0",
            }}
          >
            $ {product.price}
          </p>
          <p style={{ color: "#555", marginBottom: "30px" }}>
            {product.description || "No Description Available"}
          </p>
          {product.stock > 0 ? (
            <button
              style={{
                padding: "12px 25px",
                fontSize: "1.1rem",
                backgroundColor: "#333",
                color: "white",
                border: "none",
                cursor: "pointer",
                marginTop: "auto",
              }}
            >
              Add to Cart
            </button>
          ) : (
            <p style={{ color: "red", fontWeight: "bold", marginTop: "auto" }}>
              Out of Stock
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
