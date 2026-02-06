import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import InstallButton from "@/components/InstallButton";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center font-heading font-bold text-lg text-white">
                A
              </div>
              <span className="font-heading text-xl font-bold">
                Agro<span className="text-accent">Nusantara</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Perusahaan pertanian dan peternakan terpadu yang berkomitmen
              membangun ketahanan pangan Nusantara melalui praktik
              berkelanjutan.
            </p>
            <InstallButton />
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/tentang", label: "Tentang Kami" },
                { href: "/layanan", label: "Layanan" },
                { href: "/produk", label: "Produk" },
                { href: "/galeri", label: "Galeri" },
                { href: "/kontak", label: "Hubungi Kami" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">
              Layanan Kami
            </h4>
            <ul className="space-y-3">
              {[
                "Budidaya Tanaman",
                "Peternakan Terpadu",
                "Distribusi & Logistik",
                "Konsultasi Pertanian",
                "Pengolahan Hasil",
              ].map((service) => (
                <li key={service}>
                  <span className="text-white/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-5">
              Kontak
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Jl. Raya Agro No. 88, Bogor, Jawa Barat 16710
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span className="text-white/70 text-sm">(021) 876-5432</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span className="text-white/70 text-sm">
                  info@agronusantara.co.id
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">
                  Senin - Sabtu
                  <br />
                  08.00 - 17.00 WIB
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            &copy; 2024 AgroNusantara. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-white/50 hover:text-white/80 text-sm transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
