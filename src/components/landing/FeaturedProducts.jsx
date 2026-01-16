import ProductCard from "@/app/(public)/items/ProductCard";
import Link from "next/link";
import MyContainer from "../MyContainer";

const getFeaturedProducts = async () => {
  const res = await fetch(`http://localhost:5000/products?limit=${8}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch featured products");
  }

  return res.json();
};

export default async function FeaturedProducts() {
  const products = await getFeaturedProducts();

  return (
    <section className="py-16 bg-base-100">
      <MyContainer>
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-base-content">
              Featured Eco Products
            </h2>
            <p className="text-base-content/70 mt-2 max-w-xl">
              Handpicked sustainable products to help you live greener every
              day.
            </p>
          </div>

          <Link
            href="/items"
            className="border border-primary text-primary hover:bg-primary hover:text-base-100 transition px-4 py-2 rounded font-medium w-fit"
          >
            View All Products →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
      </MyContainer>
    </section>
  );
}
