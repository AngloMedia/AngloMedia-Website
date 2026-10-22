// The A/M monogram from the AngloMedia logo.
export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label="AngloMedia">
      <text
        x="0"
        y="54"
        fontSize="66"
        fill="var(--red)"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        A
      </text>
      <line x1="72" y1="6" x2="34" y2="94" stroke="var(--ink)" strokeOpacity="0.85" strokeWidth="2.5" />
      <text
        x="38"
        y="98"
        fontSize="66"
        fill="var(--navy)"
        style={{ fontFamily: "var(--font-cormorant)" }}
      >
        M
      </text>
    </svg>
  );
}

export function Logo({ withTagline = false }: { withTagline?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Monogram className="h-12 w-12 shrink-0" />
      <span className="flex flex-col">
        <span className="text-sm font-medium uppercase tracking-[0.35em] text-ink">
          AngloMedia
        </span>
        {withTagline && (
          <span className="mt-1 font-serif text-sm italic tracking-[0.15em] text-ink/70">
            communications &amp; public relations
          </span>
        )}
      </span>
    </span>
  );
}
