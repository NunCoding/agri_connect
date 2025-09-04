"use client";
import { Facebook, PhoneCall, Linkedin,Search,ShoppingCart,Phone } from "lucide-react";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Sidebar = () => {
  const [active, setActive] = useState<number>(1);

  const listLink = [
    { id: 1, href: "/", name: "home" },
    { id: 2, href: "#", name: "about" },
    { id: 3, href: "#", name: "product" },
    { id: 4, href: "#", name: "project" },
  ];

  function handleClicked(id: number) {
    setActive(id);
  }

  return (
    <>
      <main
        className={`${inter.className} p-2 bg-gray-50 px-40 text-gray-500 flex justify-start items-center gap-40`}
      >
        <div className="flex flex-nowrap gap-10">
          <Facebook />
          <PhoneCall />
          <Linkedin />
        </div>
        <div>
          <p className="text-xl font-semibold">Welcome to AgriConnect Hub</p>
        </div>
      </main>

      <section
        className={`${inter.className} p-5 px-40 flex justify-between items-center gap-40`}
      >
        <div className="flex flex-nowrap gap-5">
          <Image src={"/Group.png"} width={30} height={20} alt="agriculture" />
          <p className="text-3xl font-semibold">AgriConnect HUB</p>
        </div>

        <div className="text-lg font-medium flex gap-10">
          {listLink.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => handleClicked(link.id)}
              className={
                active === link.id ? "text-green-600" : "text-gray-600"
              }
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-5 justify-center items-center text-gray-400">
          <Search/>
          <ShoppingCart/>
          <div className="flex flex-nowrap gap-1 bg-orange-400 p-3 rounded-lg text-white">
            <Phone/>
            <p>(+885) 83723634</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
