import { placeholderTestimonials, siteConfig } from "@/lib/data";
import { StarIcon, MapIcon } from "./icons";

export type Review = {
  name: string;
  rating: number;
  text: string;
};

type GoogleReviewsProps = {
  reviews?: Review[];
};

/**
 * Komponen ulasan pelanggan.
 *
 * STATUS SAAT INI: menampilkan testimonial placeholder (bukan hasil scraping).
 *
 * CARA MENGAKTIFKAN ULASAN GOOGLE ASLI (opsi resmi):
 * 1. Verifikasi Google Business Profile milik Fintastic Fishing.
 * 2. Ambil data ulasan lewat Google Business Profile API (Places API "Place Details"
 *    juga bisa dipakai untuk menampilkan rating & beberapa ulasan publik).
 * 3. Fetch data tersebut di server (misalnya lewat route handler / cron sync),
 *    lalu kirim hasilnya ke komponen ini sebagai prop `reviews`, contoh:
 *      <GoogleReviews reviews={reviewsFromApi} />
 * 4. Jangan melakukan scraping halaman Google Maps secara langsung — selain
 *    berisiko melanggar Terms of Service, datanya juga tidak stabil untuk SEO.
 *
 * Selama API/verifikasi bisnis belum tersedia, komponen ini otomatis
 * menampilkan testimonial placeholder di bawah dan mengarahkan pengunjung
 * yang ingin ulasan asli ke halaman Google Maps.
 */
export default function GoogleReviews({ reviews }: GoogleReviewsProps) {
  const data = reviews && reviews.length > 0 ? reviews : placeholderTestimonials;
  const isPlaceholder = !reviews || reviews.length === 0;

  return (
    <section id="ulasan" className="bg-sand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Apa Kata Pelanggan?</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Pengalaman pelanggan Fintastic Fishing
            </h2>
          </div>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-5 py-2.5 font-body text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
          >
            <MapIcon className="h-4 w-4" />
            Lihat Ulasan di Google Maps
          </a>
        </div>

        {isPlaceholder && (
          <p className="mt-3 font-body text-xs text-navy-800/50">
            Testimonial contoh di bawah ini bersifat sementara sambil menunggu
            integrasi Google Business Profile API.
          </p>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {data.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card"
            >
              <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" filled={i < review.rating} />
                ))}
              </div>
              <span className="sr-only">Rating {review.rating} dari 5</span>
              <blockquote className="mt-4 flex-1 font-body text-sm leading-relaxed text-navy-800/80">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <figcaption className="mt-4 font-body text-sm font-semibold text-navy-900">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
