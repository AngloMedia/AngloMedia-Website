import type { Metadata } from "next";
import { CallToAction, PageHero } from "@/components/ui";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Public relations, communications and content"
        intro="Everything you need to present your organisation clearly and confidently to Morocco's English-speaking audiences."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="space-y-px bg-navy/10">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="grid gap-8 bg-white py-12 md:grid-cols-[120px_1fr_1fr]"
            >
              <p className="font-serif text-5xl text-red">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div>
                <h2 className="font-serif text-3xl font-semibold text-navy">
                  {service.title}
                </h2>
                <p className="mt-3 text-ink/80">{service.summary}</p>
              </div>
              <ul className="space-y-3 text-ink/75">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </>
  );
}
