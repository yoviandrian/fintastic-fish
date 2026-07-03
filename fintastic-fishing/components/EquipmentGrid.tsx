import { equipmentList } from "@/lib/data";
import { equipmentIconMap } from "./icons";

export default function EquipmentGrid() {
  return (
    <section className="bg-sand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Perlengkapan Tersedia</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Perlengkapan pancing yang bisa Anda sewa
          </h2>
          <p className="mt-3 font-body text-navy-800/75">
            Daftar berikut adalah kategori perlengkapan yang umum tersedia.
            Ketersediaan alat spesifik dapat disesuaikan setelah pemilik toko
            memperbarui data stok lengkap.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {equipmentList.map((item) => {
            const Icon = equipmentIconMap[item.icon as keyof typeof equipmentIconMap];
            return (
              <div
                key={item.name}
                className="flex flex-col items-center gap-3 rounded-2xl border border-navy-900/8 bg-white px-4 py-6 text-center shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-aqua-400/15 text-teal-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-body text-sm font-medium text-navy-900">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-6 font-body text-xs uppercase tracking-wide text-navy-800/50">
          Daftar dapat disesuaikan setelah data stok lengkap tersedia
        </p>
      </div>
    </section>
  );
}
