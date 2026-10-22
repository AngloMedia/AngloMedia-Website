import type { Metadata } from "next";
import { CallToAction, Eyebrow, GoldRule, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Training" };

const programmes = [
  {
    title: "Corporate Communication Skills",
    audience: "For employees and teams",
    text: "Business writing, email etiquette, meetings and negotiation in English.",
  },
  {
    title: "Presentation & Public Speaking",
    audience: "For leaders and professionals",
    text: "Structure, delivery and confidence when presenting to English-speaking audiences.",
  },
  {
    title: "Media Readiness",
    audience: "For spokespeople and executives",
    text: "Preparing for interviews, press conferences and public statements.",
  },
  {
    title: "Academic Communication",
    audience: "For students and educational institutions",
    text: "Academic writing, research presentation and communication skills for study and careers.",
  },
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Education"
        title="Stronger communication skills for teams and students"
        intro="Practical, tailored programmes that help employees and students communicate with clarity and confidence in English."
      />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>Programmes</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl font-semibold">
          Designed around your organisation
        </h2>
        <GoldRule />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {programmes.map((p) => (
            <div key={p.title} className="border border-gold/25 bg-charcoal p-8 transition-colors hover:border-gold">
              <p className="text-xs uppercase tracking-[0.2em] text-burgundy brightness-150">
                {p.audience}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-gold">
                {p.title}
              </h3>
              <p className="mt-3 text-cream/75">{p.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-cream/70">
          All programmes can be delivered in person or online, as workshops or
          longer courses, and adapted to your sector and goals.
        </p>
      </section>

      <CallToAction />
    </>
  );
}
