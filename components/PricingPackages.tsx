import { packages, waLink } from "@/lib/data";
import { CheckIcon, RopeLoopIcon, WhatsAppIcon } from "./icons";

export default function PricingPackages() {
  return (
    <section id="paket-sewa" className="bg-sand-100 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Paket Sewa</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Pilih paket sewa alat pancing sesuai kebutuhan
          </h2>
          <p className="mt-3 font-body text-navy-800/75">
            Tiga pilihan paket berikut membantu Anda menentukan kebutuhan alat.
            Detail isi paket bisa disesuaikan setelah konfirmasi lewat
            WhatsApp.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`gear-tag flex flex-col rounded-tag border p-6 pt-8 shadow-tag transition-transform hover:-translate-y-1 ${
                pkg.highlight
                  ? "border-teal-600 bg-navy-900 text-white"
                  : "border-navy-900/8 bg-white text-navy-900"
              }`}
            >
              {pkg.highlight && (
                <span className="mb-3 inline-flex w-fit items-center gap-1 rounded-full bg-amber-400 px-3 py-1 font-body text-xs font-semibold text-navy-900">
                  Paling Diminati
                </span>
              )}

              <div className="flex items-center gap-2">
                <RopeLoopIcon
                  className={`h-4 w-4 ${pkg.highlight ? "text-aqua-300" : "text-teal-600"}`}
                />
                <h3 className="font-display text-xl font-semibold">{pkg.name}</h3>
              </div>
              <p
                className={`mt-1 font-body text-sm ${
                  pkg.highlight ? "text-sand-100/80" : "text-navy-800/70"
                }`}
              >
                {pkg.description}
              </p>

              <div
                className={`my-5 border-t border-dashed ${
                  pkg.highlight ? "border-white/20" : "border-navy-900/15"
                }`}
              />

              <ul className="flex-1 space-y-2.5">
                {pkg.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-body text-sm">
                    <CheckIcon
                      className={`h-4 w-4 shrink-0 ${
                        pkg.highlight ? "text-aqua-300" : "text-teal-600"
                      }`}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={waLink(
                  `Halo Fintastic Fishing, saya ingin tanya harga dan ketersediaan untuk ${pkg.name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 flex items-center justify-center gap-2 rounded-full px-4 py-3 font-body text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                  pkg.highlight
                    ? "bg-sunset-500 text-white hover:bg-sunset-600"
                    : "bg-navy-900 text-white hover:bg-navy-800"
                }`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                Tanya Harga Paket
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl font-body text-sm text-navy-800/60">
          Harga dan ketersediaan alat dapat berubah. Hubungi WhatsApp untuk
          cek stok dan paket terbaru.
        </p>
      </div>
    </section>
  );
}
