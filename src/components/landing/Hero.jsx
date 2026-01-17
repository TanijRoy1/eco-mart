import Link from "next/link";
import Image from "next/image";
import MyContainer from "../MyContainer";

const Hero = () => {
  return (
    <section className="bg-base-100 overflow-hidden">
      <MyContainer className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="space-y-7">
          <span className="badge badge-primary badge-outline">
            🌱 Eco-Friendly Marketplace
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-base-content leading-tight">
            Shop Sustainable <br />
            <span className="text-primary">Live Greener</span>
          </h1>

          <p className="text-base-content/70 max-w-xl">
            Discover eco-friendly products that reduce waste, protect nature,
            and support a greener future — thoughtfully curated for you.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/items"
              className="inline-flex items-center justify-center
               bg-primary text-base-100
               hover:bg-secondary
               font-medium
               px-5 py-2.5
               rounded-md
               transition-colors duration-200"
            >
              Browse Items
            </Link>

            <Link
              href="/add-item"
              className="inline-flex items-center justify-center
               border border-primary
               text-primary
               hover:bg-primary hover:text-base-100
               font-medium
               px-5 py-2.5
               rounded-md
               transition-colors duration-200"
            >
              Add Item
            </Link>
          </div>

          <div className="flex gap-10 pt-8">
            <div>
              <h3 className="text-2xl font-bold text-base-content">500+</h3>
              <p className="text-sm text-base-content/60">Eco Products</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-base-content">1k+</h3>
              <p className="text-sm text-base-content/60">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-base-content">100%</h3>
              <p className="text-sm text-base-content/60">Sustainable</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-primary opacity-20 rounded-full blur-3xl"></div>

          <div className="relative bg-base-200 p-4 rounded-2xl shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Eco friendly products"
              width={600}
              height={600}
              priority
              className="rounded-xl"
            />
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default Hero;
