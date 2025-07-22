"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import CloseMenu from "@/assets/icons8-close-window-50.png";
import { useState } from "react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center item-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <div className="md:hidden">
              <MenuIcon
                className="h-5 w-5 cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            </div>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">Home</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">
                Get for free
              </button>
            </nav>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black/80 z-[9999] flex flex-col items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4"
            aria-label="Close menu"
          >
            <Image src={CloseMenu} alt="Close" width={32} height={32} />
          </button>

          {/* Nav Items */}
          <nav className="flex flex-col items-center gap-6 text-white text-2xl font-medium">
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Customers
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Updates
            </a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>
              Help
            </a>
          </nav>

          <button
            className="mt-8 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold"
            onClick={() => setIsMenuOpen(false)}
          >
            Get for free
          </button>
        </div>
      )}
    </header>
  );
};
