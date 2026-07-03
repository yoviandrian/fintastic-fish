import { heroBadges, siteConfig, waLink, defaultWaMessage } from "@/lib/data";
import { WhatsAppIcon, MapIcon, ShieldIcon, RodIcon, PinIcon, ClockIcon } from "./icons";

const badgeIcons = [PinIcon, ShieldIcon, RodIcon, ClockIcon];

export default function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-navy-900">
      {/* Garis senar dekoratif — menandai "air" tanpa foto berat */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-25"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
      >
        <path
          d="M-50 620c180-60 320 60 500 10s340-140 520-70 260 140 380 60"
          stroke="#5EEAD4"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1 10"
          strokeLinecap="round"
        />
        <path
          d="M-50 700c200-40 340 90 540 30s320-150 500-90 260 150 400 70"
          stroke="#3FB6BE"
          strokeWidth="2"
          fill="none"
          strokeDasharray="1 8"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pb-28 lg:pt-24">
        <div>
          <p className="section-eyebrow bg-aqua-400/10 text-aqua-300">
            Rental Alat Pancing &middot; Kramat Jati, Jakarta Timur
          </p>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
            Sewa Alat Pancing di Jakarta Timur
          </h1>

          <p className="mt-3 font-display text-xl italic text-aqua-300 sm:text-2xl">
            Praktis, siap pakai, tinggal berangkat mancing.
          </p>

          <p className="mt-5 max-w-xl font-body text-base leading-relaxed text-sand-100/85 sm:text-lg">
            {siteConfig.brand} menyediakan perlengkapan pancing siap pakai untuk
            pemancing pemula hingga berpengalaman. Lokasi mudah dijangkau di
            Kramat Jati, Jakarta Timur.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sunset-500 px-6 py-3.5 font-body text-base font-semibold text-white shadow-tag transition-transform hover:-translate-y-0.5 hover:bg-sunset-600"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat WhatsApp
            </a>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-body text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              <MapIcon className="h-5 w-5" />
              Lihat Lokasi
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-2.5">
            {heroBadges.map((badge, i) => {
              const Icon = badgeIcons[i % badgeIcons.length];
              return (
                <li
                  key={badge}
                  className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 font-body text-xs font-medium text-sand-100 sm:text-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-amber-400" />
                  {badge}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Panel visual sisi kanan — pengganti foto: kartu ringkasan bergaya
            "kartu tag" bertema pancing, tetap ringan & cepat dimuat. */}
        <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:justify-self-end">
          <div className="gear-tag rounded-tag border border-white/10 bg-navy-800/70 p-6 shadow-tag backdrop-blur">
            <div className="flex items-center justify-between border-b border-dashed border-white/15 pb-4">
              <span className="font-mono text-xs uppercase tracking-[0.16em] text-aqua-300">
                Fintastic Fishing
              </span>
              <span className="font-mono text-xs text-sand-100/70">Kramat Jati</span>
            </div>

            <dl className="mt-5 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="font-body text-sm text-sand-100/80">Status alat</dt>
                <dd className="font-body text-sm font-semibold text-aqua-300">
                  Siap pakai
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-body text-sm text-sand-100/80">Cara booking</dt>
                <dd className="font-body text-sm font-semibold text-white">WhatsApp</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="font-body text-sm text-sand-100/80">Area layanan</dt>
                <dd className="font-body text-sm font-semibold text-white">
                  Jakarta Timur
                </dd>
              </div>
            </dl>

            <a
              href={waLink(defaultWaMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-aqua-400 px-4 py-3 font-body text-sm font-semibold text-navy-900 transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Tanya Ketersediaan Alat
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
