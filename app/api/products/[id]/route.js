import { NextResponse } from "next/server";
import { getProductById } from "../../../lib/products";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const product = getProductById(id);

    if (!product) {
      // Return 404 if product not found
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    // Return product data as JSON response
    return NextResponse.json({ data: product }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch product" },
      { status: 500 }
    );
  }
}
