import type { Metadata } from "next";
import { CallToAction, Eyebrow, GoldRule, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

const values = [
  {
    title: "Local insight",
    text: "We understand Morocco's culture, institutions and media landscape, and how English-speaking audiences here are growing.",
  },
  {
    title: "English expertise",
    text: "Native-level English writing, editing and communication delivered to an international standard.",
  },
  {
    title: "Trusted partnership",
    text: "We work closely with every client, from multinational firms to embassies and universities, with discretion and care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AngloMedia"
        title="Connecting organisations with English-speaking Morocco"
        intro="AngloMedia helps corporate clients, educational institutions, embassies and civic organisations expand their reach in Morocco's fast-growing English-speaking markets."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold">Who we are</h2>
          <GoldRule />
        </div>
        <div className="space-y-5 text-cream/80">
          {/* TODO: replace with AngloMedia's own story. */}
          <p>
            English is rapidly becoming a language of business, education and
            diplomacy in Morocco. AngloMedia was founded to help organisations
            make the most of that shift, with communication that is clear,
            credible and culturally aware.
          </p>
          <p>
            We bring together public relations, content creation, editing and
            training under one roof, so our clients can speak with confidence
            to the audiences that matter most.
          </p>
        </div>
      </section>

      <section className="bg-charcoal">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>What sets us apart</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold">Our values</h2>
          <GoldRule />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="border-t-2 border-burgundy pt-6">
                <h3 className="font-serif text-2xl font-semibold text-gold">
                  {value.title}
                </h3>
                <p className="mt-3 text-cream/75">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
