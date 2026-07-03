import { waLink, defaultWaMessage } from "@/lib/data";
import { WhatsAppIcon } from "./icons";

// Tombol WhatsApp yang menempel di bagian bawah layar khusus mobile,
// supaya CTA utama selalu terlihat tanpa mengganggu konten desktop.
export default function StickyWhatsApp() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-navy-900/10 bg-sand-50/95 p-3 backdrop-blur lg:hidden">
      <a
        href={waLink(defaultWaMessage)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full bg-sunset-500 py-3.5 font-body text-sm font-semibold text-white shadow-tag"
      >
        <WhatsAppIcon className="h-5 w-5" />
        Chat WhatsApp untuk Sewa Alat Pancing
      </a>
    </div>
  );
}
