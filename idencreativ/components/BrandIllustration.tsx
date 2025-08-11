export default function BrandIllustration() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-64 md:h-80">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFC107" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#F96E46" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="400" height="300" fill="url(#g1)" rx="16" />
      <circle cx="80" cy="80" r="36" fill="#FFC107" opacity="0.55" />
      <circle cx="330" cy="70" r="22" fill="#228B22" opacity="0.35" />
      <rect x="110" y="160" width="180" height="16" rx="8" fill="#0A1937" opacity="0.18" />
      <rect x="110" y="185" width="140" height="12" rx="6" fill="#0A1937" opacity="0.12" />
      <rect x="110" y="205" width="90" height="12" rx="6" fill="#0A1937" opacity="0.12" />
    </svg>
  );
}