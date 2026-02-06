import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Sprout,
  Beef,
  Truck,
  ClipboardCheck,
  ArrowRight,
  Star,
  Leaf,
  TrendingUp,
  Users,
  MapPin,
  BadgeCheck,
} from "lucide-react";

const stats = [
  { number: "2.500+", label: "Hektar Lahan", icon: MapPin },
  { number: "15.000+", label: "Ekor Ternak", icon: Beef },
  { number: "850+", label: "Petani Mitra", icon: Users },
  { number: "18", label: "Tahun Pengalaman", icon: TrendingUp },
];

const services = [
  {
    icon: Sprout,
    title: "Budidaya Tanaman",
    desc: "Pengelolaan lahan pertanian modern dengan teknologi tepat guna untuk menghasilkan komoditas pangan berkualitas tinggi.",
  },
  {
    icon: Beef,
    title: "Peternakan Terpadu",
    desc: "Peternakan sapi, kambing, dan unggas dengan standar kesehatan hewan yang ketat dan pakan berkualitas.",
  },
  {
    icon: Truck,
    title: "Distribusi & Logistik",
    desc: "Jaringan distribusi terintegrasi yang menjamin kesegaran produk dari lahan langsung ke konsumen.",
  },
  {
    icon: ClipboardCheck,
    title: "Konsultasi Pertanian",
    desc: "Pendampingan teknis bagi petani mitra dalam penerapan metode pertanian berkelanjutan.",
  },
];

const products = [
  {
    name: "Beras Organik Premium",
    category: "Hasil Tani",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Jagung Manis Segar",
    category: "Hasil Tani",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Daging Sapi Premium",
    category: "Peternakan",
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sayuran Organik",
    category: "Hasil Tani",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Susu Segar",
    category: "Peternakan",
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Telur Ayam Kampung",
    category: "Peternakan",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=600&q=80",
  },
];

const testimonials = [
  {
    name: "Pak Hendra Wijaya",
    role: "Petani Mitra, Sukabumi",
    text: "Bergabung sebagai mitra AgroNusantara mengubah cara saya bertani. Pendampingan teknis dan akses pasar yang mereka berikan membuat hasil panen kami meningkat hingga 40% dalam dua musim.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Bu Ratna Sari",
    role: 'Pemilik Restoran "Rasa Nusantara"',
    text: "Kualitas produk AgroNusantara tidak perlu diragukan lagi. Beras organik dan sayuran segar mereka selalu menjadi bahan utama di restoran kami. Pelanggan bisa merasakan perbedaannya.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Ir. Bambang Sutrisno",
    role: "Kepala Dinas Pertanian Kab. Bogor",
    text: "AgroNusantara adalah contoh nyata bagaimana sektor pertanian bisa dikelola secara modern dan berkelanjutan. Kontribusi mereka terhadap ekonomi lokal sangat signifikan.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Home() {
  return (
    <>
      {/* ==================== HERO SECTION ==================== */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
            alt="Lahan pertanian AgroNusantara"
            fill
            className="object-cover"
            priority
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="animate-fade-in-up opacity-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-accent" />
                <span className="text-accent font-medium text-sm tracking-widest uppercase">
                  Sejak 2006
                </span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
                Membangun
                <br />
                <span className="text-accent">Ketahanan Pangan</span>
                <br />
                Nusantara
              </h1>
            </div>

            <div className="animate-fade-in-up opacity-0 delay-200">
              <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                Kami mengelola pertanian dan peternakan terpadu dengan prinsip
                berkelanjutan, menghasilkan produk pangan berkualitas dari
                jantung Pulau Jawa.
              </p>
            </div>

            <div className="animate-fade-in-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4">
              <Link
                href="/produk"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-accent/20"
              >
                Jelajahi Produk
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/tentang"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Tentang Kami
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>

      {/* ==================== STATS SECTION ==================== */}
      <section className="bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className={`py-10 lg:py-14 px-6 text-center ${
                    i < stats.length - 1
                      ? "border-r border-white/10"
                      : ""
                  }`}
                >
                  <Icon
                    size={28}
                    className="mx-auto mb-3 text-accent"
                  />
                  <div className="font-heading text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT PREVIEW ==================== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Image Side */}
            <AnimateOnScroll className="lg:col-span-7 relative">
              <div className="relative">
                <div className="img-hover-zoom rounded-2xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80"
                    alt="Sawah terasering hijau"
                    width={900}
                    height={600}
                    className="rounded-2xl object-cover w-full h-[400px] lg:h-[520px]"
                  />
                </div>
                {/* Floating card - Halal */}
                <div className="absolute -bottom-6 -right-4 lg:-right-8 bg-white rounded-xl shadow-xl p-5 max-w-[220px]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <BadgeCheck size={20} className="text-primary" />
                    </div>
                    <span className="font-heading font-bold text-primary text-lg">
                      Halal
                    </span>
                  </div>
                  <p className="text-earth text-xs leading-relaxed">
                    Seluruh produk peternakan kami tersertifikasi halal MUI
                  </p>
                </div>
                {/* Floating card - Organik */}
                <div className="absolute -top-4 -left-4 lg:-left-8 bg-white rounded-xl shadow-xl p-4 max-w-[180px]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Leaf size={16} className="text-primary" />
                    </div>
                    <span className="font-semibold text-primary text-sm">
                      100% Organik
                    </span>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Text Side */}
            <AnimateOnScroll className="lg:col-span-5" delay={200}>
              <div className="section-line mb-5" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-5 leading-snug">
                Dari Lahan Subur Nusantara untuk Meja Makan Indonesia
              </h2>
              <p className="text-earth-light leading-relaxed mb-6">
                Berdiri sejak 2006, AgroNusantara telah berkembang dari sebuah
                usaha pertanian keluarga menjadi salah satu perusahaan
                agribisnis terpadu terdepan di Jawa Barat. Kami mengelola
                ribuan hektar lahan pertanian dan peternakan dengan komitmen
                pada keberlanjutan lingkungan.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Tersertifikasi Halal MUI untuk seluruh produk peternakan",
                  "Sertifikasi organik dari lembaga nasional",
                  "Teknologi pertanian presisi berbasis IoT",
                  "Program pemberdayaan 850+ petani mitra",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-earth"
                  >
                    <div className="w-5 h-5 bg-secondary/20 rounded-full flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/tentang"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
              >
                Selengkapnya tentang kami
                <ArrowRight size={18} />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <div className="section-line mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Layanan Kami
            </h2>
            <p className="text-earth-light max-w-2xl mx-auto leading-relaxed">
              Solusi terpadu dari hulu ke hilir untuk memaksimalkan potensi
              sektor pertanian dan peternakan Indonesia
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="card-hover bg-white rounded-2xl p-7 h-full border border-cream-dark">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={26} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">
                      {service.title}
                    </h3>
                    <p className="text-earth-light text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          <AnimateOnScroll className="text-center mt-10">
            <Link
              href="/layanan"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
            >
              Lihat Semua Layanan
              <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ==================== PRODUCTS SECTION ==================== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-6">
            <div>
              <div className="section-line mb-5" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
                Produk Unggulan
              </h2>
              <p className="text-earth-light max-w-lg leading-relaxed">
                Hasil terbaik dari lahan dan peternakan kami, diproses dengan
                standar kualitas tertinggi
              </p>
            </div>
            <Link
              href="/produk"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 shrink-0"
            >
              Lihat Semua
              <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="group relative rounded-2xl overflow-hidden img-hover-zoom h-[320px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 product-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <span className="text-secondary text-xs font-medium tracking-wider uppercase mb-1">
                      {product.category}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-white">
                      {product.name}
                    </h3>
                  </div>
                  {/* Always visible label on mobile */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-5 lg:opacity-0 lg:group-hover:opacity-0">
                    <span className="text-secondary-light text-xs font-medium tracking-wider uppercase">
                      {product.category}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-white">
                      {product.name}
                    </h3>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US ==================== */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <AnimateOnScroll className="lg:col-span-5 order-2 lg:order-1">
              <div className="section-line mb-5" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-5 leading-snug">
                Mengapa Memilih AgroNusantara?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Kualitas Terjamin",
                    desc: "Setiap produk melalui proses quality control ketat dengan standar sertifikasi nasional dan internasional.",
                  },
                  {
                    title: "Pertanian Berkelanjutan",
                    desc: "Menerapkan prinsip ramah lingkungan dalam setiap tahap produksi, dari pembibitan hingga distribusi.",
                  },
                  {
                    title: "Teknologi Modern",
                    desc: "Pemanfaatan teknologi IoT, drone monitoring, dan data analytics untuk optimalisasi hasil pertanian.",
                  },
                  {
                    title: "Pemberdayaan Lokal",
                    desc: "Program kemitraan yang mensejahterakan petani lokal melalui pelatihan dan akses pasar.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <Star size={16} className="text-accent-dark" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-dark mb-1">
                        {item.title}
                      </h4>
                      <p className="text-earth-light text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll
              className="lg:col-span-7 order-1 lg:order-2"
              delay={200}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="img-hover-zoom rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=600&q=80"
                      alt="Peternakan sapi"
                      width={600}
                      height={400}
                      className="rounded-2xl object-cover w-full h-[240px]"
                    />
                  </div>
                  <div className="img-hover-zoom rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80"
                      alt="Panen sayuran segar"
                      width={600}
                      height={300}
                      className="rounded-2xl object-cover w-full h-[180px]"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="img-hover-zoom rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80"
                      alt="Lahan pertanian organik"
                      width={600}
                      height={300}
                      className="rounded-2xl object-cover w-full h-[180px]"
                    />
                  </div>
                  <div className="img-hover-zoom rounded-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80"
                      alt="Petani bekerja di sawah"
                      width={600}
                      height={400}
                      className="rounded-2xl object-cover w-full h-[240px]"
                    />
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <div className="section-line mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Kata Mereka
            </h2>
            <p className="text-earth-light max-w-2xl mx-auto leading-relaxed">
              Kepercayaan mitra dan pelanggan adalah fondasi utama perjalanan
              kami selama 18 tahun
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 150}>
                <div className="bg-cream rounded-2xl p-7 h-full border border-cream-dark relative">
                  <div className="quote-mark mb-8 pl-2">
                    <p className="text-earth leading-relaxed text-sm pt-6">
                      {item.text}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover w-12 h-12"
                    />
                    <div>
                      <h4 className="font-semibold text-primary-dark text-sm">
                        {item.name}
                      </h4>
                      <p className="text-earth-light text-xs">{item.role}</p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1920&q=80"
            alt="Pemandangan lahan hijau"
            fill
            className="object-cover"
          />
          <div className="cta-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl lg:text-5xl font-bold text-white mb-5 leading-snug">
              Mari Bersama Membangun Masa Depan Pertanian Indonesia
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Jadilah bagian dari ekosistem pertanian berkelanjutan kami.
              Hubungi kami untuk kemitraan, pembelian produk, atau konsultasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
              >
                Hubungi Kami
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/layanan"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
              >
                Pelajari Layanan
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
