"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang Kami" },
  { href: "/layanan", label: "Layanan" },
  { href: "/produk", label: "Produk" },
  { href: "/galeri", label: "Galeri" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "navbar-scrolled py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center font-heading font-bold text-lg transition-colors ${
                scrolled
                  ? "bg-primary text-white"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              A
            </div>
            <div>
              <span
                className={`font-heading text-xl font-bold tracking-tight transition-colors ${
                  scrolled ? "text-primary-dark" : "text-white"
                }`}
              >
                Agro<span className={scrolled ? "text-accent" : "text-accent"}>Nusantara</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-earth hover:text-primary hover:bg-primary/5"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+62218765432"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                scrolled ? "text-earth" : "text-white/90"
              }`}
            >
              <Phone size={16} />
              <span>(021) 876-5432</span>
            </a>
            <Link
              href="/kontak"
              className="bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-primary hover:bg-primary/10"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-warm-white border-t border-cream-dark mt-3 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-earth hover:text-primary hover:bg-primary/5 rounded-lg font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-cream-dark">
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg font-semibold transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
