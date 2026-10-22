import Link from "next/link";
import { FullLogo } from "@/components/Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-navy/15 bg-mist">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <FullLogo className="h-auto w-56" />
        </div>
        <nav aria-label="Footer">
          <p className="text-xs uppercase tracking-[0.2em] text-red">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-red">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-red">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-red">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-red">
                {site.phone}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/15 py-6 text-center text-xs text-ink/50">
        © <CopyrightYear /> {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}

async function CopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}
