import MyContainer from "@/components/MyContainer";

const AboutPage = () => {
  return (
    <section className="bg-base-100 py-20">
      <MyContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            About <span className="text-primary">EcoMart</span>
          </h1>
          <p className="text-base-content/70">
            EcoMart is a sustainable marketplace focused on promoting
            eco-friendly, reusable, and environmentally responsible products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-base-content">
              Our Mission 🌱
            </h2>
            <p className="text-base-content/70 leading-relaxed">
              Our mission is to make sustainable living accessible and
              affordable for everyone. We carefully curate products that reduce
              waste, minimize environmental impact, and encourage conscious
              consumer choices.
            </p>

            <h2 className="text-2xl font-semibold text-base-content">
              Why EcoMart?
            </h2>
            <ul className="space-y-3 text-base-content/70">
              <li>• Eco-friendly and reusable products</li>
              <li>• Trusted brands with sustainability values</li>
              <li>• Transparent product details and eco ratings</li>
              <li>• Simple and modern shopping experience</li>
            </ul>
          </div>

          <div className="bg-base-200 rounded-xl p-8 space-y-6">
            <h3 className="text-xl font-semibold text-base-content">
              What We Offer
            </h3>

            <div className="space-y-4 text-base-content/70">
              <p>🌍 Products sourced from responsible manufacturers</p>
              <p>♻️ Items made from sustainable and recycled materials</p>
              <p>🔍 Detailed product pages with eco ratings and origin info</p>
              <p>
                🚀 A modern web experience built with Next.js & Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto">
          <p className="text-lg font-medium text-base-content">
            Together, we can build a greener future 🌿
          </p>
          <p className="text-base-content/60 mt-2">
            Thank you for supporting sustainable choices with EcoMart.
          </p>
        </div>
      </MyContainer>
    </section>
  );
};

export default AboutPage;
