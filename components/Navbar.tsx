"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";

const logo = {
  src: "./hilink-logo.svg",
  alt: "Travel APP Logo",
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="max-container flex items-center justify-between padding-container relative z-30 py-5">
      <Link href="./">
        <Image src={logo.src} alt={logo.alt} width={74} height={29} />
      </Link>

      <ul className="h-full gap-12 lg:flex items-center hidden">
        {[
          NAV_LINKS.map((item, index) => (
            <Link
              className="text-base text-gray-50 flex items-center justify-center transition-all hover:font-bold"
              href={item.href}
              key={item.key}
            >
              {item.label}
            </Link>
          )),
        ]}
      </ul>

      <div className="lg:flex items-center justify-center hidden">
        <Button
          type="button"
          title="LogIn"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="Mobile Menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
