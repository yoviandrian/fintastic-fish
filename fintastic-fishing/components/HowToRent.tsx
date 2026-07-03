import { rentalSteps, waLink, defaultWaMessage } from "@/lib/data";
import { WhatsAppIcon } from "./icons";

export default function HowToRent() {
  return (
    <section id="cara-sewa" className="bg-navy-900 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="section-eyebrow bg-aqua-400/10 text-aqua-300">Cara Sewa</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Sewa alat pancing dalam 5 langkah mudah
          </h2>
          <p className="mt-3 font-body text-sand-100/75">
            Prosesnya sederhana dan sepenuhnya dilakukan lewat WhatsApp, dari
            konfirmasi kebutuhan alat sampai jadwal pengembalian.
          </p>
        </div>

        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {rentalSteps.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-white/10 bg-navy-800/60 p-5"
            >
              <span className="font-mono text-xs font-semibold tracking-widest text-amber-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-base font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-sand-100/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex justify-center sm:justify-start">
          <a
            href={waLink(defaultWaMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-sunset-500 px-6 py-3.5 font-body text-base font-semibold text-white shadow-tag transition-transform hover:-translate-y-0.5 hover:bg-sunset-600"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Mulai Sewa via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
