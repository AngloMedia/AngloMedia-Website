import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-[0.3em] text-red">{children}</p>
  );
}

export function Rule() {
  return <div className="my-6 h-px w-16 bg-red" />;
}

// Crossing diagonal bands inspired by the Anglosphere flag.
export function FlagBands({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" preserveAspectRatio="xMaxYMin slice">
      <polygon points="110,0 200,0 400,200 400,290" fill="var(--blue)" />
      <polygon points="400,30 400,120 120,400 30,400" fill="var(--red)" />
    </svg>
  );
}

export function TriStripe() {
  return (
    <div className="flex h-1" aria-hidden="true">
      <span className="flex-1 bg-red" />
      <span className="flex-1 bg-white" />
      <span className="flex-1 bg-blue" />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      <FlagBands className="absolute right-0 top-0 h-full w-1/2 opacity-25 md:opacity-40" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-white/70">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">
          {title}
        </h1>
        <div className="my-6 h-px w-16 bg-red" />
        <p className="max-w-2xl text-lg text-white/85">{intro}</p>
      </div>
    </section>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const styles =
    variant === "solid"
      ? "bg-red text-white hover:bg-red-dark"
      : "border border-red text-red hover:bg-red hover:text-white";
  return (
    <Link
      href={href}
      className={`inline-block px-8 py-3 text-sm font-medium uppercase tracking-[0.2em] transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}

export function CallToAction() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-16 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl">
            Ready to reach your audience in Morocco?
          </h2>
          <p className="mt-3 text-white/80">
            Tell us about your goals and we will shape the right message.
          </p>
        </div>
        <ButtonLink href="/contact">Get in touch</ButtonLink>
      </div>
    </section>
  );
}
