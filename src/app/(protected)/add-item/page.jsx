"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const AddItemPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const isMockAuth = document.cookie.includes("auth=true");

    if (status === "loading") return;

    if (!isMockAuth && !session) {
      router.replace("/login");
    }
  }, [session, status, router]);

  const handleAddItem = async (e) => {
    e.preventDefault();
    setLoading(true);

    const productData = {
      name: e.target.name.value,
      description: e.target.description.value,
      price: Number(e.target.price.value),
      category: e.target.category.value,
      image: e.target.image.value,
      stock: Number(e.target.stock.value),
      brand: e.target.brand.value,
      materials: e.target.materials.value.split(",").map((m) => m.trim()),
      ecoRating: Number(e.target.ecoRating.value),
      originCountry: e.target.originCountry.value,
    };

    // console.log(productData);

    try {
      await fetch("https://eco-mart-server-drab.vercel.app/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });

      toast.success("Product added successfully 🌱");
      e.target.reset();
      router.push("/items");
    } catch (err) {
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-100 py-16 px-4">
      <div className="max-w-2xl mx-auto bg-base-200 p-8 rounded-xl">
        <h1 className="text-3xl font-bold text-primary mb-8 text-center">
          Add New Item
        </h1>

        <form onSubmit={handleAddItem} className="space-y-4">
          <input
            required
            name="name"
            placeholder="Item Name"
            className="input"
          />

          <textarea
            required
            name="description"
            placeholder="Description"
            className="textarea"
          />

          <input
            required
            type="number"
            step="0.01"
            name="price"
            placeholder="Price"
            className="input"
          />

          <input
            required
            name="category"
            placeholder="Category (e.g. Travel)"
            className="input"
          />

          <input
            required
            name="image"
            placeholder="Image URL"
            className="input"
          />

          <input
            required
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            className="input"
          />

          <input required name="brand" placeholder="Brand" className="input" />

          <input
            required
            name="materials"
            placeholder="Materials (comma separated)"
            className="input"
          />

          <input
            required
            type="number"
            min="1"
            max="5"
            name="ecoRating"
            placeholder="Eco Rating (1-5)"
            className="input"
          />

          <input
            required
            name="originCountry"
            placeholder="Country of Origin"
            className="input"
          />

          <button
            disabled={loading}
            type="submit"
            className="w-full border border-primary cursor-pointer text-primary hover:bg-primary hover:text-base-100 transition py-3 rounded font-medium"
          >
            {loading ? "Adding..." : "Add Item"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItemPage;
