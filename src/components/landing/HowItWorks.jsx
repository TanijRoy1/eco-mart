import { FaSearch, FaShoppingBag, FaLeaf } from "react-icons/fa";
import MyContainer from "../MyContainer";

const HowItWorks = () => {
  return (
    <section className="bg-base-200 py-20">
      <MyContainer>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="sm:text-3xl text-2xl font-bold text-base-content mb-4">
            How <span className="text-primary">EcoMart</span> Works
          </h2>
          <p className="text-base-content/70">
            Start your sustainable shopping journey in three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-100 p-8 rounded-xl text-center">
            <FaSearch className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Discover Products</h3>
            <p className="text-base-content/70">
              Browse eco-friendly products with transparent materials, origin,
              and eco ratings.
            </p>
          </div>

          <div className="bg-base-100 p-8 rounded-xl text-center">
            <FaShoppingBag className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Choose Responsibly</h3>
            <p className="text-base-content/70">
              Compare products and select items that align with your sustainable
              values.
            </p>
          </div>

          <div className="bg-base-100 p-8 rounded-xl text-center">
            <FaLeaf className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Make an Impact</h3>
            <p className="text-base-content/70">
              Every purchase supports eco-friendly brands and helps reduce
              environmental impact.
            </p>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default HowItWorks;
