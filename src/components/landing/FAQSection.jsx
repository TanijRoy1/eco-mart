import MyContainer from "../MyContainer";

const faqs = [
  {
    question: "What makes your products eco-friendly?",
    answer:
      "Our products are made from sustainable, recyclable, or biodegradable materials and sourced from environmentally responsible brands.",
  },
  {
    question: "Do you ship worldwide?",
    answer:
      "Currently, we offer nationwide shipping with plans to expand internationally very soon.",
  },
  {
    question: "Are your products safe for daily use?",
    answer:
      "Yes! All products go through quality checks and are safe for everyday use while being kind to the environment.",
  },
  {
    question: "Can I add my own eco products to EcoMart?",
    answer:
      "Yes, registered vendors can add products through the Add Item page after authentication.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-base-200">
      <MyContainer>
        <div className="max-w-3xl mx-auto">
          <h2 className="sm:text-3xl text-2xl font-bold text-center mb-12 text-base-content">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-base-100 border border-base-300 rounded-xl p-5 transition"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-base-content list-none">
                  {faq.question}
                  <span className="ml-4 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>

                <p className="mt-4 text-base-content/80 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default FAQSection;
