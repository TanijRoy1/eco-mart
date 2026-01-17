import ContactForm from "@/components/form/ContactForm";
import MyContainer from "@/components/MyContainer";

const ContactPage = () => {
  return (
    <section className="bg-base-100 py-20">
      <MyContainer>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-base-content mb-4">
            Contact <span className="text-primary">EcoMart</span>
          </h1>
          <p className="text-base-content/70">
            Have questions, feedback, or partnership inquiries? We’d love to
            hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-base-content">
              Get in Touch 🌿
            </h2>

            <p className="text-base-content/70">
              Whether you have a question about our products, sustainability
              practices, or need support, feel free to reach out to us.
            </p>

            <div className="space-y-4 text-base-content/70">
              <p>📧 Email: support@ecomart.com</p>
              <p>📞 Phone: +1 234 567 890</p>
              <p>📍 Location: Dhaka, Bangladesh</p>
            </div>

            <p className="text-sm text-base-content/60">
              We usually respond within 24 hours.
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-base-content mb-6">
              Send Us a Message
            </h3>

            <ContactForm></ContactForm>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-base-content/60">
            EcoMart — Supporting sustainable choices every day 🌍
          </p>
        </div>
      </MyContainer>
    </section>
  );
};
export default ContactPage;
