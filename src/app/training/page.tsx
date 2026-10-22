import type { Metadata } from "next";
import { CallToAction, Eyebrow, GoldRule, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Training" };

const programmes = [
  {
    title: "English Writing for Business",
    audience: "For corporate clients",
    text: "Business writing, reports, emails and correspondence in clear, professional English.",
  },
  {
    title: "Corporate Communication Skills",
    audience: "For employees and teams",
    text: "Meetings, negotiation and everyday workplace communication in English.",
  },
  {
    title: "Presentation & Public Speaking",
    audience: "For leaders and professionals",
    text: "Structure, delivery and confidence when presenting to English-speaking audiences.",
  },
  {
    title: "Academic Communication",
    audience: "For students and educational institutions",
    text: "Academic writing, research presentation and communication skills for study and careers.",
  },
];

const steps = [
  "Send us your CV",
  "We review your profile",
  "Complete the certification course",
  "Receive your AngloMedia referral letter",
];

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Education"
        title="Stronger English skills for teams, students and job seekers"
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
              <p className="text-xs uppercase tracking-[0.2em] text-burgundy-light">
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

      <section className="bg-charcoal">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <Eyebrow>Careers</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Referral &amp; Certification Programme
            </h2>
            <GoldRule />
            <p className="text-cream/80">
              We connect qualified people with English-speaking jobs. Send us
              your CV: we review it, and candidates who complete our
              certification course can receive a letter of referral from
              AngloMedia, an endorsement designed to open doors.
            </p>
          </div>
          <ol className="space-y-6 self-center">
            {steps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-5">
                <span className="font-serif text-4xl text-burgundy-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-cream/85">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
