# Fintastic Fishing — Website Profile

Website profile untuk **Sewa Alat Pancing - Fintastic Fishing** (Kramat Jati,
Jakarta Timur). Dibangun dengan **Next.js 14 (App Router) + TypeScript +
Tailwind CSS**, di-export sebagai situs statis (`output: "export"`) sehingga
bisa di-hosting di Vercel, Netlify, atau hosting statis manapun.

## Struktur Project

```
fintastic-fishing/
├── app/
│   ├── layout.tsx        # Metadata SEO, font, JSON-LD LocalBusiness, Header/Footer
│   ├── page.tsx           # Merangkai semua section homepage + JSON-LD FAQPage
│   └── globals.css        # Base style, focus state, kelas "gear-tag"
├── components/
│   ├── Header.tsx          # Logo, menu, CTA "Sewa Sekarang", menu mobile
│   ├── Hero.tsx             # H1, subheadline, 2 CTA, badge
│   ├── Features.tsx         # 4 kartu keunggulan
│   ├── PricingPackages.tsx  # 3 kartu Paket Sewa (gaya "gear tag")
│   ├── EquipmentGrid.tsx    # Grid perlengkapan yang tersedia
│   ├── HowToRent.tsx        # 5 langkah cara sewa + CTA
│   ├── InquiryForm.tsx      # Form opsional -> terusan ke WhatsApp
│   ├── LocationSection.tsx  # Alamat, jam operasional, embed peta, tombol Maps
│   ├── GoogleReviews.tsx    # Ulasan (placeholder, siap diisi data API asli)
│   ├── FAQSection.tsx       # Accordion FAQ
│   ├── Footer.tsx           # NAP, link, copyright
│   ├── StickyWhatsApp.tsx   # Tombol WhatsApp sticky khusus mobile
│   ├── WaveDivider.tsx      # Pembatas gelombang antar section
│   └── icons.tsx            # Semua ikon SVG custom (ringan, tanpa file gambar)
├── lib/
│   └── data.ts              # SEMUA data situs: NAP, paket, alat, FAQ, dst.
├── public/
│   ├── og-image.png         # Placeholder gambar Open Graph (ringan, ~26 KB)
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.mjs          # output: "export" (static site)
├── tailwind.config.ts        # Token warna laut (navy/teal/aqua/sunset/amber)
└── package.json
```

> **Satu file untuk update konten:** alamat, nomor WhatsApp, isi paket sewa,
> daftar alat, FAQ, dan testimonial semuanya ada di `lib/data.ts`. Ubah di
> situ, seluruh halaman ikut ter-update otomatis.

## Menjalankan di Lokal

Butuh Node.js 18.18+ (disarankan Node 20/22).

```bash
# 1. Masuk ke folder project
cd fintastic-fishing

# 2. Install dependency
npm install

# 3. Jalankan development server
npm run dev

# Buka http://localhost:3000
```

Untuk build produksi (menghasilkan situs statis di folder `out/`):

```bash
npm run build
```

Build ini butuh koneksi internet karena font (Fraunces, Plus Jakarta Sans,
IBM Plex Mono) diambil dari Google Fonts saat build lewat `next/font/google`
— setelah build, font sudah ter-bundle sendiri (bukan request ke Google saat
situs diakses pengunjung), jadi tidak menambah beban di runtime.

## Deploy ke Vercel

1. Push project ini ke repository GitHub.
2. Login ke [vercel.com](https://vercel.com) menggunakan akun Anda.
3. Klik **Add New → Project**, lalu **Import** repository GitHub tadi.
4. Vercel otomatis mendeteksi framework **Next.js** — biarkan pengaturan
   default (Build Command: `next build`, Output: otomatis terdeteksi dari
   `output: "export"`).
5. Klik **Deploy** dan tunggu proses build selesai.
6. Setelah live, buka **Settings → Domains** untuk menambahkan custom domain
   (misalnya `fintasticfishing.com`).

## Deploy ke Netlify (alternatif)

1. Login ke [netlify.com](https://netlify.com).
2. Klik **Add new site → Import an existing project**.
3. Pilih **Import from GitHub** dan hubungkan repository project ini.
4. Atur:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Klik **Deploy site**.
6. Setelah live, buka **Site configuration → Domain management** untuk
   menambahkan custom domain.

## Menghubungkan Domain

1. Beli domain (misalnya di Niagahoster, Domainesia, Namecheap, dll).
2. Arahkan DNS domain ke Vercel/Netlify sesuai instruksi yang diberikan
   platform saat Anda menambahkan domain (biasanya berupa record `A` atau
   `CNAME`).
3. Aktifkan HTTPS — Vercel & Netlify otomatis menerbitkan sertifikat SSL
   gratis begitu DNS terverifikasi, tidak perlu langkah manual tambahan.
4. Submit `sitemap.xml` (mis. `https://fintasticfishing.com/sitemap.xml`) ke
   **Google Search Console** agar halaman lebih cepat terindeks.

## Checklist SEO Sebelum Go-Live

- [ ] Ganti semua placeholder domain `https://fintasticfishing.com` di
      `lib/data.ts` (`siteConfig.url`) dan `public/sitemap.xml` dengan domain
      asli yang sudah aktif.
- [ ] Ganti `siteConfig.mapEmbedSrc` di `lib/data.ts` dengan embed Google Maps
      yang mengarah persis ke titik lokasi toko (ambil dari Google Maps →
      Share → Embed a map).
- [ ] Update `siteConfig.openingHours` & `openingHoursSchema` dengan jam
      operasional asli (saat ini placeholder).
- [ ] Pastikan **Name, Address, Phone (NAP)** di website ini identik persis
      dengan yang terdaftar di Google Business Profile.
- [ ] Verifikasi & klaim **Google Business Profile** untuk Fintastic Fishing,
      lalu (opsional) hubungkan Google Business Profile API supaya
      `components/GoogleReviews.tsx` bisa menampilkan ulasan asli — lihat
      komentar di dalam file tersebut untuk caranya.
- [ ] Ganti `public/og-image.png` dengan foto asli toko/alat pancing (rasio
      1200×630, dikompresi, idealnya < 300 KB) untuk tampilan preview yang
      lebih meyakinkan saat dibagikan di WhatsApp/media sosial.
- [ ] Update data paket sewa & harga di `lib/data.ts` begitu tersedia (jangan
      publish harga sebelum datanya pasti).
- [ ] Lengkapi daftar alat di `equipmentList` (`lib/data.ts`) sesuai stok
      aktual.
- [ ] Jalankan `npm run build` tanpa error sebagai pengecekan akhir sebelum
      deploy.
- [ ] Setelah live: submit `sitemap.xml` ke Google Search Console & Bing
      Webmaster Tools.
- [ ] Cek hasil di [PageSpeed Insights](https://pagespeed.web.dev/) untuk
      memastikan Core Web Vitals baik di versi mobile.
- [ ] Cek tampilan mobile, tablet, dan desktop langsung di perangkat asli.
- [ ] Test semua tombol WhatsApp membuka chat dengan nomor & pesan yang benar.

## Catatan Implementasi Penting

- **Static export** (`output: "export"` di `next.config.mjs`) membuat situs
  ini murni file statis (HTML/CSS/JS) — cepat, ringan, dan kompatibel dengan
  Vercel, Netlify, atau hosting statis apa pun tanpa server Node.js.
- **Tidak ada foto berat**: seluruh ilustrasi memakai SVG custom
  (`components/icons.tsx`, `WaveDivider.tsx`) supaya halaman tetap ringan.
  Saat pemilik toko punya foto asli (alat pancing, suasana toko), foto bisa
  ditambahkan lewat komponen `next/image` dengan `loading="lazy"` (otomatis
  di Next.js) tanpa mengubah struktur lain.
- **Ulasan Google**: mengikuti opsi resmi (Opsi A/B pada brief) — komponen
  `GoogleReviews.tsx` menampilkan testimonial placeholder sekarang dan sudah
  disiapkan untuk menerima data asli dari Google Business Profile API lewat
  prop `reviews`. Tidak ada scraping Google Maps di kode ini.
- **Schema JSON-LD**: `LocalBusiness` dipasang di `app/layout.tsx` (tampil di
  setiap halaman) dan `FAQPage` dipasang di `app/page.tsx` sesuai isi FAQ.
