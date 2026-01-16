import Image from "next/image";
import Link from "next/link";
import React from "react";
import logoImg from "../../public/eco-mart-logo.png";

const Logo = () => {
  return (
    <Link href="/" className="text-xl font-bold text-primary flex items-end">
      <Image
        src={logoImg}
        alt="Eco Mart Logo"
        width={50}
        height={50}
        className="w-6 h-6 object-cover"
      />
      <h1 className="transform translate-y-1.5">EcoMart</h1>
    </Link>
  );
};

export default Logo;
