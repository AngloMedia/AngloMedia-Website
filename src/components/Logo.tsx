import Image from "next/image";
import logo from "../../public/brand/anglomedia-logo.png";
import monogram from "../../public/brand/anglomedia-monogram.png";

// Compact header version: the A/M monogram from the logo file beside the name.
export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <Image src={monogram} alt="" priority className="h-11 w-auto" />
      <span className="text-sm font-medium uppercase tracking-[0.35em] text-ink">
        AngloMedia
      </span>
    </span>
  );
}

// The full logo, including the tagline.
export function FullLogo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="AngloMedia: communications & public relations"
      className={className}
    />
  );
}
