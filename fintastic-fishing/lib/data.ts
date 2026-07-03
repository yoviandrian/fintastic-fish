// Data terpusat untuk Fintastic Fishing.
// Ubah nilai di file ini untuk memperbarui konten di seluruh website
// (alamat, nomor WA, paket sewa, daftar alat, FAQ, dsb).

export const siteConfig = {
  brand: "Fintastic Fishing",
  storeName: "Sewa Alat Pancing - Fintastic Fishing",
  tagline: "Sewa Alat Pancing Praktis di Jakarta Timur",
  // Ganti dengan domain asli saat sudah live, lalu update juga
  // metadataBase di app/layout.tsx dan public/sitemap.xml.
  url: "https://fintasticfishing.com",
  phoneDisplay: "0851-1165-7177",
  phoneIntl: "+6285111657177",
  whatsappNumber: "6285111657177",
  address: {
    street: "Jl. Remaja II No.58A, RT.1/RW.10, Kp. Tengah",
    district: "Kec. Kramat Jati",
    city: "Kota Jakarta Timur",
    region: "Daerah Khusus Ibukota Jakarta",
    postalCode: "13540",
    country: "ID",
    full: "Jl. Remaja II No.58A, RT.1/RW.10, Kp. Tengah, Kec. Kramat Jati, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13540",
  },
  googleMapsUrl: "https://maps.app.goo.gl/QrZD8Qn1NjcN52Yz7?g_st=ac",
  // TODO(pemilik): ganti dengan koordinat lokasi toko yang akurat agar embed peta presisi.
  mapEmbedSrc:
    "https://www.google.com/maps?q=Jl.+Remaja+II+No.58A+Kramat+Jati+Jakarta+Timur&output=embed",
  // TODO(pemilik): isi jam operasional aktual. Nilai di bawah ini placeholder.
  openingHours: [
    { day: "Senin - Jumat", hours: "08.00 - 20.00" },
    { day: "Sabtu - Minggu", hours: "07.00 - 21.00" },
  ],
  openingHoursSchema: [
    {
      days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      days: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "21:00",
    },
  ],
};

export function waLink(message: string) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
}

export const defaultWaMessage =
  "Halo Fintastic Fishing, saya ingin tanya sewa alat pancing.";

export const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Paket Sewa", href: "#paket-sewa" },
  { label: "Cara Sewa", href: "#cara-sewa" },
  { label: "Lokasi", href: "#lokasi" },
  { label: "Ulasan", href: "#ulasan" },
  { label: "FAQ", href: "#faq" },
];

export const heroBadges = [
  "Lokasi Jakarta Timur",
  "Alat Siap Pakai",
  "Cocok untuk Pemula",
  "Booking via WhatsApp",
];

export const features = [
  {
    title: "Alat Pancing Siap Pakai",
    description:
      "Joran, reel, dan senar sudah dicek kondisinya sebelum diserahkan, jadi Anda tinggal berangkat mancing.",
    icon: "rod",
  },
  {
    title: "Proses Sewa Mudah",
    description:
      "Cukup chat WhatsApp, pilih kebutuhan alat, dan konfirmasi jadwal — tanpa ribet.",
    icon: "chat",
  },
  {
    title: "Lokasi Mudah Dijangkau",
    description:
      "Berada di Kramat Jati, Jakarta Timur, dekat dengan area mancing favorit di sekitar kota.",
    icon: "pin",
  },
  {
    title: "Cocok untuk Harian & Weekend",
    description:
      "Tersedia untuk sewa mancing harian maupun rencana akhir pekan bersama teman atau keluarga.",
    icon: "clock",
  },
];

export const packages = [
  {
    name: "Paket Basic",
    description: "Untuk pemula atau mancing santai.",
    highlight: false,
    items: ["Joran pancing", "Reel", "Senar dasar"],
  },
  {
    name: "Paket Standard",
    description: "Untuk pemancing reguler.",
    highlight: true,
    items: ["Joran pancing", "Reel", "Senar", "Tackle box"],
  },
  {
    name: "Paket Lengkap",
    description: "Untuk kebutuhan mancing yang lebih serius.",
    highlight: false,
    items: [
      "Joran pancing",
      "Reel",
      "Senar",
      "Tackle box",
      "Aksesoris pancing",
    ],
  },
];

export const equipmentList = [
  { name: "Joran Pancing", icon: "rod" },
  { name: "Reel", icon: "reel" },
  { name: "Senar", icon: "line" },
  { name: "Tackle Box", icon: "box" },
  { name: "Aksesoris Pancing", icon: "accessory" },
  { name: "Perlengkapan Pendukung", icon: "gear" },
];

export const rentalSteps = [
  {
    title: "Chat WhatsApp",
    description: "Hubungi kami untuk menyampaikan rencana mancing Anda.",
  },
  {
    title: "Pilih Paket / Peralatan",
    description: "Sesuaikan kebutuhan alat dengan jenis mancing yang direncanakan.",
  },
  {
    title: "Konfirmasi Jadwal",
    description: "Kami bantu cek ketersediaan alat untuk tanggal yang Anda inginkan.",
  },
  {
    title: "Ambil Alat",
    description: "Ambil di lokasi Kramat Jati atau sesuai kesepakatan bersama.",
  },
  {
    title: "Gunakan & Kembalikan",
    description: "Nikmati sesi mancing, lalu kembalikan alat sesuai jadwal yang disepakati.",
  },
];

// Placeholder testimonial — ganti dengan data asli dari Google Business Profile
// setelah integrasi API terpasang. Lihat komentar di components/GoogleReviews.tsx.
export const placeholderTestimonials = [
  {
    name: "Rian A.",
    rating: 5,
    text: "Alatnya siap pakai dan kondisinya masih bagus. Proses sewa lewat WhatsApp juga cepat direspons.",
  },
  {
    name: "Dewi P.",
    rating: 5,
    text: "Baru pertama kali mancing dan dibantu dipilihkan alat yang cocok untuk pemula. Terima kasih Fintastic Fishing.",
  },
  {
    name: "Bagas S.",
    rating: 4,
    text: "Lokasinya gampang ditemukan dari Kramat Jati. Cocok buat rencana mancing weekend bareng teman.",
  },
];

export const faqs = [
  {
    question: "Apakah bisa sewa alat pancing untuk pemula?",
    answer:
      "Bisa. Tim kami membantu memilihkan alat yang sesuai untuk pemula, termasuk penjelasan singkat cara pemakaiannya.",
  },
  {
    question: "Bagaimana cara cek ketersediaan alat?",
    answer:
      "Cek ketersediaan alat pancing paling mudah lewat chat WhatsApp. Sebutkan tanggal dan jenis alat yang dibutuhkan, kami infokan stoknya.",
  },
  {
    question: "Apakah bisa booking melalui WhatsApp?",
    answer:
      "Bisa. Booking sewa alat pancing di Fintastic Fishing dilakukan sepenuhnya lewat WhatsApp agar prosesnya cepat dan jelas.",
  },
  {
    question: "Lokasinya di mana?",
    answer:
      "Fintastic Fishing berlokasi di Jl. Remaja II No.58A, Kramat Jati, Jakarta Timur. Lihat detail dan rute lengkap di bagian Lokasi pada halaman ini.",
  },
  {
    question: "Apakah harga paket bisa berubah?",
    answer:
      "Harga dan ketersediaan alat dapat berubah sewaktu-waktu. Silakan hubungi WhatsApp untuk info paket dan harga terbaru.",
  },
  {
    question: "Apakah alat harus diambil langsung ke toko?",
    answer:
      "Pengambilan alat pada umumnya dilakukan di lokasi Kramat Jati, namun kesepakatan lain bisa didiskusikan langsung lewat WhatsApp.",
  },
];
