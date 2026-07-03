"use client";

import { useState, FormEvent } from "react";
import { siteConfig } from "@/lib/data";
import { WhatsAppIcon } from "./icons";

// Form ringkas ini tidak menyimpan data ke server mana pun — saat dikirim,
// isian akan disusun menjadi pesan WhatsApp yang sudah terisi otomatis,
// lalu membuka chat WhatsApp Fintastic Fishing.
export default function InquiryForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [needs, setNeeds] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const lines = [
      `Halo Fintastic Fishing, saya ingin mengajukan sewa alat pancing.`,
      name ? `Nama: ${name}` : null,
      date ? `Rencana tanggal sewa: ${date}` : null,
      needs ? `Kebutuhan alat: ${needs}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="rounded-2xl border border-navy-900/8 bg-white p-6 shadow-card sm:p-8">
      <h3 className="font-display text-xl font-semibold text-navy-900">
        Ajukan Permintaan Sewa
      </h3>
      <p className="mt-1 font-body text-sm text-navy-800/70">
        Isi form singkat ini, kami teruskan otomatis ke WhatsApp untuk
        konfirmasi ketersediaan.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label htmlFor="inquiry-name" className="font-body text-sm font-medium text-navy-900">
            Nama
          </label>
          <input
            id="inquiry-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Anda"
            className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 font-body text-sm text-navy-900 placeholder:text-navy-800/40 focus:border-teal-500"
          />
        </div>

        <div>
          <label htmlFor="inquiry-date" className="font-body text-sm font-medium text-navy-900">
            Rencana Tanggal Sewa
          </label>
          <input
            id="inquiry-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 font-body text-sm text-navy-900 focus:border-teal-500"
          />
        </div>

        <div>
          <label htmlFor="inquiry-needs" className="font-body text-sm font-medium text-navy-900">
            Kebutuhan Alat
          </label>
          <textarea
            id="inquiry-needs"
            value={needs}
            onChange={(e) => setNeeds(e.target.value)}
            placeholder="Contoh: 2 joran pancing, 1 tackle box"
            rows={3}
            className="mt-1.5 w-full rounded-xl border border-navy-900/15 px-4 py-2.5 font-body text-sm text-navy-900 placeholder:text-navy-800/40 focus:border-teal-500"
          />
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-sunset-500 px-5 py-3 font-body text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-sunset-600"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Kirim ke WhatsApp
        </button>
      </form>
    </div>
  );
}
