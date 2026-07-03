import { siteConfig, waLink, defaultWaMessage, navLinks } from "@/lib/data";
import { RodIcon, PinIcon, WhatsAppIcon, MapIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 pb-24 pt-14 text-sand-100 lg:pb-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-aqua-400/15 text-aqua-300">
                <RodIcon className="h-4.5 w-4.5" />
              </span>
              <span className="font-display text-lg font-semibold text-white">
                {siteConfig.brand}
              </span>
            </div>
            <p className="mt-3 font-body text-sm leading-relaxed text-sand-100/65">
              Sewa alat pancing praktis dan siap pakai di Kramat Jati, Jakarta
              Timur.
            </p>
          </div>

          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-sand-100/50">
              Navigasi
            </h3>
            <ul className="mt-3 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-sand-100/75 hover:text-aqua-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-sand-100/50">
              Kontak
            </h3>
            <div className="mt-3 space-y-3">
              <a
                href={waLink(defaultWaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 font-body text-sm text-sand-100/75 hover:text-aqua-300"
              >
                <WhatsAppIcon className="mt-0.5 h-4 w-4 shrink-0" />
                {siteConfig.phoneDisplay}
              </a>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 font-body text-sm text-sand-100/75 hover:text-aqua-300"
              >
                <MapIcon className="mt-0.5 h-4 w-4 shrink-0" />
                Buka di Google Maps
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wide text-sand-100/50">
              Alamat
            </h3>
            <p className="mt-3 flex items-start gap-2.5 font-body text-sm leading-relaxed text-sand-100/75">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0" />
              {siteConfig.address.full}
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-xs text-sand-100/50">
            &copy; {year} {siteConfig.brand}. Semua hak dilindungi.
          </p>
          <p className="font-body text-xs text-sand-100/40">
            {siteConfig.storeName} &middot; {siteConfig.phoneDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
