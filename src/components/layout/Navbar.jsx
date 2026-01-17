"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MyContainer from "../MyContainer";
import Logo from "../Logo";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();
  // console.log(session);

  const [isMockAuth, setIsMockAuth] = useState(false);
  useEffect(() => {
    const hasMockAuth = document.cookie.includes("auth=true");
    setIsMockAuth(hasMockAuth);
  }, []);

  const isAuth = isMockAuth || !!session;

  const handleLogout = async () => {
    document.cookie = "auth=; path=/; max-age=0";
    setIsMockAuth(false);

    await signOut({ redirect: false });
  };

  return (
    <nav className="bg-base-100 border-b border-base-300 sticky top-0 z-50">
      <MyContainer>
        <div className="flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`hover:text-primary transition ${
                pathname === "/" && "text-primary"
              }`}
            >
              Home
            </Link>

            <Link
              href="/items"
              className={`hover:text-primary transition ${
                pathname === "/items" && "text-primary"
              }`}
            >
              Items
            </Link>

            {isAuth && (
              <Link
                href="/add-item"
                className={`hover:text-primary transition ${
                  pathname === "/add-item" && "text-primary"
                }`}
              >
                Add Item
              </Link>
            )}

            <Link
              href="/about"
              className={`hover:text-primary transition ${
                pathname === "/about" && "text-primary"
              }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`hover:text-primary transition ${
                pathname === "/contact" && "text-primary"
              }`}
            >
              Contact
            </Link>

            {isAuth ? (
              <button
                onClick={handleLogout}
                className="border border-primary text-primary hover:bg-primary cursor-pointer hover:text-base-100 px-3 py-1 rounded transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="border border-primary  bg-primary text-base-100 hover:opacity-90 cursor-pointer font-medium px-3 py-1 rounded transition"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden btn btn-ghost btn-sm"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {open ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded hover:bg-base-200"
              >
                Home
              </Link>

              <Link
                href="/items"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded hover:bg-base-200"
              >
                Items
              </Link>

              {isAuth && (
                <Link
                  href="/add-item"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded hover:bg-base-200"
                >
                  Add Item
                </Link>
              )}

              <Link
                href="/about"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded hover:bg-base-200"
              >
                About
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded hover:bg-base-200"
              >
                Contact
              </Link>

              {isAuth ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="border border-primary text-center text-primary hover:bg-primary cursor-pointer hover:text-white px-3 py-1 rounded transition"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="border border-primary text-primary text-center hover:bg-primary hover:text-base-100 cursor-pointer font-medium px-3 py-1 rounded transition"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </MyContainer>
    </nav>
  );
};

export default Navbar;
