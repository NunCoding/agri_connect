"use client";
import {
  Facebook,
  PhoneCall,
  Linkedin,
  Search,
  MapPin,
  Handbag,
  Phone,
  ChevronDown,
  Heart,
  User,
} from "lucide-react";
import { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const Sidebar2 = () => {
  const [active, setActive] = useState<number>(1);

  const listLink = [
    { id: 1, href: "/home", name: "home" },
    { id: 2, href: "#", name: "shop" },
    { id: 3, href: "#", name: "pages" },
    { id: 4, href: "#", name: "blog" },
    { id: 5, href: "#", name: "about" },
  ];

  function handleClicked(id: number) {
    setActive(id);
  }

  return (
    <>
      <main
        className={`${inter.className} p-2 bg-gray-50 px-40 text-gray-500 flex justify-between items-center gap-40`}
      >
        <div className="flex gap-5">
          <div className="flex flex-nowrap gap-5">
            <MapPin/>
          </div>
          <div>
            <p className="text-lg font-semibold">Somewhere in Cambodia</p>
          </div>
        </div>
        <div className="flex justify-end items-end">
          <span className="text-xs">
            <ChevronDown />
          </span>
          <h1 className="text-lg">Sian Nun</h1>
        </div>
      </main>

      <section
        className={`${inter.className} p-5 px-40 bg-white flex justify-between items-center gap-40`}
      >
        <div className="flex flex-nowrap gap-5">
          <Image src={"/Group.png"} width={30} height={20} alt="agriculture" />
          <p className="text-3xl font-semibold">AgriConnect HUB</p>
        </div>

        <div className="text-lg font-medium flex gap-10 capitalize">
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
        <div className="flex gap-5 justify-center items-center text-gray-600">
          <div className="flex flex-nowrap gap-1">
            <Phone />
            <p>(+885) 83723634</p>
          </div>
          <Search />
          <Heart/>
          <div>
          <Handbag />
          </div>
          <User/>
        </div>
      </section>
    </>
  );
};

export default Sidebar2;
