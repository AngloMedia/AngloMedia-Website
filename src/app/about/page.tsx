import type { Metadata } from "next";
import { CallToAction, Eyebrow, Rule, PageHero } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

const commitments = [
  "Public relations for institutions and businesses",
  "Promoting new businesses and business opportunities",
  "Helping people find English-speaking jobs",
  "Referral letters and certification for job seekers",
  "Surveys and audience research",
  "In-depth articles on culture, religion, technology, politics and lifestyles",
];

const team = [
  { title: "PR professionals", text: "Building reputations and opening doors for institutions and businesses." },
  { title: "Writers", text: "Creating and editing clear, compelling English for every audience." },
  { title: "Teachers & trainers", text: "Strengthening the English communication skills of students and employees." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About AngloMedia Group"
        title="The power of English, working for you"
        intro="AngloMedia Group is a team of dedicated public relations professionals, writers, teachers and trainers based in Rabat, Morocco. We use the power of English to expand your customer base and enhance your communication skills."
      />

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <Eyebrow>Our mission</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold">
            Connecting the English-speaking community
          </h2>
          <Rule />
        </div>
        <div className="space-y-5 text-ink/80">
          <p className="font-serif text-2xl italic leading-snug text-navy">
            To provide a means of communication to English-speaking residents,
            consumers, professionals, businesses and institutions in the Middle
            East and North Africa (MENA) community.
          </p>
          <p>
            We connect people with opportunities: businesses with new
            customers, institutions with their audiences, and talented
            employees with the jobs that suit them.
          </p>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <Eyebrow>Who we are</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl font-semibold">Our team</h2>
          <Rule />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <div key={member.title} className="border-t-2 border-red pt-6">
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  {member.title}
                </h3>
                <p className="mt-3 text-ink/75">{member.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-4 font-serif text-4xl font-semibold">How we serve the community</h2>
        <Rule />
        <ul className="mt-6 grid gap-x-12 gap-y-4 text-ink/80 md:grid-cols-2">
          {commitments.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-red" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <CallToAction />
    </>
  );
}
