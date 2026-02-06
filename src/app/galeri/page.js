import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata = {
  title: "Galeri - AgroNusantara",
  description:
    "Galeri foto kegiatan pertanian dan peternakan AgroNusantara. Lahan, peternakan, proses panen, dan kegiatan lainnya.",
};

const galleryItems = [
  {
    src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    alt: "Lahan pertanian saat golden hour",
    caption: "Hamparan sawah saat panen raya",
    span: "col-span-1 sm:col-span-2 row-span-2",
    height: "h-[400px] sm:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80",
    alt: "Sawah terasering hijau",
    caption: "Sawah terasering organik",
    span: "col-span-1",
    height: "h-[250px]",
  },
  {
    src: "https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?auto=format&fit=crop&w=600&q=80",
    alt: "Peternakan sapi",
    caption: "Peternakan sapi di pagi hari",
    span: "col-span-1",
    height: "h-[250px]",
  },
  {
    src: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    alt: "Proses panen sayuran",
    caption: "Panen sayuran organik segar",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=600&q=80",
    alt: "Hasil panen segar",
    caption: "Hasil pertanian siap distribusi",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=600&q=80",
    alt: "Petani di sawah",
    caption: "Petani mitra sedang bekerja",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    alt: "Butiran beras",
    caption: "Beras organik premium",
    span: "col-span-1",
    height: "h-[300px]",
  },
  {
    src: "https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=800&q=80",
    alt: "Pemandangan lahan hijau",
    caption: "Lahan pertanian AgroNusantara",
    span: "col-span-1 sm:col-span-2",
    height: "h-[300px]",
  },
  {
    src: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80",
    alt: "Sayuran segar",
    caption: "Sayuran organik segar dari kebun",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    alt: "Jagung manis",
    caption: "Jagung manis siap panen",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=600&q=80",
    alt: "Susu segar",
    caption: "Susu segar dari peternakan",
    span: "col-span-1",
    height: "h-[280px]",
  },
  {
    src: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    alt: "Madu hutan",
    caption: "Madu hutan asli Nusantara",
    span: "col-span-1",
    height: "h-[280px]",
  },
];

export default function GaleriPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1473973266408-ed4e27abdd47?auto=format&fit=crop&w=1920&q=80"
            alt="Galeri AgroNusantara"
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
              Galeri
            </span>
          </div>
          <h1 className="font-heading text-4xl lg:text-6xl font-bold text-white mb-4">
            Galeri Foto
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            Dokumentasi kegiatan pertanian, peternakan, dan aktivitas
            sehari-hari di AgroNusantara
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="mb-12">
            <div className="section-line mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Momen dari Lapangan
            </h2>
            <p className="text-earth-light max-w-2xl">
              Setiap foto menceritakan dedikasi kami dalam mengelola pertanian
              dan peternakan berkualitas di Nusantara
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <AnimateOnScroll
                key={i}
                delay={i * 60}
                className={item.span}
              >
                <div
                  className={`group relative rounded-2xl overflow-hidden img-hover-zoom ${item.height} w-full`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                    <p className="text-white font-medium text-sm">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center">
            <div className="section-line mx-auto mb-5" />
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-4">
              Kunjungan Virtual
            </h2>
            <p className="text-earth-light max-w-2xl mx-auto mb-10">
              Jelajahi lahan pertanian dan peternakan kami melalui tur virtual.
              Lihat langsung bagaimana kami mengelola setiap aspek produksi.
            </p>

            <div className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto">
              <Image
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
                alt="Virtual tour"
                width={1200}
                height={600}
                className="w-full h-[300px] lg:h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors hover:scale-110 transform duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
