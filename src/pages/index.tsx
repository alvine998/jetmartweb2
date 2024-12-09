import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Instagram,
  ShoppingBag,
  WhatsApp,
} from "@mui/icons-material";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import BottomNav from "@/components/BottomNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [hideText, setHideText] = useState<boolean>(false);
  const [hideText2, setHideText2] = useState<boolean>(false);
  const [hideText3, setHideText3] = useState<boolean>(false);
  const [hideText4, setHideText4] = useState<boolean>(false);
  const [hideElement, setHideElement] = useState<boolean>(false);
  const [hideElement2, setHideElement2] = useState<boolean>(false);
  const [hideElement3, setHideElement3] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setHideText(true);
      } else {
        setHideText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 900) {
        setHideText(false);
        setHideText2(true);
      } else {
        setHideText2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1200) {
        setHideText(false);
        setHideText2(false);
        setHideElement(true);
      } else {
        setHideElement(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1500) {
        setHideText(false);
        setHideText2(false);
        setHideElement(false);
        setHideText3(true);
      } else {
        setHideText3(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2000) {
        setHideText(false);
        setHideText2(false);
        setHideElement(false);
        setHideText3(false);
        setHideElement2(true);
      } else {
        setHideElement2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2300) {
        setHideText(false);
        setHideText2(false);
        setHideElement(false);
        setHideText3(false);
        setHideElement2(false);
        setHideText4(true);
      } else {
        setHideText4(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2800) {
        setHideText(false);
        setHideText2(false);
        setHideElement(false);
        setHideText3(false);
        setHideElement2(false);
        setHideText4(false);
        setHideElement3(true);
      } else {
        setHideElement3(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="bg-[url('/images/banner2.jpeg')] bg-fixed bg-cover bg-center min-h-screen w-full">
      <div className="flex flex-col gap-[100vh]">
        <Navbar />
        <div className={`min-h-screen w-full bg-white pt-4`}>
          <h2
            className={`${
              hideText ? "opacity-100" : "opacity-0"
            } text-6xl font-bold text-center text-black transition-all ease-in-out duration-200 mt-[50vh]`}
          >
            Produk Kami
          </h2>

          {/* DTF Machine */}
          <h2
            className={`${
              hideText2 ? "opacity-100" : "opacity-0"
            } text-6xl font-bold text-center text-black transition-all ease-in-out duration-200`}
          >
            DTF Machine Printing
          </h2>
          <div
            className={`${
              hideElement ? "opacity-100" : "opacity-0"
            } transition-all ease-in-out duration-200 px-4 flex lg:flex-row flex-col gap-4 justify-center items-center lg:mt-[20vh] mt-0 w-full`}
          >
            <div className="bg-white shadow rounded p-2 w-full flex flex-col justify-center items-center">
              <h5 className="text-center text-black text-xl font-bold">
                HS624 DTF Four Head
              </h5>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/38.%20Mesin%20DTF%20Four%20Head%20(1).png?alt=media&token=1ea1b586-f126-4d51-842b-8af62c8f3a58"
                alt="print1"
                className="lg:w-full w-auto lg:h-[500px] h-[200px]"
              />
              <button
                className="bg-blue-700 text-white px-20 py-2 rounded hover:bg-blue-600 duration-200"
                type="button"
              >
                Beli Sekarang
              </button>
            </div>
            <div className="bg-white shadow rounded p-2 w-full flex flex-col justify-center items-center">
              <h5 className="text-center text-black text-xl font-bold">
                HS622 DTF Two Head
              </h5>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/39.%20Mesin%20DTF%20Two%20Head%20(2).png?alt=media&token=52b16769-07d3-470a-b696-ace0b994cbbd"
                alt="print2"
                className="lg:w-full w-auto lg:h-[500px] h-[200px]"
              />
              <button
                className="bg-blue-700 text-white px-20 py-2 rounded hover:bg-blue-600 duration-200"
                type="button"
              >
                Beli Sekarang
              </button>
            </div>
            <div className="bg-white rounded p-2 lg:w-1/4 w-full flex flex-col justify-center items-center">
              <button
                className="bg-green-700 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-600 duration-200"
                type="button"
              >
                Lihat Lainnya
                <ChevronRight className="h-10 w-10" />
              </button>
            </div>
          </div>

          {/* Spareparts */}
          <h2
            className={`${
              hideText3 ? "opacity-100" : "opacity-0"
            } text-6xl font-bold text-center text-black transition-all ease-in-out duration-200`}
          >
            Spareparts
          </h2>
          <div
            className={`${
              hideElement2 ? "opacity-100" : "opacity-0"
            } transition-all px-4 ease-in-out duration-200 flex gap-4 justify-center items-center lg:mt-[20vh] mt-0 w-full lg:flex-row flex-col`}
          >
            <div className="bg-white shadow rounded p-2 w-full flex flex-col justify-center items-center">
              <h5 className="text-center text-black text-xl font-bold">
                Jet Printhead Epson I3200
              </h5>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/29.%20H9730%20Encoder%20Sensor%20(1)%20(1).png?alt=media&token=be1d314e-4910-467a-bd6c-1610a60a191b"
                alt="print1"
                className="w-full lg:h-[500px] h-[200px]"
              />
              <button
                className="bg-blue-700 text-white px-20 py-2 rounded hover:bg-blue-600 duration-200"
                type="button"
              >
                Beli Sekarang
              </button>
            </div>
            <div className="bg-white shadow rounded p-2 w-full flex flex-col justify-center items-center">
              <h5 className="text-center text-black text-xl font-bold">
                Jet Manifold Nozzle Printhead Epson I3200
              </h5>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/27.%20Print%20Head%20Cover%20(1)%20(1).png?alt=media&token=93bc16e2-3e40-4af1-b6e8-f84667e32025"
                alt="print2"
                className="w-full lg:h-[500px] h-[200px]"
              />
              <button
                className="bg-blue-700 text-white px-20 py-2 rounded hover:bg-blue-600 duration-200"
                type="button"
              >
                Beli Sekarang
              </button>
            </div>
            <div className="bg-white rounded p-2 lg:w-1/4 w-full flex flex-col justify-center items-center">
              <button
                className="bg-green-700 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-600 duration-200"
                type="button"
              >
                Lihat Lainnya
                <ChevronRight className="h-10 w-10" />
              </button>
            </div>
          </div>

          {/* Bahan Baku */}
          <h2
            className={`${
              hideText4 ? "opacity-100" : "opacity-0"
            } text-6xl font-bold text-center text-black transition-all ease-in-out duration-200`}
          >
            Bahan Baku
          </h2>
          <div
            className={`${
              hideElement3 ? "opacity-100" : "opacity-0"
            } transition-all px-4 ease-in-out duration-200 flex gap-4 justify-center items-center lg:mt-[20vh] mt-0 w-full lg:flex-row flex-col`}
          >
            <div className="bg-white shadow rounded p-2 w-full flex flex-col justify-center items-center lg:gap-2 gap-2">
              <h5 className="text-center text-black text-xl font-bold">
                Jet Ink
              </h5>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/3.%20Tinta%20White%20(2).png?alt=media&token=971c60d0-21f0-4403-b7cd-86ff089578f0"
                alt="print1"
                className="w-full lg:h-[500px] h-[300px]"
              />
              <button
                className="bg-blue-700 text-white px-20 py-2 rounded hover:bg-blue-600 duration-200"
                type="button"
              >
                Beli Sekarang
              </button>
            </div>
            <div className="bg-white shadow rounded p-2 w-full flex flex-col justify-center items-center lg:gap-2 gap-2">
              <h5 className="text-center text-black text-xl font-bold">
                Powder
              </h5>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jetmart-25181.appspot.com/o/8.%20Powder%20(1)%20(1).png?alt=media&token=da86b0c3-e0f9-4d6a-8296-f8bbdeb058eb"
                alt="print2"
                className="w-full lg:h-[500px] h-[300px]"
              />
              <button
                className="bg-blue-700 text-white px-20 py-2 rounded hover:bg-blue-600 duration-200"
                type="button"
              >
                Beli Sekarang
              </button>
            </div>
            <div className="bg-white rounded p-2 lg:w-1/4 w-full flex flex-col justify-center items-center">
              <button
                className="bg-green-700 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-600 duration-200"
                type="button"
              >
                Lihat Lainnya
                <ChevronRight className="h-10 w-10" />
              </button>
            </div>
          </div>

          {/* Bottom Nav */}
          <div className="mt-4">
            <BottomNav />
          </div>
        </div>
        <div className="fixed bottom-4 right-4">
          <Link
            href={`https://wa.me/6285703049632`}
            target="_blank"
            className="w-32 h-12 flex justify-center items-center bg-green-500 rounded-full"
          >
            <WhatsApp className="text-white w-10 h-10" />
            Whatsapp
          </Link>
        </div>
      </div>
    </div>
  );
}
