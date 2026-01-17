import { FaLeaf } from "react-icons/fa";
import MyContainer from "../MyContainer";
import Link from "next/link";

const GreenMovementCTA = () => {
  return (
    <section className="bg-primary text-primary-content py-20">
      <MyContainer>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <FaLeaf className="text-5xl mb-6 opacity-90" />

          <h2 className="sm:text-3xl text-2xl font-bold mb-4">
            Join the Green Movement
          </h2>

          <p className="text-primary-content/90 mb-8">
            Every eco-friendly product you choose helps reduce waste and protect
            our planet. Start shopping sustainably today with EcoMart.
          </p>

          <div className="flex gap-4">
            <Link
              href="/items"
              className="btn btn-secondary text-secondary-content bg-yellow-900 px-3 py-2 rounded hover:opacity-90"
            >
              Shop Eco Products
            </Link>

            <Link href="/about" className="btn btn-outline btn-secondary px-3 py-2 border border-yellow-900 text-yellow-900 rounded hover:bg-yellow-900 hover:text-white">
              Learn More
            </Link>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default GreenMovementCTA;
