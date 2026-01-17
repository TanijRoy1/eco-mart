import MyContainer from "@/components/MyContainer";
import Image from "next/image";

const getProduct = async (id) => {
  const res = await fetch(`https://eco-mart-server-drab.vercel.app/products/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();
  return data;
};

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const product = await getProduct(id);

  const {
    name,
    description,
    price,
    category,
    image,
    stock,
    brand,
    materials,
    ecoRating,
    originCountry,
  } = product;

  return (
    <section className="py-16 bg-base-100">
      <MyContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative w-full h-105 rounded-xl overflow-hidden bg-base-200">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>

          <div className="space-y-6">
            <span className="text-sm text-primary font-medium">{category}</span>

            <h1 className="text-3xl font-bold text-base-content">{name}</h1>

            <p className="text-base-content/70">{description}</p>

            <div className="text-2xl font-bold text-primary">${price}</div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-base-content/60">Brand</p>
                <p className="font-medium">{brand}</p>
              </div>

              <div>
                <p className="text-base-content/60">Origin</p>
                <p className="font-medium">{originCountry}</p>
              </div>

              <div>
                <p className="text-base-content/60">Stock</p>
                <p
                  className={`font-medium ${
                    stock > 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {stock > 0 ? `${stock} Available` : "Out of Stock"}
                </p>
              </div>

              <div>
                <p className="text-base-content/60">Eco Rating</p>
                <p className="font-medium">🌱 {ecoRating}/5</p>
              </div>
            </div>

            <div>
              <p className="text-base-content/60 text-sm mb-2">Materials</p>
              <div className="flex flex-wrap gap-2">
                {materials.map((item, index) => (
                  <span
                    key={index}
                    className="border border-primary text-primary px-3 py-1 rounded-full text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <button className="border border-primary text-primary hover:bg-primary hover:text-base-100 transition px-6 py-3 rounded font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default ProductDetailsPage;
