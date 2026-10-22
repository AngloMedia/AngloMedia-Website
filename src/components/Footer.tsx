import Link from "next/link";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-gold/20 bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold">
            Anglo<span className="text-gold">Media</span>
          </p>
          <p className="mt-3 text-sm text-cream/70">{site.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-gold">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-gold">
                {site.email}
              </a>
            </li>
            <li>{site.phone}</li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-cream/50">
        © <CopyrightYear /> {site.name}. All rights reserved.
      </div>
    </footer>
  );
}

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}
