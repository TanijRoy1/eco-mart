import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import MyContainer from "../MyContainer";
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer className=" py-16 bg-base-200 border-t border-base-300 mt-20">
      <MyContainer>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary text-xl font-bold">
              {/* <FaLeaf />
              <span>EcoMart</span> */}
              <Logo></Logo>
            </div>
            <p className="text-sm text-base-content/70">
              Your trusted marketplace for sustainable and eco-friendly
              products. Shop responsibly and protect the planet.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/items" className="hover:text-primary transition">
                  Items
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-primary transition">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/add-item"
                  className="hover:text-primary transition"
                >
                  Add Item
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Sustainability Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Eco Tips
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="btn btn-sm btn-outline btn-primary"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="btn btn-sm btn-outline btn-primary"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="btn btn-sm btn-outline btn-primary"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="divider my-8"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-base-content/60">
          <p>© {new Date().getFullYear()} EcoMart. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-primary">💚</span> for the planet
          </p>
        </div>
      </MyContainer>
    </footer>
  );
};

export default Footer;
