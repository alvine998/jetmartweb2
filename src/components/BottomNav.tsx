import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

export default function BottomNav() {
  return (
    <div className="w-full flex lg:flex-row flex-col justify-center lg:items-start items-center gap-10 lg:h-[250px] lg:px-20 px-6 h-auto bg-black lg:pb-0 pb-4">
      <div className="w-full flex lg:justify-start justify-center items-center">
        <img
          src="/images/jetmartlogo.jpeg"
          alt="logo"
          className="lg:w-[250px] lg:h-[250px] w-[200px] h-[200px]"
        />
      </div>
      <div className="w-full lg:mt-10 mt-0">
        <h5 className="text-white text-xl">Navigasi</h5>
        <ol className="list-disc lg:mt-0 mt-2">
          <li>
            <Link href={"/catalog"} className="hover:underline">
              Katalog
            </Link>
          </li>
          <li>
            <Link href={"/catalog"} className="hover:underline">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link href={"/catalog"} className="hover:underline">
              Kontak
            </Link>
          </li>
          <li>
            <Link href={"/catalog"} className="hover:underline">
              Ketentuan Pengguna
            </Link>
          </li>
          <li>
            <Link href={"/catalog"} className="hover:underline">
              Kebijakan Privasi
            </Link>
          </li>
        </ol>
      </div>
      <div className="w-full lg:mt-10 mt-0">
        <h5 className="text-white text-xl">Media Sosial</h5>
        <div className="mt-3">
          <Link href={`https://instagram.com/`}>
            <Instagram className="w-10 h-10" />
          </Link>
          <Link href={`https://facebook.com/`}>
            <Facebook className="w-10 h-10" />
          </Link>
          <Link href={`https://youtube.com/`}>
            <YouTube className="w-10 h-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}
