import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 29.99,
    stock: 50,
    image: "tshirt.png",
  },
  {
    id: 2,
    name: "Wide Denim Jeans",
    price: 69.99,
    stock: 30,
    image: "jeans.png",
  },
  {
    id: 3,
    name: "Minimal Leather Wallet",
    price: 39.99,
    stock: 20,
    image: "wallet.png",
  },
  {
    id: 4,
    name: "Campus Backpack",
    price: 79.99,
    stock: 15,
    image: "backpack.png",
  },
];

// GET /api/products
export async function GET(request) {
  const url = new URL(request.url);
  const limit = url.searchParams.get("limit");

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
