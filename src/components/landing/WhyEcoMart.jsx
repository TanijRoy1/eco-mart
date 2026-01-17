import { FaLeaf, FaRecycle, FaGlobeAsia } from "react-icons/fa";
import MyContainer from "../MyContainer";

const WhyEcoMart = () => {
  return (
    <section className="bg-base-100 py-20">
      <MyContainer>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="sm:text-3xl text-2xl font-bold text-base-content mb-4">
            Why Choose <span className="text-primary">EcoMart</span>?
          </h2>
          <p className="text-base-content/70">
            We make sustainable shopping simple, transparent, and impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-200 p-8 rounded-xl text-center hover:shadow-lg transition">
            <FaLeaf className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Eco-Friendly Products
            </h3>
            <p className="text-base-content/70">
              Every product is carefully selected to reduce waste and promote
              sustainable living.
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-xl text-center hover:shadow-lg transition">
            <FaRecycle className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Sustainable Materials
            </h3>
            <p className="text-base-content/70">
              Made from bamboo, recycled metals, organic cotton, and other
              planet-friendly materials.
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-xl text-center hover:shadow-lg transition">
            <FaGlobeAsia className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Global Responsibility
            </h3>
            <p className="text-base-content/70">
              Supporting ethical brands and responsible sourcing from around the
              world.
            </p>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default WhyEcoMart;
