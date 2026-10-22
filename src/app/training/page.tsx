import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { CallToAction, Eyebrow, Rule, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "Training" };

const programmes = [
  {
    title: "English Writing for Business",
    audience: "For corporate clients",
    signup: true,
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
        <Rule />
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {programmes.map((p) => (
            <div key={p.title} className="border border-navy/15 bg-mist p-8 transition-colors hover:border-red">
              <p className="text-xs uppercase tracking-[0.2em] text-red">
                {p.audience}
              </p>
              <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">
                {p.title}
              </h3>
              <p className="mt-3 text-ink/75">{p.text}</p>
              {p.signup && (
                <Link
                  href="#register"
                  className="mt-5 inline-block text-sm font-medium uppercase tracking-[0.2em] text-red hover:text-red-dark"
                >
                  Register your interest →
                </Link>
              )}
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-ink/70">
          All programmes can be delivered in person or online, as workshops or
          longer courses, and adapted to your sector and goals.
        </p>
      </section>

      <section id="register" className="scroll-mt-24 bg-navy">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Sign up</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-white">
              English Writing for Business
            </h2>
            <div className="my-6 h-px w-16 bg-red" />
            <p className="text-white/80">
              Leave your email and phone number and we will contact you with
              course dates, format and fees.
            </p>
          </div>
          <div className="bg-white p-8">
            <ContactForm programme="English Writing for Business" />
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <Eyebrow>Careers</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl font-semibold">
              Referral &amp; Certification Programme
            </h2>
            <Rule />
            <p className="text-ink/80">
              We connect qualified people with English-speaking jobs. Send us
              your CV: we review it, and candidates who complete our
              certification course can receive a letter of referral from
              AngloMedia, an endorsement designed to open doors.
            </p>
          </div>
          <ol className="space-y-6 self-center">
            {steps.map((step, i) => (
              <li key={step} className="flex items-baseline gap-5">
                <span className="font-serif text-4xl text-red">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-ink/85">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
