import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Kontak - AgroNusantara",
  description:
    "Hubungi AgroNusantara untuk informasi produk, kemitraan, atau konsultasi pertanian. Kami siap melayani Anda.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat Kantor",
    details: ["Jl. Raya Agro No. 88", "Bogor, Jawa Barat 16710"],
  },
  {
    icon: Phone,
    title: "Telepon",
    details: ["(021) 876-5432", "+62 812-3456-7890 (WhatsApp)"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@agronusantara.co.id", "sales@agronusantara.co.id"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Jumat: 08.00 - 17.00 WIB", "Sabtu: 08.00 - 13.00 WIB"],
  },
];

export default function KontakPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80"
            alt="Kontak AgroNusantara"
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
              Kontak
            </span>
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">
            Hubungi Kami
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Kami senang mendengar dari Anda. Silakan hubungi kami untuk
            pertanyaan, kemitraan, atau konsultasi
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-0 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mt-16">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={i} delay={i * 100}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-cream-dark card-hover">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-primary-dark mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, j) => (
                      <p key={j} className="text-earth-light text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <AnimateOnScroll className="lg:col-span-3">
              <div className="section-line mb-5" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-3">
                Kirim Pesan
              </h2>
              <p className="text-earth-light mb-8">
                Isi formulir di bawah dan tim kami akan merespons dalam 1x24
                jam kerja.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-earth mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama Anda"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-earth placeholder:text-earth-light/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      placeholder="email@contoh.com"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-earth placeholder:text-earth-light/50 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-earth mb-2">
                      Nomor Telepon
                    </label>
                    <input
                      type="tel"
                      placeholder="+62 xxx-xxxx-xxxx"
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-earth placeholder:text-earth-light/50 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth mb-2">
                      Subjek *
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-earth transition-all">
                      <option value="">Pilih subjek</option>
                      <option value="produk">Informasi Produk</option>
                      <option value="kemitraan">Kemitraan</option>
                      <option value="konsultasi">Konsultasi Pertanian</option>
                      <option value="pemesanan">Pemesanan</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-earth mb-2">
                    Pesan *
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tuliskan pesan Anda di sini..."
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-earth placeholder:text-earth-light/50 transition-all resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                  >
                    <Send size={18} />
                    Kirim Pesan
                  </button>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-primary/20 hover:border-primary text-primary px-8 py-3.5 rounded-xl font-semibold transition-all duration-300"
                  >
                    <MessageCircle size={18} />
                    Via WhatsApp
                  </a>
                </div>
              </form>
            </AnimateOnScroll>

            {/* Sidebar */}
            <AnimateOnScroll className="lg:col-span-2" delay={200}>
              <div className="bg-cream rounded-2xl p-7 border border-cream-dark mb-6">
                <h3 className="font-heading text-xl font-semibold text-primary-dark mb-4">
                  Kantor Pusat
                </h3>
                <div className="rounded-xl overflow-hidden mb-4 h-[200px] bg-earth-light/20 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1524813686514-a57563d77965?auto=format&fit=crop&w=600&q=80"
                    alt="Lokasi kantor"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-lg">
                      <p className="text-primary font-semibold text-sm flex items-center gap-2">
                        <MapPin size={16} />
                        Bogor, Jawa Barat
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-earth-light text-sm leading-relaxed">
                  Jl. Raya Agro No. 88, Bogor, Jawa Barat 16710. Terletak
                  strategis di jantung kawasan pertanian Bogor, mudah diakses
                  dari Jakarta via Tol Jagorawi.
                </p>
              </div>

              <div className="bg-primary rounded-2xl p-7 text-white">
                <h3 className="font-heading text-xl font-semibold mb-3">
                  Kunjungan Farm Tour
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Tertarik mengunjungi lahan pertanian dan peternakan kami
                  secara langsung? Kami menyediakan program farm tour untuk
                  individu maupun rombongan.
                </p>
                <ul className="space-y-2 mb-5">
                  {[
                    "Tur lahan pertanian organik",
                    "Kunjungan peternakan terpadu",
                    "Workshop pertanian untuk pelajar",
                    "Tersedia setiap Sabtu (reservasi)",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-white/80 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20program%20Farm%20Tour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                >
                  Reservasi Farm Tour
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-12">
            <div className="section-line mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Pertanyaan Umum
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {[
              {
                q: "Bagaimana cara memesan produk AgroNusantara?",
                a: "Anda dapat memesan melalui formulir kontak di website, WhatsApp, atau menghubungi tim sales kami secara langsung. Untuk pemesanan rutin, kami menyediakan sistem kontrak pasokan.",
              },
              {
                q: "Apakah tersedia pengiriman ke luar Jawa?",
                a: "Saat ini kami melayani pengiriman ke seluruh Jawa dan sebagian Sumatera. Untuk wilayah lain, silakan hubungi tim kami untuk informasi lebih lanjut.",
              },
              {
                q: "Berapa minimum order untuk pembelian partai besar?",
                a: "Minimum order bervariasi tergantung jenis produk. Untuk beras minimum 1 ton, sayuran minimum 100 kg, dan daging minimum 50 kg. Hubungi tim sales untuk detail lengkap.",
              },
              {
                q: "Bagaimana cara menjadi petani mitra AgroNusantara?",
                a: "Kami terbuka untuk kemitraan dengan petani di wilayah Jawa Barat. Silakan hubungi kami melalui formulir kontak atau datang langsung ke kantor kami untuk informasi program kemitraan.",
              },
              {
                q: "Apakah produk AgroNusantara benar-benar organik?",
                a: "Ya, produk pertanian kami yang berlabel organik telah memenuhi standar SNI 6729:2016 dan disertifikasi oleh lembaga sertifikasi organik terakreditasi.",
              },
            ].map((faq, i) => (
              <AnimateOnScroll key={i} delay={i * 80}>
                <div className="bg-white rounded-2xl p-6 border border-cream-dark">
                  <h3 className="font-semibold text-primary-dark mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-earth-light text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
