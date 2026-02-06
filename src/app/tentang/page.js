import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Target,
  Eye,
  Heart,
  Leaf,
  Award,
  Users,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Tentang Kami - AgroNusantara",
  description:
    "Mengenal lebih dekat AgroNusantara, perusahaan pertanian dan peternakan terpadu yang telah berdiri sejak 2006.",
};

const timeline = [
  {
    year: "2006",
    title: "Awal Perjalanan",
    desc: "Dimulai dari 50 hektar lahan pertanian keluarga di Bogor, Jawa Barat, dengan fokus pada budidaya padi dan palawija.",
  },
  {
    year: "2010",
    title: "Ekspansi Peternakan",
    desc: "Memulai unit peternakan sapi perah dan potong dengan 200 ekor pertama, menandai transformasi menjadi perusahaan agribisnis terpadu.",
  },
  {
    year: "2014",
    title: "Sertifikasi Organik",
    desc: "Memperoleh sertifikasi organik nasional untuk 500 hektar lahan pertanian, menjadi salah satu pionir pertanian organik berskala besar.",
  },
  {
    year: "2018",
    title: "Program Kemitraan",
    desc: "Meluncurkan program kemitraan petani dengan 300 petani lokal pertama, menyediakan akses teknologi dan pasar.",
  },
  {
    year: "2022",
    title: "Smart Farming",
    desc: "Implementasi teknologi IoT dan drone monitoring untuk 1.500 hektar lahan, meningkatkan efisiensi produksi hingga 35%.",
  },
  {
    year: "2024",
    title: "Menuju Masa Depan",
    desc: "Mengelola 2.500+ hektar lahan dengan 850+ petani mitra, terus berinovasi untuk ketahanan pangan Nusantara.",
  },
];

const team = [
  {
    name: "Ir. Surya Dharma, M.Agr.",
    role: "Direktur Utama",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    desc: "25 tahun pengalaman di sektor agribisnis. Alumni IPB University.",
  },
  {
    name: "Dr. Anisa Putri",
    role: "Direktur Operasional",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    desc: "Ahli pertanian berkelanjutan dengan spesialisasi sistem pertanian terpadu.",
  },
  {
    name: "Drh. Rizal Hakim",
    role: "Kepala Divisi Peternakan",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    desc: "Dokter hewan berpengalaman dengan fokus pada kesejahteraan hewan ternak.",
  },
  {
    name: "Siti Rahayu, S.P.",
    role: "Kepala Divisi Pertanian",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    desc: "Spesialis agronomi dengan pengalaman 15 tahun di budidaya tanaman pangan.",
  },
];

export default function TentangPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1920&q=80"
            alt="Tentang AgroNusantara"
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
              Tentang Kami
            </span>
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">
            Cerita Kami
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Mengenal lebih dekat perjalanan AgroNusantara dalam membangun
            ekosistem pertanian berkelanjutan di Indonesia
          </p>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Misi Kami",
                desc: "Menyediakan produk pangan berkualitas tinggi melalui pengelolaan pertanian dan peternakan terpadu yang berkelanjutan, sambil memberdayakan masyarakat petani lokal.",
                color: "bg-primary/10",
                iconColor: "text-primary",
              },
              {
                icon: Eye,
                title: "Visi Kami",
                desc: "Menjadi perusahaan agribisnis terpadu terdepan di Indonesia yang diakui secara nasional dan internasional dalam inovasi pertanian berkelanjutan pada tahun 2030.",
                color: "bg-accent/10",
                iconColor: "text-accent-dark",
              },
              {
                icon: Heart,
                title: "Nilai Kami",
                desc: "Keberlanjutan, integritas, inovasi, dan gotong royong menjadi pondasi setiap keputusan dan tindakan kami dalam menjalankan bisnis.",
                color: "bg-secondary/20",
                iconColor: "text-primary",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimateOnScroll key={i} delay={i * 150}>
                  <div className="text-center p-8 rounded-2xl border border-cream-dark bg-white">
                    <div
                      className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                    >
                      <Icon size={30} className={item.iconColor} />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-primary-dark mb-4">
                      {item.title}
                    </h3>
                    <p className="text-earth-light leading-relaxed text-sm">
                      {item.desc}
                    </p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimateOnScroll>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80"
                  alt="Lahan pertanian"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover w-full h-[300px] lg:h-[380px]"
                />
                <Image
                  src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=600&q=80"
                  alt="Peternakan"
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover w-full h-[300px] lg:h-[380px] mt-8"
                />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="section-line mb-5" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-6 leading-snug">
                Dari Sepetak Sawah Menuju Agribisnis Terdepan
              </h2>
              <div className="space-y-4 text-earth-light leading-relaxed">
                <p>
                  AgroNusantara lahir dari kecintaan mendalam terhadap tanah
                  Nusantara. Bermula dari 50 hektar lahan warisan keluarga di
                  Bogor pada tahun 2006, kami memulai perjalanan dengan visi
                  sederhana: menghasilkan pangan berkualitas dengan cara yang
                  menghormati alam.
                </p>
                <p>
                  Selama hampir dua dekade, kami terus bertumbuh dan
                  bertransformasi. Dari pertanian konvensional, kami beralih ke
                  praktik pertanian organik dan berkelanjutan. Dari usaha
                  keluarga, kami berkembang menjadi perusahaan agribisnis terpadu
                  yang mengelola ribuan hektar lahan dan puluhan ribu ekor
                  ternak.
                </p>
                <p>
                  Namun yang paling kami banggakan bukanlah skala bisnis kami,
                  melainkan dampak positif yang telah kami ciptakan bagi ratusan
                  keluarga petani di Jawa Barat dan masyarakat luas yang
                  menikmati produk pangan berkualitas dari lahan kami.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-16">
            <div className="section-line mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Perjalanan Kami
            </h2>
            <p className="text-earth-light max-w-2xl mx-auto">
              Setiap langkah membawa kami lebih dekat pada misi membangun
              ketahanan pangan Nusantara
            </p>
          </AnimateOnScroll>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-cream-dark lg:-translate-x-px" />

            {timeline.map((item, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div
                  className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                    i % 2 === 0
                      ? "lg:flex-row"
                      : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1.5 mt-2 ring-4 ring-cream z-10" />

                  {/* Content */}
                  <div
                    className={`ml-12 lg:ml-0 lg:w-1/2 ${
                      i % 2 === 0
                        ? "lg:pr-12 lg:text-right"
                        : "lg:pl-12"
                    }`}
                  >
                    <span className="inline-block font-heading text-2xl font-bold text-accent mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-primary-dark mb-2">
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

      {/* Team */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-14">
            <div className="section-line mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Tim Kepemimpinan
            </h2>
            <p className="text-earth-light max-w-2xl mx-auto">
              Dipimpin oleh para profesional berpengalaman yang berdedikasi pada
              kemajuan sektor pertanian Indonesia
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <AnimateOnScroll key={i} delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden border border-cream-dark card-hover">
                  <div className="img-hover-zoom">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-[280px] object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="font-heading text-lg font-semibold text-primary-dark mb-1">
                      {member.name}
                    </h4>
                    <p className="text-accent text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-earth-light text-xs leading-relaxed">
                      {member.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimateOnScroll>
              <div className="section-line mb-5" />
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-6 leading-snug">
                Standar & Sertifikasi
              </h2>
              <p className="text-earth-light leading-relaxed mb-8">
                Komitmen kami terhadap kualitas dibuktikan melalui berbagai
                sertifikasi yang kami pegang. Setiap produk yang kami hasilkan
                telah memenuhi standar tertinggi.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Award, label: "Organik Nasional", sub: "SNI 6729:2016" },
                  { icon: Leaf, label: "Good Agricultural Practices", sub: "GAP Certified" },
                  { icon: Award, label: "ISO 22000", sub: "Food Safety" },
                  { icon: Users, label: "Fair Trade", sub: "Certified Partner" },
                ].map((cert, i) => {
                  const Icon = cert.icon;
                  return (
                    <div
                      key={i}
                      className="bg-cream rounded-xl p-4 border border-cream-dark"
                    >
                      <Icon size={24} className="text-primary mb-2" />
                      <h4 className="font-semibold text-primary-dark text-sm">
                        {cert.label}
                      </h4>
                      <p className="text-earth-light text-xs">{cert.sub}</p>
                    </div>
                  );
                })}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <Image
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80"
                alt="Produk pertanian berkualitas"
                width={800}
                height={600}
                className="rounded-2xl object-cover w-full h-[400px] lg:h-[480px]"
              />
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4">
            Tertarik Bermitra dengan Kami?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Hubungi kami untuk diskusi mengenai kemitraan, pembelian produk,
            atau peluang kerja sama lainnya.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
          >
            Hubungi Kami
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
