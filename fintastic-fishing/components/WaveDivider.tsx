type WaveDividerProps = {
  /** Warna area DI ATAS divider (warna yang "ditutupi" oleh gelombang) */
  fromClassName?: string;
  /** Warna gelombang itu sendiri, harus sama dengan background section berikutnya */
  toColor: string;
  flip?: boolean;
};

// Pembatas antar section berbentuk gelombang tipis — merepresentasikan
// "nuansa laut" tanpa memakai foto/ilustrasi berat.
export default function WaveDivider({ toColor, flip = false }: WaveDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-10 w-full overflow-hidden sm:h-14 ${flip ? "rotate-180" : ""}`}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
      >
        <path
          d="M0 40c120 20 240 20 360 6s240-26 360-20 240 26 360 20 240-26 360-6v40H0V40Z"
          fill={toColor}
        />
      </svg>
    </div>
  );
}
