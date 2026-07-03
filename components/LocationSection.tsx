import { siteConfig } from "@/lib/data";
import { PinIcon, MapIcon, ClockIcon, WhatsAppIcon } from "./icons";
import { waLink, defaultWaMessage } from "@/lib/data";

export default function LocationSection() {
  return (
    <section id="lokasi" className="bg-sand-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Lokasi Toko</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Lokasi sewa alat pancing di Kramat Jati, Jakarta Timur
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col justify-between rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card sm:p-8">
            <div className="space-y-5">
              <div className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-teal-600">
                  <PinIcon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    Alamat
                  </h3>
                  <p className="mt-1 font-body text-sm leading-relaxed text-navy-800/75">
                    {siteConfig.address.full}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-teal-600">
                  <ClockIcon className="h-4.5 w-4.5" />
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-navy-900">
                    Jam Operasional
                  </h3>
                  <ul className="mt-1 space-y-0.5 font-body text-sm text-navy-800/75">
                    {siteConfig.openingHours.map((slot) => (
                      <li key={slot.day} className="flex justify-between gap-4">
                        <span>{slot.day}</span>
                        <span className="font-mono text-navy-900">{slot.hours}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-1 font-body text-xs text-navy-800/50">
                    Jam operasional dapat berubah, konfirmasi via WhatsApp untuk kepastian.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-navy-900 px-5 py-3 font-body text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                <MapIcon className="h-4 w-4" />
                Buka di Google Maps
              </a>
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-sunset-500 px-5 py-3 font-body text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-sunset-600"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Tanya Rute
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-navy-900/8 shadow-card">
            <iframe
              title={`Lokasi ${siteConfig.storeName} di Google Maps`}
              src={siteConfig.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[320px] w-full border-0"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
