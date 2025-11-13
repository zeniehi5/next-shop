import { NextResponse } from "next/server";
import { getProducts } from "../../lib/products";

// GET /api/products
export async function GET(request) {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit");

  const products = getProducts();
  const result = limit ? products.slice(0, parseInt(limit)) : products;

  return NextResponse.json(
    {
      message: "Products retrieved successfully",
      data: result,
    },
    { status: 200 }
  );
}

// POST /api/products
export async function POST(request) {
  const newProduct = await request.json();

  // add the new product to the products array (in a real app, you'd save this to a database)

  return NextResponse.json(
    {
      message: "Product created successfully",
      data: newProduct,
    },
    { status: 201 }
  );
}
