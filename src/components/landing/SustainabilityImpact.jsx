import { FaTree, FaRecycle, FaWater } from "react-icons/fa";
import MyContainer from "../MyContainer";

const SustainabilityImpact = () => {
  return (
    <section className="bg-base-100 py-20">
      <MyContainer>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="sm:text-3xl text-2xl font-bold text-base-content mb-4">
            Our <span className="text-primary">Sustainability</span> Impact
          </h2>
          <p className="text-base-content/70">
            Small choices today create a greener tomorrow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-base-200 p-8 rounded-xl text-center">
            <FaTree className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-1">12,500+</h3>
            <p className="text-base-content/70">
              Trees saved through sustainable sourcing
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-xl text-center">
            <FaRecycle className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-1">8,200 kg</h3>
            <p className="text-base-content/70">
              Plastic waste reduced by reusable products
            </p>
          </div>

          <div className="bg-base-200 p-8 rounded-xl text-center">
            <FaWater className="text-primary text-4xl mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-primary mb-1">4.6M L</h3>
            <p className="text-base-content/70">
              Water saved through eco-conscious manufacturing
            </p>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default SustainabilityImpact;
