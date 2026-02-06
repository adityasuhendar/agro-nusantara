import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ArrowRight, Leaf, Award, ShieldCheck, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Produk - AgroNusantara",
  description:
    "Produk pertanian dan peternakan berkualitas dari AgroNusantara. Beras organik, sayuran segar, daging premium, dan lainnya.",
};

const categories = [
  { id: "semua", label: "Semua Produk" },
  { id: "pertanian", label: "Hasil Tani" },
  { id: "peternakan", label: "Peternakan" },
  { id: "olahan", label: "Produk Olahan" },
];

const products = [
  {
    name: "Beras Organik Premium",
    category: "pertanian",
    desc: "Beras pandan wangi organik dari sawah terasering Bogor. Ditanam tanpa pestisida kimia dengan sertifikasi SNI organik.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    badge: "Best Seller",
  },
  {
    name: "Jagung Manis Segar",
    category: "pertanian",
    desc: "Jagung manis varietas hibrida dengan kadar gula tinggi. Dipanen pada tingkat kematangan optimal untuk rasa terbaik.",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    badge: null,
  },
  {
    name: "Daging Sapi Premium",
    category: "peternakan",
    desc: "Daging sapi dari peternakan sendiri dengan pakan berkualitas. Proses pemotongan halal MUI dan pengemasan vakum higienis.",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80",
    badge: "Halal",
  },
  {
    name: "Sayuran Organik",
    category: "pertanian",
    desc: "Paket sayuran organik segar meliputi bayam, kangkung, sawi, dan wortel. Dipanen setiap pagi untuk menjamin kesegaran.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    badge: "Organik",
  },
  {
    name: "Susu Segar Pasteurisasi",
    category: "peternakan",
    desc: "Susu sapi segar yang dipasteurisasi dengan teknologi modern. Kaya nutrisi tanpa bahan pengawet tambahan. Tersertifikasi halal.",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    badge: "Halal",
  },
  {
    name: "Telur Ayam Kampung",
    category: "peternakan",
    desc: "Telur dari ayam kampung yang dipelihara secara free-range. Kuning telur tebal dan kaya nutrisi alami.",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80",
    badge: "Halal",
  },
  {
    name: "Madu Hutan Asli",
    category: "olahan",
    desc: "Madu murni dari lebah hutan yang dikumpulkan secara tradisional. Tanpa campuran dan tanpa proses pemanasan berlebih.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    badge: "100% Murni",
  },
  {
    name: "Pupuk Organik",
    category: "olahan",
    desc: "Pupuk organik dari hasil pengolahan limbah peternakan. Kaya unsur hara makro dan mikro untuk kesuburan tanah.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    badge: null,
  },
  {
    name: "Yogurt Segar",
    category: "olahan",
    desc: "Yogurt alami dari susu segar peternakan sendiri. Tersedia dalam varian plain dan rasa buah lokal.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80",
    badge: "Baru",
  },
];

export default function ProdukPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1920&q=80"
            alt="Produk AgroNusantara"
            fill
            className="object-cover"
            priority
          />
          <div className="page-header-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent font-medium text-sm tracking-widest uppercase">
              Produk
            </span>
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">
            Produk Kami
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Hasil terbaik dari lahan dan peternakan kami, diproduksi dengan
            standar kualitas tertinggi untuk kesehatan keluarga Indonesia
          </p>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
            {[
              {
                icon: Leaf,
                title: "100% Organik",
                desc: "Ditanam tanpa pestisida dan bahan kimia berbahaya",
              },
              {
                icon: Award,
                title: "Tersertifikasi",
                desc: "Memenuhi standar SNI dan sertifikasi organik nasional",
              },
              {
                icon: ShieldCheck,
                title: "Jaminan Kualitas",
                desc: "Quality control ketat di setiap tahap produksi",
              },
              {
                icon: BadgeCheck,
                title: "Halal MUI",
                desc: "Seluruh produk peternakan tersertifikasi halal resmi",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 text-white"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-0.5">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <div className="section-line mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Katalog Produk
            </h2>
            <p className="text-earth-light max-w-2xl">
              Jelajahi rangkaian produk pertanian dan peternakan berkualitas
              dari AgroNusantara
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl overflow-hidden border border-cream-dark card-hover h-full flex flex-col">
                  <div className="relative img-hover-zoom h-[240px]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    {product.badge && (
                      <span className="absolute top-4 left-4 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-secondary text-xs font-medium tracking-wider uppercase mb-2">
                      {product.category === "pertanian"
                        ? "Hasil Tani"
                        : product.category === "peternakan"
                        ? "Peternakan"
                        : "Produk Olahan"}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-primary-dark mb-2">
                      {product.name}
                    </h3>
                    <p className="text-earth-light text-sm leading-relaxed flex-1">
                      {product.desc}
                    </p>
                    <div className="mt-4 pt-4 border-t border-cream">
                      <Link
                        href="/kontak"
                        className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                      >
                        Pesan Sekarang
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Bulk Order CTA */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Distribusi produk"
                width={800}
                height={500}
                className="rounded-2xl object-cover w-full h-[350px]"
              />
            </AnimateOnScroll>
            <AnimateOnScroll delay={200}>
              <div className="section-line mb-5" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Pemesanan dalam Jumlah Besar?
              </h2>
              <p className="text-earth-light leading-relaxed mb-6">
                Kami melayani pemesanan dalam jumlah besar untuk hotel,
                restoran, katering, supermarket, dan distributor. Dapatkan
                harga khusus dan jaminan pasokan berkelanjutan.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Harga kompetitif untuk pembelian partai besar",
                  "Kontrak pasokan jangka panjang tersedia",
                  "Pengiriman terjadwal sesuai kebutuhan",
                  "Dedicated account manager untuk setiap mitra",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-earth text-sm">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kontak"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300"
              >
                Hubungi Tim Sales
                <ArrowRight size={18} />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
