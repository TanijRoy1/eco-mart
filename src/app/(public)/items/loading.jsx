import React from "react";
import ProductCardSkeleton from "./ProductCardSkeleton";
import MyContainer from "@/components/MyContainer";

const loading = () => {
  return (
    <section className=" py-16 bg-base-100">
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
          {[...Array(8)].map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default loading;
