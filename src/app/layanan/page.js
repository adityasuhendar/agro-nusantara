import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Sprout,
  Beef,
  Truck,
  ClipboardCheck,
  Factory,
  TreePine,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata = {
  title: "Layanan - AgroNusantara",
  description:
    "Layanan pertanian dan peternakan terpadu dari AgroNusantara. Budidaya tanaman, peternakan, distribusi, dan konsultasi.",
};

const services = [
  {
    icon: Sprout,
    title: "Budidaya Tanaman Pangan",
    desc: "Pengelolaan lahan pertanian modern dengan teknologi presisi untuk menghasilkan komoditas pangan unggulan. Kami menggunakan metode tumpangsari, rotasi tanaman, dan sistem irigasi pintar.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
    features: [
      "Padi organik premium dengan sertifikasi SNI",
      "Jagung manis hibrida berkualitas ekspor",
      "Sayuran organik dengan sistem hidroponik & konvensional",
      "Monitoring lahan real-time berbasis IoT",
    ],
  },
  {
    icon: Beef,
    title: "Peternakan Terpadu",
    desc: "Peternakan sapi, kambing, dan unggas yang dikelola dengan standar kesehatan hewan ketat. Kami menerapkan konsep zero waste dimana limbah peternakan diolah menjadi pupuk organik.",
    image: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=800&q=80",
    features: [
      "Sapi potong & perah dengan pakan berkualitas",
      "Kambing etawa untuk produksi susu & daging",
      "Ayam kampung dengan sistem free-range",
      "Program vaksinasi & kesehatan hewan berkala",
    ],
  },
  {
    icon: Truck,
    title: "Distribusi & Logistik",
    desc: "Jaringan distribusi terintegrasi dengan cold chain management yang menjamin kesegaran produk. Kami melayani distribusi ke pasar tradisional, supermarket, restoran, dan hotel.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    features: [
      "Cold chain management untuk produk segar",
      "Armada distribusi dengan GPS tracking",
      "Pengiriman ke seluruh Jawa & Sumatera",
      "Sistem pemesanan online untuk mitra bisnis",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Konsultasi Pertanian",
    desc: "Tim ahli agronomi kami menyediakan pendampingan teknis komprehensif bagi petani mitra dan pelaku usaha pertanian yang ingin meningkatkan produktivitas dan kualitas hasil.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    features: [
      "Analisis kesuburan tanah & rekomendasi pemupukan",
      "Pelatihan teknik budidaya modern",
      "Pendampingan sertifikasi organik",
      "Konsultasi manajemen usaha pertanian",
    ],
  },
  {
    icon: Factory,
    title: "Pengolahan Hasil Tani",
    desc: "Fasilitas pengolahan modern yang mengubah hasil pertanian dan peternakan menjadi produk bernilai tambah tinggi, dengan tetap menjaga kualitas dan keamanan pangan.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Penggilingan beras dengan mesin modern",
      "Pasteurisasi susu segar dengan standar BPOM",
      "Pengemasan vakum untuk daging premium",
      "Produksi pupuk organik dari limbah peternakan",
    ],
  },
  {
    icon: TreePine,
    title: "Pembibitan & Nursery",
    desc: "Pusat pembibitan tanaman dengan varietas unggul yang telah melalui proses seleksi dan pengujian ketat untuk memastikan kualitas dan produktivitas optimal.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    features: [
      "Bibit padi varietas unggul bersertifikat",
      "Bibit sayuran organik berkualitas",
      "Bibit tanaman buah tropis",
      "Konsultasi pemilihan varietas sesuai lahan",
    ],
  },
];

export default function LayananPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1920&q=80"
            alt="Layanan AgroNusantara"
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
              Layanan
            </span>
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">
            Layanan Kami
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Solusi terpadu dari hulu ke hilir untuk memenuhi kebutuhan sektor
            pertanian dan peternakan modern
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 lg:space-y-28">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isEven = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
                >
                  <AnimateOnScroll
                    className={isEven ? "order-1" : "order-1 lg:order-2"}
                  >
                    <div className="img-hover-zoom rounded-2xl shadow-lg">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={800}
                        height={500}
                        className="rounded-2xl object-cover w-full h-[300px] lg:h-[400px]"
                      />
                    </div>
                  </AnimateOnScroll>

                  <AnimateOnScroll
                    className={isEven ? "order-2" : "order-2 lg:order-1"}
                    delay={200}
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                      <Icon size={28} className="text-primary" />
                    </div>
                    <h2 className="font-heading text-2xl lg:text-3xl font-bold text-primary-dark mb-4">
                      {service.title}
                    </h2>
                    <p className="text-earth-light leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-secondary mt-0.5 shrink-0"
                          />
                          <span className="text-earth text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </AnimateOnScroll>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <div className="section-line mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Alur Kerja Kami
            </h2>
            <p className="text-earth-light max-w-2xl mx-auto">
              Proses yang terstruktur dan transparan untuk memastikan kualitas
              terbaik di setiap tahap
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Konsultasi",
                desc: "Diskusi kebutuhan dan analisis potensi lahan atau proyek yang akan dijalankan.",
              },
              {
                step: "02",
                title: "Perencanaan",
                desc: "Penyusunan rencana kerja detail mencakup timeline, sumber daya, dan target.",
              },
              {
                step: "03",
                title: "Eksekusi",
                desc: "Implementasi rencana dengan monitoring berkala dan pendampingan teknis.",
              },
              {
                step: "04",
                title: "Evaluasi",
                desc: "Penilaian hasil dan penyusunan rekomendasi untuk peningkatan berkelanjutan.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl p-7 border border-cream-dark text-center relative">
                  <span className="font-heading text-5xl font-bold text-cream-dark absolute top-4 right-6">
                    {item.step}
                  </span>
                  <div className="relative">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-5">
                      <span className="font-heading font-bold text-white text-lg">
                        {item.step}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-primary-dark mb-3">
                      {item.title}
                    </h3>
                    <p className="text-earth-light text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
            alt="Lahan pertanian"
            fill
            className="object-cover"
          />
          <div className="cta-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-5">
              Butuh Solusi untuk Kebutuhan Pertanian Anda?
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda menemukan solusi terbaik.
              Konsultasi gratis untuk setiap mitra baru.
            </p>
            <Link
              href="/kontak"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-xl"
            >
              Konsultasi Gratis
              <ArrowRight size={18} />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
