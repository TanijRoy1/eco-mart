import React from "react";
import ProductCard from "./ProductCard";
import MyContainer from "@/components/MyContainer";
const getProducts = async () => {
  const res = await fetch("https://eco-mart-server-drab.vercel.app/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
const Products = async () => {
  const products = await getProducts();

  return (
    <section className="py-16 bg-base-100">
      <MyContainer>
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-base-content">
            All Eco Products
          </h1>
          <p className="text-base-content/70 mt-2">
            Discover sustainable products for a greener lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default Products;
