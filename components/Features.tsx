import { features } from "@/lib/data";
import { featureIconMap } from "./icons";

export default function Features() {
  return (
    <section className="bg-sand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Kenapa Sewa di Fintastic Fishing</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Sewa alat pancing yang praktis dan bisa diandalkan
          </h2>
          <p className="mt-3 font-body text-navy-800/75">
            Kami fokus pada empat hal yang paling dicari pemancing di Jakarta
            Timur: alat yang siap pakai, proses yang mudah, lokasi yang
            terjangkau, dan fleksibilitas jadwal.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = featureIconMap[feature.icon as keyof typeof featureIconMap];
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-600/10 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">
                  {feature.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-navy-800/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
