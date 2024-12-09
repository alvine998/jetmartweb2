import { ShoppingBag } from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  const tabs = [
    {
      title: "Beranda",
      href: "/",
      active: pathname === "/",
    },
    {
      title: "Produk",
      href: "/product",
      active: pathname === "/product",
    },
    {
      title: "Tentang Kami",
      href: "/aboutus",
      active: pathname === "/aboutus",
    },
    {
      title: "Kontak Kami",
      href: "/contact",
      active: pathname === "/contact",
    },
  ];
  return (
    <div>
      <div className="lg:flex hidden justify-center items-center gap-80 pt-4 w-full ">
      <div className="w-full">
        <img
          className="lg:w-20 lg:h-20 w-32 h-32 rounded"
          alt="logo"
          src="/images/jetmartlogo.jpeg"
        />
      </div>
      <div className="flex gap-4">
        {tabs?.map((v: any, i: number) => (
          <Link
            key={i}
            href={v?.href}
            className={`text-black ${
              v?.active ? "text-red-700" : "hover:text-red-700"
            } duration-200 text-lg`}
          >
            {v?.title}
          </Link>
        ))}
      </div>
      <div className="flex">
        <Link href={"/"}>
          <ShoppingBag className="w-10 h-10 text-black" />
        </Link>
      </div>
    </div>  
    </div>
    
  );
}
